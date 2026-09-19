# Proof 1 — AcePadi + Trovéa Support Queue

**Proof Class:** REAL EXPERIENCE (AcePadi tickets, below) + SIMULATION (Trovéa tickets, below)  
**Standing in for (Trovéa half):** live Trovéa merchant support tickets. Converts to real once Trovéa is in beta with active stores.

This queue is split deliberately rather than blended: the AcePadi tickets are drawn from roughly a year of real beta-cycle support, while the Trovéa tickets are staged from the storefront spec because Trovéa has no live users yet. Both halves use the same [ticket template](../../ticket-template.md) so the operating pattern reads as one continuous discipline, not two different exercises.

---

## Real Tickets — AcePadi Beta

### AP-014 — Faction card not unlocking after mission completion

**Summary:** A beta tester reported completing a weekly mission but their faction card stayed locked, with no unlock animation or notification.

**Symptoms:**
- Mission marked "complete" in the tester's progress view.
- Faction card UI still showed the locked/greyed-out state after app restart.

**Steps Taken:**
1. Checked whether the mission-completion event had fired — confirmed via the tester's activity log that it had.
2. Compared against a working case to isolate whether the break was in the unlock trigger or the UI refresh.
3. Found the unlock state was being written correctly server-side, but the client wasn't re-fetching card state after the mission-completion callback — a stale local cache issue, not a broken unlock.

**Resolution:** Manually triggered a client refresh for the affected tester; card unlocked correctly once the fresh state loaded.

**Root Cause:** The mission-completion callback updated the server record but didn't invalidate the client's cached card state, so the UI kept rendering the pre-unlock version until the next full app reload.

**Preventive Notes:** Cache invalidation should be tied to the same event that fires the unlock, not left to a separate refresh cycle. Flagged as a UI/state bug for the client team rather than a content or pipeline issue.

**Screenshots:** None.

---

### AP-021 — Lesson content repeating the same block type three times in a row

**Summary:** A tester flagged that a study session felt repetitive — three consecutive content blocks were all the same type (flashcard-style recall), with no variation in format.

**Symptoms:**
- Session felt monotonous per tester feedback; no technical error, purely a content-quality complaint.

**Steps Taken:**
1. Pulled the generation log for the affected session and confirmed the block-type sequence matched the complaint.
2. Traced the issue upstream to the content pipeline's block-selection logic, which had no memory of recently used block types within a session.
3. This investigation became the root-cause work detailed in full in [`../pipeline-diagnosis/`](../pipeline-diagnosis/) — cross-linked here rather than duplicated.

**Resolution:** See the linked pipeline-diagnosis proof for the full fix (Recent Block Log + Concept Ledger + Phrase Ledger).

**Root Cause:** The pipeline's orchestrator had no structure tracking recently used block types or phrasing, so repetition wasn't being actively prevented — just left to chance.

**Preventive Notes:** This ticket is the origin story for a systemic fix, not a one-off patch — the strongest example in this queue of a support ticket escalating into a real engineering investigation.

**Screenshots:** None.

---

### AP-033 — Beta tester locked out after email confirmation link expired

**Summary:** A new beta signup couldn't access the app because their confirmation link had expired before they clicked it.

**Symptoms:**
- "Link expired" error on confirmation page.
- No self-serve way to request a new link from that screen.

**Steps Taken:**
1. Verified the tester's signup record existed but was stuck in an unconfirmed state.
2. Manually triggered a new confirmation email.
3. Confirmed the tester could then complete signup.

**Resolution:** Manual resend got the tester in; documented as a recurring pattern rather than a one-off.

**Root Cause:** No self-serve resend option on the expired-link screen, so every expiry became a manual support task.

**Preventive Notes:** This is the clearest ticket-deflection candidate in the queue — a "resend confirmation" button would remove this entire category of ticket. Flagged in the automation roadmap below.

**Screenshots:** None.

---

## Simulated Tickets — Trovéa (staged from the storefront spec)

### TR-S01 — Customize Store theme reverts to Editorial default after refresh

**Summary:** A merchant sets their storefront theme to "Vibrant," refreshes the page, and finds it's silently reverted to the "Editorial" default.

**Symptoms:**
- Theme selection appears to save (UI shows "Vibrant" selected) but doesn't persist across a page reload.

**Steps Taken:**
1. Reproduced by setting the theme, refreshing immediately, and confirming the revert.
2. Checked whether the save request was firing — it was, and returning a 200.
3. Suspected a read-after-write timing issue between the save endpoint and the render service reading stale cached state.

**Resolution:** Staged fix: force a cache-bust on theme reads immediately after a successful save.

**Root Cause:** A race condition between the customize-store save endpoint and the storefront-render service's cache — the exact failure mode detailed fully in [`../incident-investigation/`](../incident-investigation/).

**Preventive Notes:** Cross-linked rather than duplicated — see the incident-investigation proof for the full reproduction and handoff ticket.

**Screenshots:** None (simulated).

---

### TR-S02 — Delivery matrix shows wrong fee for a cross-state fashion resale order

**Summary:** A buyer in a different state from the seller sees a delivery fee that doesn't match the delivery matrix's stated cross-state rate.

**Symptoms:**
- Checkout fee is flat-rate (same-state price) instead of the higher cross-state rate.

**Steps Taken:**
1. Reproduced with a same-state and cross-state test order side by side.
2. Found the delivery matrix lookup was keying off the seller's default region rather than the actual buyer-seller region pair.

**Resolution:** Staged fix: key the delivery fee lookup off both buyer and seller region, not seller-only.

**Root Cause:** The matrix lookup was written for a single-region assumption that doesn't hold once cross-state orders exist.

**Preventive Notes:** Worth a regression test covering every buyer/seller region pairing before this ships for real.

**Screenshots:** None (simulated).

---

### TR-S03 — Drop countdown timer shows negative time after a timezone mismatch

**Summary:** A merchant scheduling a product drop in WAT sees the countdown timer go negative for buyers viewing in a different timezone.

**Symptoms:**
- Countdown reaches zero and continues into negative numbers instead of switching to "Live."

**Steps Taken:**
1. Reproduced by setting a drop time in WAT and viewing from a UTC-shifted test device.
2. Found the countdown was computed against the device's local clock without normalizing the drop time to UTC first.

**Resolution:** Staged fix: store and compare drop times in UTC, convert to local only for display.

**Root Cause:** Classic timezone-normalization bug — comparing a WAT timestamp against a device's local time without a shared reference.

**Preventive Notes:** Any time-based commerce feature (drops, flash sales) needs this same UTC-first pattern from the start.

**Screenshots:** None (simulated).

---

## Macro Library

Drawn from the repeated real answers above — the point of a macro library is that these get reused, not rewritten each time:

- **Cache-refresh nudge** (used in AP-014 pattern): *"Thanks for flagging this — I can see the [feature] completed on our end but your app may be showing a cached view. Try closing and reopening the app; if that doesn't clear it, let me know and I'll refresh it from our side."*
- **Confirmation-link resend** (used in AP-033 pattern): *"Sorry about that — confirmation links expire after [X hours]. I've sent you a fresh one, it should land in the next few minutes."*
- **Content-quality acknowledgment** (used in AP-021 pattern): *"Thanks for the detailed feedback — that repetition isn't intended, and it's actually pointed us to a real gap in how content gets selected. Flagging it for the pipeline team."*

---

## Escalation Matrix

| Severity | Example | Response Target | Escalates To |
|---|---|---|---|
| **Sev-1** — blocks access entirely | AP-033 (signup lockout) | < 2 hrs | Immediate manual fix + roadmap flag |
| **Sev-2** — feature broken, workaround exists | AP-014 (stale cache) | < 24 hrs | Manual refresh now, client-team ticket for real fix |
| **Sev-3** — quality/experience complaint | AP-021 (repetition) | < 48 hrs | Content/pipeline team, tracked as improvement not bug |
| **Sev-2** — commerce-critical (staged) | TR-S01, TR-S02, TR-S03 | < 24 hrs | Engineering handoff ticket (see incident-investigation proof) |

---

## What I'd Automate First

Ranked by how many future tickets each would remove, not by build effort:

1. **Self-serve confirmation-link resend** (kills the entire AP-033 category outright).
2. **Cache invalidation tied to state-changing events** (kills the AP-014 category across faction cards, mission state, and other features sharing the same pattern).
3. **A pre-launch region-pairing test suite for Trovéa's delivery matrix**, before TR-S02's category can occur for real.
