# Proof 3 — Deliberately Broken Integration Investigation

**Proof Class:** SIMULATION  
**Standing in for:** a real cross-service production incident. Converts to real once a genuine Trovéa integration bug is caught live.

---

## Scenario

Trovéa's Customize Store lets a merchant set Theme, Color, Accent Tone, Typography, and Motion independently. This case stages a realistic cross-service failure between the `customize-store` service (handles saves) and the `storefront-render` service (reads the current config to render the live page).

**Reported symptom:** A merchant sets Typography to "Serif Display" while Theme is set to "Vibrant." The save appears to succeed in the UI, but the live storefront keeps rendering the previous typography until a hard refresh — and sometimes reverts entirely after a few minutes.

## Reproduction

```bash
curl -X PATCH https://api.trovea.app/v1/stores/{store_id}/customize \
  -H "Authorization: Bearer {merchant_token}" \
  -H "Content-Type: application/json" \
  -d '{
        "theme": "vibrant",
        "typography": "serif-display"
      }'
```

**Response received:**

```json
{
  "status": "ok",
  "updated_fields": ["theme", "typography"],
  "config_version": 118
}
```

The save endpoint reports success and increments the config version — the write itself is not the problem.

**Immediately following read** (simulating the storefront-render service's fetch):

```bash
curl https://api.trovea.app/v1/stores/{store_id}/render-config
```

**Response received:**

```json
{
  "theme": "vibrant",
  "typography": "sans-modern",
  "config_version": 117
}
```

The render config is still on version 117 — one behind the just-confirmed save.

## Staged Log Excerpt

```text
12:04:02.881  customize-store   PATCH /stores/{id}/customize  200  config_version=118
12:04:02.910  storefront-render CACHE_HIT config_version=117 (ttl_remaining=41s)
12:04:03.004  storefront-render served render-config from cache (v117)
12:04:44.512  storefront-render CACHE_EXPIRED config_version=117 -> refetch
12:04:44.601  storefront-render CACHE_MISS -> pulled config_version=118 from customize-store
```

## Root Cause

A race condition, not a broken write. `customize-store` saves and versions correctly. `storefront-render` caches the config with a TTL (~41s remaining at the moment of this save) and has no invalidation hook tied to the save event — it only picks up the new version once its own cache naturally expires. Between the save and the next cache expiry, the storefront renders stale typography. This matches the same failure family flagged in ticket [TR-S01](../queue/README.md#tr-s01--customize-store-theme-reverts-to-editorial-default-after-refresh) in the support queue, where the symptom looked like a revert rather than a delay — likely the same root cause, observed at a different point in the cache's TTL window.

## Sanitized Engineering Handoff Ticket

> **Title:** Customize Store saves not reflected on storefront until cache TTL expires (up to ~60s stale window)  
> **Severity:** Sev-2 — visible to buyers, no data loss, workaround exists (hard refresh after TTL).  
> **Reproduction:** PATCH to `/stores/{id}/customize` returns 200 and increments `config_version` correctly. A near-simultaneous GET to `/stores/{id}/render-config` from `storefront-render` returns the previous `config_version`, served from cache, until the TTL naturally expires.  
> **Suspected cause:** `storefront-render`'s config cache has no invalidation hook on `customize-store`'s save event — it relies purely on TTL expiry.  
> **Suggested fix direction:** Either (a) have `customize-store` emit a cache-invalidation event that `storefront-render` subscribes to, or (b) have the save response include the new config directly so the client can bypass the stale render-config read entirely for the merchant's own preview.  
> **Payload used to reproduce:** `{"theme": "vibrant", "typography": "serif-display"}` — no PII, safe to attach directly to the ticket.

## What I Learned (staged reflection)

The failure looks like "the save doesn't work" from the merchant's side, but the save is fine — it's a read-path caching gap. That distinction is the whole point of this proof: separating "reported symptom" from "actual mechanism" before proposing a fix, and handing engineering a reproduction that doesn't require them to also do the diagnosis.

## Public / Private Status

Public — entirely staged/fictional payloads and identifiers; no real Trovéa infrastructure details, since none exist yet for this product.
