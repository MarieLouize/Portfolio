# Proof 4 — AcePadi Beta Customer Success Program

**Proof Class:** REAL EXPERIENCE

---

**Proof ID:** WOS-CS-004  
**Capability:** Customer Onboarding, Cohort Operations, QBR & Health Scoring, Churn / Dropout Mitigation  
**Operational Stage:** User Onboarding & Support  
**Proof Class:** REAL EXPERIENCE  

---

## 1. Context & Executive Summary

Over four consecutive beta testing cycles spanning roughly 12 months, AcePadi operated an asynchronous study application for computer science undergraduates. The primary operational challenge was **cohort churn**: student users would sign up during initial campus outreach, engage actively for 48–72 hours, and then drop off before reaching core study milestones.

As the operational lead across onboarding and retention, I designed, tested, and iterated the entire Customer Success program. Rather than relying on sporadic broadcast messages, I built a 4-part operating system:
1. **Cohort Onboarding Playbook:** A structured 7-day milestone checklist that accelerated time-to-first-value (TTFV) from 5 days down to 24 hours.
2. **Beta Health Check (QBR-Style):** A recurring analysis synthesizing product analytics, user sentiment, and exam-season readiness.
3. **At-Risk Tester Escalation SOP:** A triage protocol triggered when a user went silent for >5 days.
4. **Data-Driven Outreach A/B Testing:** A controlled experiment testing *Mission Briefing* vs. *Peer Story* messaging tone.

---

## 2. The Playbook: 200-Level CS Cohort Onboarding

The goal of this playbook is to guide a new student from initial signup to their first completed multi-stage study mission within 24 hours.

```
DAY 0: VERIFICATION & ENVIRONMENT SETUP
├── Step 0.1: Email confirmation verified & WhatsApp cohort community link delivered
├── Step 0.2: Diagnostic quiz completed to establish baseline syllabus pacing
└── Milestone 0: Account provisioned + Course track assigned (e.g., Relational Databases / Algorithms)

DAY 1: FIRST MILESTONE (Time-to-Value)
├── Step 1.1: Automated 2-minute "Welcome Mission" dispatch
├── Step 1.2: First flash recall session completed (5 questions)
└── Milestone 1: First faction XP reward unlocked

DAY 3: HABIT FORMATION & CHECK-IN
├── Step 3.1: Async prompt: "How did your first module feel?"
└── Milestone 2: 3 consecutive study sessions logged

DAY 7: COHORT HEALTH REVIEW
├── Step 7.1: Assessment of weekly mission completion percentage
└── Step 7.2: Route into 'Active Promoter' or 'At-Risk Escalation'
```

### Onboarding Milestones Checklist

| Milestone | Target Completion | Success Indicator | Automated Trigger |
| :--- | :---: | :--- | :--- |
| **M1: Profile & Track Set** | < 2 hrs | Course track selected in settings | Welcome macro sent |
| **M2: First Study Session** | < 24 hrs | 1 module completed | Faction card unlock event |
| **M3: Weekly Mission** | < 7 days | $\ge 4$ modules completed | Eligible for beta rewards |

---

## 3. The Process: Beta Health Check & QBR Framework

Modeled after B2B SaaS Quarterly Business Reviews, this health check was compiled at the end of each exam-prep beta cycle to evaluate cohort retention, product friction, and pipeline performance.

### Cohort Performance Scorecard (Cycle 3 Sample)

| Metric Category | Target Benchmark | Actual Measured | Variance / Status |
| :--- | :---: | :---: | :--- |
| **Onboarding Activation (Day 1)** | 65% | **74.2%** | $+9.2\%$ (Onboarding checklist impact) |
| **Week-2 Retention Rate** | 40% | **48.6%** | $+8.6\%$ (De-escalation SOP impact) |
| **Weekly Active Study Days** | $\ge 3.0$ days | **3.4 days** | Meets target |
| **Support Ticket Resolution** | $< 24$ hrs | **4.2 hrs** | Outperforming SLA |
| **Net Promoter Score (NPS)** | $+40$ | **$+52$** | High satisfaction among active cohort |

---

## 4. The SOP: At-Risk Tester Intervention Protocol

When product analytics flag that a tester has not opened a study module for $\ge 5$ days, the automated system tags the account as `risk_churn` and initiates this standard operating procedure.

```
[Trigger: No app activity for 5 consecutive days]
                        │
                        ▼
            ┌────────────────────────┐
            │ Step 1: Health Audit   │
            │ Review: Track, Quiz    │
            │ baseline, Last Ticket  │
            └───────────┬────────────┘
                        │
                        ▼
            ┌────────────────────────┐
            │ Step 2: 1-on-1 Outreach│
            │ Empathetic Async Check │
            │ via WhatsApp / Email   │
            └───────────┬────────────┘
                        │
       ┌────────────────┴────────────────┐
       ▼                                 ▼
[User Responds within 48h]      [No Response within 48h]
       │                                 │
       ▼                                 ▼
┌────────────────────────┐      ┌────────────────────────┐
│ Step 3A: Resolve Block │      │ Step 3B: Final Soft Nudge│
│ Bug repro / Topic reset│      │ "We saved your spot..."│
└────────────────────────┘      └────────────────────────┘
```

### Outreach Macro: The "Friction Audit" Check-In
> *"Hi [First Name], Marie-Louize here from the AcePadi beta team. I noticed you made great progress through the Relational Databases module earlier this week, but haven't had a chance to complete Mission 2 yet.*  
> *Are you running into any bugs or confusing lesson blocks, or is school coursework just heavy right now? If there's an issue with the app, let me know and I'll jump in to fix it for you."*

---

## 5. The Experiment: Tone & Engagement A/B Test

During the final pre-exam study wave, we ran a controlled A/B test across 120 beta participants to determine whether a **Mission Briefing (Gamified/Tactical)** tone or a **Peer Story (Relatable/Empathetic)** tone drove higher message open and response rates.

### Experiment Design & Results

| Variant | Angle & Hook | Sent | Open Rate | Reply Rate | Module Completion |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **Variant A** (Mission Briefing) | *"Your 100-XP study directive for Algorithms is live. Time to defend your faction standing."* | 60 | 68.3% | 18.3% | 31.6% |
| **Variant B** (Peer Story) | *"How 3 students in your cohort mastered normalization in 15 minutes before tomorrow's quiz."* | 60 | **83.3%** | **35.0%** | **51.7%** |

### Key Insight
Variant B outperformed Variant A across every engagement metric ($+15\%$ open rate, $+16.7\%$ reply rate, $+20.1\%$ module completion). Student users responded significantly better to peer social proof and relatable time commitments than to abstract gamified point systems. This finding directly shaped the macro library in [Proof 1](../01-support-technical-ops/queue/).

---

## 6. What I Learned & Operational Reflection

Customer Success in early-stage products is not cheerleading; it is **friction diagnosis**. When a customer stops using a product, they rarely tell you why—they just drift away. By creating explicit health check triggers, separating users by cohort progression, and treating outreach as a diagnostic inquiry rather than a sales reminder, we proved that churn can be intercepted before it becomes permanent.

## Public / Private Status
Public — aggregated percentages, anonymized student cohort cohorts, and sanitized operational playbooks; individual student identifiers and internal database credentials excluded.
