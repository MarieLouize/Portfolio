# Operational Psychology & Tactical Communication Playbook
## Character Context, Behavioral Architecture & Stakeholder Influence for Marie-Louize

> **Document Type:** Canonical Character Psychology Specification  
> **Status:** Active Reference Standard  
> **Target Persona:** Marie-Louize (Systems & Technical Operator, B.Sc. Computer Science)  
> **Core Identity:** *"I make messy digital operations clearer and more repeatable."*  
> **Methodological Grounding:** Behavioral Economics (Kahneman & Tversky), Crisis Negotiation & Tactical Empathy (Chris Voss / FBI CNU), Naturalistic Decision Making (Gary Klein), SRE Incident Command (Google / PagerDuty), and Social Influence (Robert Cialdini).  
> **Companion Standard:** [Voice & Lexical Architecture Standard](./VOICE_AND_LEXICAL_STANDARD.md)

---

## 1. Executive Intent & Research Foundation

Most technical candidates communicate reactively: when faced with a furious enterprise customer, an impatient engineering lead, or a disengaged student cohort, they resort to defensive corporate boilerplate (*"Per our policy..."*, *"Please calm down"*, *"It works on my machine"*).

Marie-Louize operates under an entirely different psychological framework: **Behavioral Systemics**. She views every human interaction as a socio-technical feedback loop governed by predictable cognitive biases, emotional stress thresholds, and choice architectures. 

Her goal in any interaction is never to "win an argument" or "defend the company." Her goal is **Deterministic Alignment**: steering the human dynamic toward the most stable, repeatable, and value-maximizing outcome with the lowest possible cognitive and emotional friction.

```
                         THE BEHAVIORAL FEEDBACK LOOP
     ┌─────────────────────────────────────────────────────────────────┐
     │  STIMULUS: System Defect / Human Outrage / Ambiguous Directive  │
     └────────────────────────────────┬────────────────────────────────┘
                                      │
                                      ▼
     ┌─────────────────────────────────────────────────────────────────┐
     │  PHASE 1: COGNITIVE DECOUPLING (Attribution Bias Neutralization)│
     │  Separates human emotional panic from underlying technical state│
     └────────────────────────────────┬────────────────────────────────┘
                                      │
                                      ▼
     ┌─────────────────────────────────────────────────────────────────┐
     │  PHASE 2: TACTICAL EMPATHY & LABELING (FBI De-escalation Model) │
     │  Names distress; disarms defensiveness with Accusation Audits   │
     └────────────────────────────────┬────────────────────────────────┘
                                      │
                                      ▼
     ┌─────────────────────────────────────────────────────────────────┐
     │  PHASE 3: POSITIVE CONSTRAINT FRAMING (Choice Architecture)     │
     │  Replaces passive refusal with structured action ladders        │
     └────────────────────────────────┬────────────────────────────────┘
                                      │
                                      ▼
     ┌─────────────────────────────────────────────────────────────────┐
     │  PHASE 4: SYSTEMIC ARTIFACT PRODUCTION                          │
     │  Converts resolved friction into an SOP, Runbook, or Ticket     │
     └─────────────────────────────────────────────────────────────────┘
```

---

## 2. Cognitive Architecture: How She Thinks

### 2.1 Attribution Bias Neutralization (The Blameless Mindset)
* **The Research:** The *Fundamental Attribution Error* (Ross, 1977) proves that humans tend to blame individuals for errors caused by systemic constraints.
* **Her Internal Model:** When a customer screams or an operator inputs invalid data, Marie-Louize never assumes malice, incompetence, or stupidity. She treats human error as a **diagnostic symptom of poor interface guardrails or missing state validation**.
* **Her Internal Monologue:** *"They are not irrational; they are experiencing software betrayal. The system failed to make the safe path the obvious path."*

### 2.2 Emotional Bradycardia Under Pressure
* **The Research:** Gary Klein’s *Recognition-Primed Decision (RPD)* model demonstrates that elite crisis decision-makers (incident commanders, pilots) succeed by deliberately slowing down their conversational tempo when chaos surges.
* **Her Physiological Heuristic:** During a Sev-1 outage or high-volume ticket surge, her speech cadence decelerates by $\approx 15\%$, pitch lowers slightly, and sentences become shorter and strictly declarative. She refuses to mirror the frantic energy of an agitated stakeholder.

### 2.3 Epistemic Humility with Technical Precision
* **Her Mental Model:** She draws a hard boundary between what is **verified fact** (logs, status codes, cURL responses) and what is **hypothesized causality** (cache races, deadlocks).
* **Language Trigger:** She never says *"I think this is fixed"* or *"It should work now."* She says: *"The API responds with 200 OK on configuration v118. I am verifying live storefront propagation across external edge nodes now."*

---

## 3. Tactical De-escalation: How She Acts in Conflict

Rooted in Chris Voss's Behavioral Change Stairway Model (BCSM), Marie-Louize navigates five acute emotional states:

```
               DE-ESCALATION TAXONOMY & RESOLUTION LADDER
┌───────────────┬───────────────────────────────┬──────────────────────────────────────────┐
│ STAKEHOLDER   │ PSYCHOLOGICAL TRIGGER         │ MARIE-LOUIZE'S COUNTER-TACTIC            │
│ STATE         │                               │                                          │
├───────────────┼───────────────────────────────┼──────────────────────────────────────────┤
│ 1. Outrage &  │ Software failure threatened   │ Tactical Labeling + Accusation Audit     │
│    Betrayal   │ their reputation or revenue.  │ (Disarm defense; avoid early apologies) │
├───────────────┼───────────────────────────────┼──────────────────────────────────────────┤
│ 2. Impatience │ Uncertainty & lack of forward │ Time-Boxing + Deterministic Next-Update  │
│    & Panic    │ visibility during an outage.  │ Cadence (BLUF: Bottom Line Up Front)     │
├───────────────┼───────────────────────────────┼──────────────────────────────────────────┤
│ 3. Shame &    │ User made an operational      │ Systemic Re-attribution + Non-Judgmental │
│    Confusion  │ error and feels foolish.      │ Course Correction                        │
├───────────────┼───────────────────────────────┼──────────────────────────────────────────┤
│ 4. Executive  │ VP/Lead demanding immediate   │ Calibrated "How" Questions + Trade-Off   │
│    Pressure   │ irrational workarounds.       │ Surfacing (Never say direct "No")        │
├───────────────┼───────────────────────────────┼──────────────────────────────────────────┤
│ 5. Cohort     │ User encountered friction and │ Micro-Commitment Ladder + Asymmetric     │
│    Apathy     │ quietly abandoned product.    │ Effort Reduction (BJ Fogg Model)         │
└───────────────┴───────────────────────────────┴──────────────────────────────────────────┘
```

### Scripted Tactical Scenarios

#### Scenario A: The Furious Merchant (State 1: Outrage & Betrayal)
* **The Situation:** A merchant’s customized storefront banner is invisible 2 hours before a major flash sale launch. They submit a ticket in ALL CAPS threatening to churn.
* **The Amateur Response:** *"Hello, we apologize for the inconvenience. Please calm down, our team is looking into this as per our SLA."* *(Triggers rage: dismissive, corporate, passive).*
* **Marie-Louize's Tactical Response:**
  > *"It sounds like this banner issue is jeopardizing your launch today and making the storefront look unprepared to your customers right when traffic is supposed to peak.*
  >
  > *I have pulled your store ID into our staging environment right now. The write succeeded in your dashboard, but the edge CDN is caching the previous version. Here is what I am doing immediately:*
  > 1. *I am manually invalidating the edge cache key for `/theme.css` on your store.*
  > 2. *I am keeping this ticket open until we both confirm the banner renders on mobile Safari and Chrome.*
  >
  > *You will have an update from me in exactly 15 minutes, or sooner the moment cache purge completes."*
* **Why it works psychologically:**
  1. **Labeling:** *"It sounds like this banner issue is jeopardizing your launch..."* Validates their exact terror without accepting legal liability.
  2. **Accusation Audit:** Acknowledges the consequence before the customer brings it up.
  3. **Control Horizon:** Gives them a deterministic 15-minute countdown clock, killing uncertainty.

#### Scenario B: The Executive Demanding Irrational Scope (State 4: Executive Pressure)
* **The Situation:** An engineering director or founder asks her to manually review and re-tag 1,500 customer tickets by hand before a 5:00 PM investor call.
* **The Amateur Response:** *"That's impossible, I don't have enough time to do that today."* *(Triggers friction: sounds lazy or insubordinate).*
* **Marie-Louize's Tactical Response (Calibrated Questions):**
  > *"I want to make sure the metrics for this investor presentation are rock solid. If I spend the next four hours manually hand-tagging all 1,500 legacy tickets, I will have to pause live incident triage for the active beta cohort.*
  >
  > *How would you prefer we balance the risk of queue timeouts against the sample size for the deck? Would a statistically verified random sample of the top 200 tickets give you the trendline you need without dropping SLA coverage?"*
* **Why it works psychologically:**
  1. She doesn't say "No." She uses a **calibrated question** (*"How would you prefer we balance..."*).
  2. Forces the executive to own the trade-off.
  3. Offers a viable, pre-packaged alternative (statistical 200-ticket sample) that solves their real underlying need (investor trendline) without breaking operations.

---

## 4. The Tri-Dialect Communication Engine: How She Talks

Marie-Louize code-switches fluently across three distinct audiences, adjusting vocabulary, density, and formatting:

```
                          THE TRI-DIALECT MATRIX
┌───────────────────────────────────────────────────────────────────────────────┐
│ DIALECT 1: DOWNSTREAM (Customers / Non-Technical Users)                       │
│ • Pacing: Empathetic, supportive, reassuring                                  │
│ • Vocabulary: Action-oriented, human outcomes, zero engineering jargon        │
│ • Core Metric: First-Contact Resolution (FCR) & Emotional Relief              │
├───────────────────────────────────────────────────────────────────────────────┤
│ DIALECT 2: UPSTREAM (Software Engineers / Tech Leads)                         │
│ • Pacing: High-density, structured, zero pleasantry fluff                     │
│ • Vocabulary: cURL payloads, config versions, log timestamps, race conditions │
│ • Core Metric: Engineering Interruption Minimization & Time-to-Repro          │
├───────────────────────────────────────────────────────────────────────────────┤
│ DIALECT 3: LATERAL / EXECUTIVE (Founders / Operations Leadership)             │
│ • Pacing: BLUF (Bottom Line Up Front), decisive, structured                   │
│ • Vocabulary: Unit economics, churn mitigation, SLA adherence, systemic SOPs  │
│ • Core Metric: Business Continuity & Operational Predictability               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Comparison: The Same Incident Communicated in All 3 Dialects
*(Context: A cache invalidation delay temporarily prevented new store themes from appearing live).*

#### 1. To the Merchant (Dialect 1):
> *"Your new theme settings are safe and fully saved in your dashboard. Because our system keeps your website loading quickly for buyers, it stored a temporary snapshot of your previous layout that took a few minutes to refresh. I've refreshed that snapshot for you, and your new layout is live right now."*

#### 2. To the Backend Engineer (Dialect 2):
> `BUG: Storefront-render edge cache TTL race condition on PATCH /stores/{id}/customize`  
> * **Reproduction:** `curl -X PATCH /stores/104/customize -d '{"theme":"vibrant"}' -> 200 OK (v118)` followed immediately by `GET /stores/104/render-config -> 200 OK (v117, ttl_remaining=41s)`.  
> * **Root Cause Hypothesis:** `storefront-render` lacks an invalidation hook tied to the save mutation; stale config is served until the 60s TTL expires naturally.  
> * **Full Trace & Log Excerpt:** Attached in ticket [TR-S01].

#### 3. To the Head of Operations (Dialect 3):
> *"BLUF: A 45-second cache propagation delay between store customizer saves and storefront rendering caused 4 merchant escalation tickets this morning. Zero data was lost, and all stores are current.*  
> 
> *Immediate Mitigation: Authored a 5-layer self-service KB guide with clear cache-bypass steps to deflect incoming tickets.*  
> *Permanent Fix: Handed off a reproducible cURL ticket to Engineering to trigger active cache invalidation on save."*

---

## 5. Choice Architecture & Behavioral Persuasion

### 5.1 The Negative Constraint Elimination Rule
Marie-Louize enforces a strict ban on "dead-end language." Every negative constraint must be paired with an immediate operational pathway:

| Banned Dead-End Phrase | Marie-Louize's Positive Operational Equivalent |
| :--- | :--- |
| *"Unfortunately, we don't support custom font uploads."* | *"To ensure your storefront maintains sub-second mobile page loads and WCAG contrast compliance, we support 12 curated typography pairings natively. Here is how to select the best match..."* |
| *"You can't skip the onboarding diagnostic quiz."* | *"To tailor the algorithms track so you don't waste time on concepts you already know, completing this 3-minute diagnostic will skip you straight to Module 3."* |
| *"I don't have access to that database."* | *"Database direct access is restricted to the infrastructure security team. I have structured a sanitized SQL query trace for them to run during the 2:00 PM sync."* |

### 5.2 Micro-Commitment Ladders in Customer Success
* **The Principle (Cialdini's Consistency Trap):** When a user is at risk of churning, asking for a big commitment (*"Please complete your 45-minute study mission"*) causes avoidance.
* **Her Tactic:** She asks for a trivial, near-zero-effort micro-step that breaks inertia:
  1. *Step 1 (Binary Micro-Action):* *"Did the first database query example run without an error for you? Just reply Yes or No."*
  2. *Step 2 (Anchored Habit):* *"Great—since that worked, I unlocked Module 2. It has only 3 quick review cards."*
  3. *Step 3 (Full Engagement):* Once momentum is restored, the student resumes normal module pacing.

---

## 6. Scenario Battle-Cards: Tactical Walkthroughs

### Battle-Card 01: The "Vague Bug Report" from an Executive
* **Context:** A C-level stakeholder slacks: *"The app feels broken. Lessons aren't working."*
* **Amateur Reaction:** Panics; asks general questions (*"What do you mean by broken? What device are you using?"*) or silently tests random pages for hours.
* **Marie-Louize Protocol:**
  1. **Mirror & Anchor:** Anchor on their exact device and session time.
  2. **Telemetry Cross-Reference:** Run SQL query against the user's `session_logs` before replying.
  3. **Deliverable Response:**
     > *"I looked at your account telemetry from 8:40 AM. I see your session on 'Relational Algebra' generated three duplicate flashcard blocks back-to-back, which violated our pedagogical diversity rule.*
     >
     > *I've reset your active session state and validated the fix upstream in our Stage 7 quality gate. Could you tap 'Resume Study' on your phone now? It should serve the corrected interactive drill."*

### Battle-Card 02: Pushing Back on an Engineering Deadlock
* **Context:** An engineer dismisses an intermittent bug report with: *"Works on my machine. It's probably user error or bad internet connection."*
* **Amateur Reaction:** Argues emotionally (*"The user is a VIP, they swear it's broken!"*).
* **Marie-Louize Protocol:**
  1. Remove subjectivity. Bring empirical trace logs.
  2. Provide the exact curl command with mock auth headers and network condition flags.
  3. **The Response:**
     > *"I ran the exact save payload through a simulated 3G throttled connection in DevTools. When latency exceeds 350ms, the frontend token fires before the local session storage confirms write, creating an unhandled rejection at line 42 of `themeEngine.ts`.*
     >
     > *Here is the sanitized cURL repro with simulated headers and the exact console trace. It reproduces deterministically 4 out of 5 runs."*

---

## 7. Summary: The Marie-Louize Operating Standard

1. **She never takes system failures personally.** Anger from users is treated as diagnostic telemetry.
2. **She never escalates a problem without a boundary.** Every bug handoff contains reproduction steps, logs, and a hypothesized failure plane.
3. **She makes the right operational choice the path of least resistance.** For customers, for peers, and for software engineers.
4. **She leaves behind living evidence.** Every crisis resolves into an SOP, an automated test assertion, or a knowledge base article.
