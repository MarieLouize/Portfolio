# Proof 2 — AcePadi Content Pipeline Root-Cause Fix

**Proof Class:** REAL EXPERIENCE

---

**Proof ID:** WOS-SUP-002  
**Capability:** Technical investigation, root-cause diagnosis, system redesign  
**Job Door:** Support & Technical Operations (Diagnose)  
**Proof Class:** REAL EXPERIENCE  

## Problem

Beta testers reported that study sessions felt repetitive (see ticket [AP-021](../queue/README.md#ap-021--lesson-content-repeating-the-same-block-type-three-times-in-a-row) in the support queue). Investigation traced this to two compounding issues in the AI content-generation pipeline: low block-type diversity (the same content format — e.g. flashcard-style recall — repeating three or more times in a row) and non-pedagogical topic sequencing (concepts introduced in an order that didn't build on each other).

## Context

AcePadi's content pipeline generates study material for beta testers across multiple subjects. The pipeline had no memory of what it had just produced within a session, so nothing was actively preventing repetition or enforcing a sensible teaching order — both were left to chance in the underlying model's output.

## What I Did

Diagnosed the root cause as a missing-state problem rather than a prompting problem: the pipeline's orchestrator wasn't tracking what it had already generated, so there was nothing to condition the next generation step against. Designed and implemented three tracking structures to close that gap:

- **Concept Ledger** — tracks which concepts have already been covered, so sequencing can be checked against what the learner has actually seen so far, not just a fixed syllabus order.
- **Recent Block Log** — tracks the last several block types generated, so the next selection step can actively avoid repeating the same type.
- **Phrase Ledger** — tracks recently used phrasing, catching a subtler form of repetition that block-type tracking alone would miss.

Also expanded the pipeline's Stage 7 quality gates to check generated content against all three ledgers before it reaches a beta tester, rather than relying on the ledgers alone to prevent the problem upstream.

## Tools

The pipeline's own orchestration logic (in-house), plus the LLM provider(s) already in use for content generation.

## Artifact

The three ledger structures and the expanded Stage 7 gate logic, plus before/after content samples showing block-type and sequencing differences.

## Result

Sessions generated after the fix show materially reduced back-to-back repetition of block types and phrasing, and topic sequencing that respects what a given tester has already covered rather than a static order.

## Metric

*[Insert the specific measured diversity/sequencing improvement here once pulled from the real before/after data — e.g. "% of sessions with 3+ consecutive same-type blocks, before vs. after." Left as a placeholder rather than an invented number.]*

## Evidence

Before/after content samples; the ledger data structures; the expanded Stage 7 gate implementation. (See also [Proof 7](../../04-ai-ops-qa/eval-framework/) for the Stage 7 gates reframed specifically as an AI evaluation rubric.)

## What I Learned

Repetition and poor sequencing weren't prompting failures — they were an architecture gap. The fix wasn't "write a better prompt," it was "give the system memory of its own recent output." That distinction is the core of the diagnosis, and it's the part worth leading with in interviews: the instinct to look past the symptom (a bad-feeling session) to the structural cause (no state tracking) is the actual capability being demonstrated here.

## What Changed

The pipeline now carries session-level state across generation steps instead of treating each block as independent. This also became the direct input to two other proofs in this repo — the support ticket that started it ([AP-021](../queue/README.md)) and the AI QA rubric built from the same Stage 7 gates ([Proof 7](../../04-ai-ops-qa/eval-framework/)) — worth pointing out in interviews as one real fix generating three pieces of evidence.

## Public / Private Status

Public — architecture description and before/after samples only; no proprietary prompt text or model configuration details.
