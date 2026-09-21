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

As the operational lead across onboarding and retention, I designed, tested, and iterated the entire Customer Success program. Rather than relying on sporadic broadcast messages, I built a 5-part operating system:
1. **Cohort Onboarding Playbook:** A structured 7-day milestone checklist that accelerated time-to-first-value (TTFV) from 5 days down to 24 hours.
2. **Beta Health Check (QBR-Style):** A recurring analysis synthesizing product analytics, user sentiment, and exam-season readiness.
3. **At-Risk Tester Escalation SOP:** A triage protocol triggered when a user went silent for >5 days.
4. **Funnel Collapse Triage & Win-Back:** Diagnosing a critical 1-click onboarding latency drop (76% &rarr; 29%) and executing a closed-loop reconciliation campaign.
5. **Data-Driven Outreach A/B Testing:** A controlled experiment testing *Mission Briefing* vs. *Peer Story* messaging tone.

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

## 5. Live Case Study: The Exam-Season Funnel Collapse (76% → 29%) & Reconciliation Campaign

Customer Success in early-stage products is not cheerleading; it is **friction diagnosis and operational recovery**. When telemetry breaks or onboarding craters, the operator must separate vague human panic from technical root causes, escalate to engineering, and close the loop with affected users.

### 5.1 The Product Hypothesis
During an active email campaign run during university exams, our beta cohort was operating under acute academic stress and severe time constraints. To accelerate Time-to-First-Value (TTFV), I suggested introducing a **"1-Click Profile Setup"** shortcut on the initial welcome screen. Instead of requiring students to configure study tracks, daily pacing, and syllabus modules across multi-screen wizards, this button provisioned default course parameters with a single tap so they could immediately experience the core flashcard product.

### 5.2 The Funnel Collapse (76% → 29%)
Immediately after deploying the 1-click feature, our onboarding telemetry flagged a catastrophic failure:
- **Baseline Day-1 Activation Rate:** ~76% of new signups completing their initial study module.
- **Post-Deployment Activation Rate:** **Cratered to ~29%**.
- Over two-thirds of incoming student signups were abandoning the application within 60 seconds of registration.

```
                  ONBOARDING ACTIVATION FUNNEL COLLAPSE
   100% ┌──────────────────────────────────────────────────────────┐
        │ 1. Account Registrations (Exam Email Campaign)           │
    76% ├────────────────────────────┐                             │
        │ Pre-Deployment Baseline    │ 76% Day-1 Activation        │
    29% ├──────────────┐             └─────────────────────────────┤
        │ Post-Deploy  │ Collapse Window: Auxiliary Button Lag     │
     0% └──────────────┴───────────────────────────────────────────┘
```

### 5.3 Diagnostic Obstacles: False Signals & "Works on My Machine"
Isolating the breakdown presented three acute operational challenges:

1. **Misdirected User Complaints:** Incoming support tickets and community messages were vague and symptom-driven:
   - *"Why isn't it letting me sign in?"*
   - *"It's not working, something is wrong."*
   - *"The app is completely stuck."*
   Students naturally misattributed the onboarding screen freeze to an authentication or login failure, pointing initial triage in the wrong direction.
2. **The "Works on My Machine" Blind Spot:** When verifying the flow internally on development machines and fast office Wi-Fi, the 1-click button resolved in under 200ms and worked consistently. Reproducing the failure required decoupling developer conditions from real-world student mobile networks (unstable 3G/4G, high latency, packet loss).
3. **The Auxiliary Defect Masking Core Stability:** The standard, multi-step onboarding wizard was 100% functional. However, because the 1-click shortcut was presented prominently as the fastest path, users tapped it first. When it failed to respond immediately, they did not fall back to manual setup—they assumed the product was broken and closed the app.

### 5.4 Technical Diagnosis & Engineering Escalation
Through systematic network throttling (simulated Slow 3G / 1,500ms RTT) and client-side event inspection, I isolated the root cause:
- **Unhandled Latency & Missing Pending State:** The 1-click button triggered an unoptimized synchronous profile-generation API call without displaying a loading indicator or disabling the button on first tap.
- **Silent Abandonment & Request Collisions:** On high-latency mobile networks, the button appeared unresponsive. Frustrated students tapped repeatedly, generating duplicate concurrent setup requests that resulted in database lock contentions or silent client timeouts.
- **Engineering Escalation:** I submitted a sanitized P1 triage ticket with network throttling logs and reproduction parameters, recommending:
  1. Immediate optimistic UI feedback (spinner + disabled tap state on touch).
  2. Automatic 3-second timeout fallback routing directly to the manual setup wizard.

### 5.5 The Closed-Loop Reconciliation Campaign (Win-Back)
Fixing the code in production does not fix broken customer trust. Once engineering merged the patch, I drafted and executed a targeted **Reconciliation Win-Back Campaign** sent to every student who had registered during the failure window and stalled at activation.

#### Reconciliation Email Copy (Sanitized)
> **Subject:** We fixed the onboarding freeze — your exam study module is ready  
> 
> *Hi [First Name],*  
> 
> *Earlier this week, when you signed up for AcePadi to prepare for exams, our 1-click setup button froze instead of loading your study track. That was entirely on us, and we know your study time right now is extremely tight.*  
> 
> *We have resolved the latency issue and streamlined the setup. Your account is already configured for [Course Track] with all default syllabus modules unlocked.*  
> 
> *Click below to jump directly into your first 5-minute flashcard session without any setup screens:*  
> 
> **[Jump Directly to Mission 1 &rarr;]**  
> 
> *If anything still feels slow on your connection, reply directly to this email and I will personally troubleshoot it for you.*  
> 
> *Marie-Louize — AcePadi Beta Operations*

### 5.6 Quantitative Impact & Outcome
- **Cohort Recovery Rate:** **61.4%** of stalled signups returned via the reconciliation email link within 48 hours.
- **Stabilized Activation:** Day-1 onboarding activation rebounded from **29% back to 74.2%** (reflecting the measured benchmark in our QBR scorecard).
- **Net Promoter Impact:** Several students who received the direct, honest reconciliation note became our most active community advocates during the final exam sprint.

---

## 6. The Experiment: Tone & Engagement A/B Test

During the final pre-exam study wave, we ran a controlled A/B test across 120 beta participants to determine whether a **Mission Briefing (Gamified/Tactical)** tone or a **Peer Story (Relatable/Empathetic)** tone drove higher message open and response rates.

### Experiment Design & Results

| Variant | Angle & Hook | Sent | Open Rate | Reply Rate | Module Completion |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **Variant A** (Mission Briefing) | *"Your 100-XP study directive for Algorithms is live. Time to defend your faction standing."* | 60 | 68.3% | 18.3% | 31.6% |
| **Variant B** (Peer Story) | *"How 3 students in your cohort mastered normalization in 15 minutes before tomorrow's quiz."* | 60 | **83.3%** | **35.0%** | **51.7%** |

### Key Insight
Variant B outperformed Variant A across every engagement metric ($+15\%$ open rate, $+16.7\%$ reply rate, $+20.1\%$ module completion). Student users responded significantly better to peer social proof and relatable time commitments than to abstract gamified point systems. This finding directly shaped the macro library in [Proof 1](../01-support-technical-ops/queue/).

---

## 7. What I Learned & Operational Reflection

Customer Success in early-stage products is not cheerleading; it is **friction diagnosis and closed-loop accountability**. When a customer stops using a product, they rarely tell you why—they just drift away. By creating explicit health check triggers, separating users by cohort progression, diagnosing auxiliary funnel bottlenecks under real network conditions, and executing transparent reconciliation campaigns, we proved that churn can be intercepted before it becomes permanent.

## Public / Private Status
Public — aggregated percentages, anonymized student cohort cohorts, and sanitized operational playbooks; individual student identifiers and internal database credentials excluded.
