# Empirical Market Analysis & Skill Requirement Matrix

> **Dataset Size:** 1,192 Remote Job Opportunities  
> **Source Database:** `workos.db` (`opportunities` table)  
> **Coverage Window:** Active listings ingested via Greenhouse, Jobicy, WeWorkRemotely, Himalayas & Direct Boards  
> **Analysis Scope:** Top Demanded Proofs, Platforms, Core Competencies, and Door-by-Door Profiles  

---

## 1. Executive Summary & Dataset Distribution

An exhaustive empirical analysis of all **1,192 active remote listings** in the WorkOS database was conducted across the 4 primary operational employment doors. Boilerplate company descriptions (e.g. standard investor/founder bios) were programmatically isolated from actual job requirements, daily responsibilities, and qualification sections.

```
DATASET COMPOSITION (N = 1,192)
┌──────────────────────────────────────────────┬───────────┬────────────┐
│ Employment Door                              │ Listings  │ Percentage │
├──────────────────────────────────────────────┼───────────┼────────────┤
│ Door 2: Customer Success & Operations        │    485    │   40.7%    │
│ Door 1: Support & Technical Operations       │    361    │   30.3%    │
│ Door 3: Web & Technical Documentation Ops    │    252    │   21.1%    │
│ Door 4: AI Operations & Output QA            │     94    │    7.9%    │
└──────────────────────────────────────────────┴───────────┴────────────┘
```

### Strategic Hiring Insight
Over **71%** of remote opportunities sit squarely at the intersection of **Customer Success, Support, and Technical Operations**. Across all doors, employers are moving aggressively away from generic "ticket responders" toward **technical operators** who can diagnose root causes in databases and APIs, author living internal runbooks, and bridge the communication gap with software engineering teams.

---

## 2. Top Demanded Proofs & Tangible Artifacts

Modern remote hiring teams evaluate candidates on **tangible, verifiable work products** rather than abstract resume bullet points. The analysis extracted 8 primary proof artifacts explicitly demanded across job specifications:

| Rank | Demanded Proof / Artifact | Total Frequency | Target Doors | Key Employer Expectation | Portfolio Proof Mapping |
| :---: | :--- | :---: | :---: | :--- | :---: |
| **1** | **Cohort Onboarding Playbooks & TTFV Frameworks** | **110 listings (9.2%)** | CS & Ops, AI Ops | Structured 7–14 day milestone roadmaps that accelerate Time-to-First-Value (TTFV) and eliminate initial drop-off. | [Proof 4 (Beta CS Program)](../workos-proof/02-customer-success/README.md) |
| **2** | **SOPs, Living Runbooks & Internal Wiki Systems** | **77 listings (6.5%)** | Support, CS, Docs | Written standard operating procedures and searchable runbooks that prevent tribal knowledge silos in remote teams. | [Proof 6 (Mindframe Runbook)](../workos-proof/03-documentation-knowledge-ops/mindframe-docs/README.md) |
| **3** | **Developer-Ready Bug Handoffs & cURL Repro Scripts** | **42 listings (3.5%)** | Support, Docs, CS | Isolating cross-service root causes, capturing logs/HAR traces, and crafting reproducible cURL scripts for engineers. | [Proof 3 (Broken Integration)](../workos-proof/01-support-technical-ops/incident-investigation/README.md) |
| **4** | **Customer Troubleshooting KBs & Deflection Guides** | **22 listings (1.8%)** | Docs, Support | Layered self-service guides and FAQs that deflect 25%–40% of inbound tickets before human intervention. | [Proof 5 (Customize Store KB)](../workos-proof/03-documentation-knowledge-ops/customize-store-kb/README.md) |
| **5** | **QBR Health Check Scorecards & Retention Audits** | **16 listings (1.3%)** | Customer Success | Proactive customer telemetry, health scoring matrices (green/yellow/red), and data-driven quarterly business reviews. | [Proof 4 (QBR Health Check)](../workos-proof/02-customer-success/README.md) |
| **6** | **AI Output Evaluation Rubrics & Quality Gates** | **10 listings (0.8%)** | AI Ops, CS | Mathematical scoring criteria (grounding, hallucination detection, format compliance) and automated pass/fail quality gates. | [Proof 7 (Quality-Gate Rubric)](../workos-proof/04-ai-ops-qa/eval-framework/README.md) |
| **7** | **At-Risk Customer Escalation & Churn Rescue SOPs** | **9 listings (0.8%)** | Customer Success | Structured intervention workflows triggered when customer engagement drops below threshold milestones. | [Proof 4 (At-Risk Escalation)](../workos-proof/02-customer-success/README.md) |
| **8** | **Canned Macro Libraries & SLA Triage Rules** | **6 listings (0.5%)** | Support & Ops | High-empathy canned response libraries, intent categorization tags, and automated queue routing rules. | [Proof 1 (Support Queue & Macros)](../workos-proof/01-support-technical-ops/queue/README.md) |

---

## 3. Top Demanded Platforms & Ecosystems

Platforms were extracted strictly from active job qualifications and technical requirements:

```
TIER 1: CORE INFRASTRUCTURE & APIS (UNIVERSAL FOUNDATION)
├── REST APIs & HTTP Endpoints:        173 listings (14.5%)
├── Git / GitHub / GitLab:             153 listings (12.8%)
├── Salesforce / Service Cloud:        139 listings (11.7%)
├── Linux CLI, Bash & Shell:           130 listings (10.9%)
└── SQL (PostgreSQL, MySQL, SQLite):   116 listings (9.7%)

TIER 2: PROGRAMMING & SCRIPTING (TECHNICAL OPERATOR EDGE)
├── Python:                            191 listings (16.0%)
├── JavaScript / Node.js:              131 listings (11.0%)
└── TypeScript:                         57 listings (4.8%)

TIER 3: AI ORCHESTRATION & FRONTIER MODELS
├── LangChain / RAG / Orchestration:    80 listings (6.7%)
├── OpenAI (GPT-4 / ChatGPT API):       48 listings (4.0%)
├── Anthropic (Claude 3.5 Sonnet):      17 listings (1.4%)
└── Google Gemini:                       5 listings (0.4%)

TIER 4: SERVICE DESKS, CS & KNOWLEDGE PLATFORMS
├── Webflow / Headless CMS:             44 listings (3.7%)
├── Webhooks & Event Streaming:         43 listings (3.6%)
├── Datadog / Sentry / Log Analytics:   42 listings (3.5%)
├── HubSpot (CRM & Service Hub):        23 listings (1.9%)
├── Jira / Atlassian Service Desk:      18 listings (1.5%)
├── Gainsight (Customer Success):       14 listings (1.2%)
├── Zendesk (Support & Guide):          14 listings (1.2%)
└── Zapier / Make / n8n:                10 listings (0.8%)
```

---

## 4. Core Competencies in Demand

### 1. Cross-Functional Engineering & Product Bridge (33.1% — 394 listings)
* **Employer Expectation:** *"Acts as the primary technical bridge between executive customer stakeholders and core software engineering teams."*
* **What it means in practice:** Not writing core production features, but translating customer failure symptoms into actionable engineering tickets, reading stack traces, and understanding system boundaries.
* **Proof Validation:** [Proof 3 (Broken Integration Investigation)](../workos-proof/01-support-technical-ops/incident-investigation/README.md).

### 2. Quantitative Data Literacy & SQL Querying (27.6% — 329 listings)
* **Employer Expectation:** *"Comfortable running database queries, analyzing customer usage telemetry, and reporting retention metrics."*
* **What it means in practice:** Verifying backend state via SQL rather than asking developers to check records; diagnosing customer issues directly at the data layer.
* **Proof Validation:** [Proof 2 (Pipeline Fix Ledgers)](../workos-proof/01-support-technical-ops/pipeline-diagnosis/README.md) and [Proof 4 (Cohort Metrics)](../workos-proof/02-customer-success/README.md).

### 3. Autonomous & Asynchronous Remote Execution (21.2% — 253 listings)
* **Employer Expectation:** *"Thrives in a high-autonomy, remote-first environment; excels at clear written communication across time zones."*
* **What it means in practice:** Documenting decisions publicly in GitHub/Notion; resolving blockers independently during morning hours in EMEA/WAT timezones without real-time supervision.
* **Proof Validation:** [Proof 1 (Support Queue AP+TR)](../workos-proof/01-support-technical-ops/queue/README.md).

### 4. AI Model Steering, Prompting & Quality Assurance (17.0% — 203 listings)
* **Employer Expectation:** *"Experience evaluating LLM completions, crafting structured system prompts, and designing quality rubrics to eliminate hallucinations."*
* **What it means in practice:** Transitioning from subjective prompt tweaks to deterministic automated test suites, entropy checks, and multi-provider benchmarks.
* **Proof Validation:** [Proof 7 (Stage 7 Quality Gates)](../workos-proof/04-ai-ops-qa/eval-framework/README.md) and [Proof 8 (Multi-Provider Benchmark)](../workos-proof/04-ai-ops-qa/model-benchmark/README.md).

### 5. Root-Cause Technical Diagnosis & Troubleshooting (10.7% — 127 listings)
* **Employer Expectation:** *"Does not stop at surface symptoms; investigates API payloads, network waterfalls, and server logs to isolate root causes."*
* **What it means in practice:** Distinguishing between client cache TTL delays, network timeouts, and distributed backend race conditions.
* **Proof Validation:** [Proof 2 (AcePadi Pipeline Fix)](../workos-proof/01-support-technical-ops/pipeline-diagnosis/README.md) and [Proof 3](../workos-proof/01-support-technical-ops/incident-investigation/README.md).

### 6. High-Empathy Customer De-escalation (10.2% — 121 listings)
* **Employer Expectation:** *"Maintains composure and empathy during high-severity outages; turns at-risk, frustrated clients into brand advocates."*
* **What it means in practice:** De-escalating tense enterprise interactions with transparent root-cause explanations and zero defensive corporate boilerplate.
* **Proof Validation:** [Proof 1 (Macro Library)](../workos-proof/01-support-technical-ops/queue/README.md) and [Proof 4 (At-Risk Escalation SOP)](../workos-proof/02-customer-success/README.md).

---

## 5. Door-by-Door Demand Breakdown

```
DOOR 1: CUSTOMER SUPPORT & TECHNICAL OPERATIONS (361 Listings / 30.3%)
├── Primary Platforms:    SQL (53), Git (52), Linux (51), REST APIs (46), Salesforce (41)
├── Key Deliverables:     cURL Repros & Dev Handoffs (26), Living SOPs (26), Onboarding Guides (22)
└── Core Competencies:    Engineering Bridge (123), SQL Literacy (110), Root-Cause Diagnosis (70)

DOOR 2: CUSTOMER SUCCESS & OPERATIONS (485 Listings / 40.7%)
├── Primary Platforms:    Salesforce (85), REST APIs (70), Git (66), Python (61), Datadog/Logs (36)
├── Key Deliverables:     Cohort Onboarding Playbooks (67), Wiki SOPs (42), QBR Scorecards (8)
└── Core Competencies:    Engineering Bridge (193), SQL Literacy (144), Async Autonomy (92)

DOOR 3: WEB & TECHNICAL DOCUMENTATION OPS (252 Listings / 21.1%)
├── Primary Platforms:    Python (43), REST APIs (39), Linux (29), Webflow/CMS (29), TypeScript (24)
├── Key Deliverables:     Customer Troubleshooting KBs (8), Internal Wiki SOPs (8), Repro Scripts (7)
└── Core Competencies:    Engineering Bridge (61), Technical Writing (17), Systems Thinking (24)

DOOR 4: AI OPERATIONS & OUTPUT QA (94 Listings / 7.9%)
├── Primary Platforms:    Python (46), LangChain/RAG (36), JS/Node (31), OpenAI (14), Claude (10)
├── Key Deliverables:     Quality Gates & Eval Rubrics (7), Onboarding (20), cURL Repro (2)
└── Core Competencies:    AI Model Steering (56), SQL Literacy (29), Async Autonomy (23)
```

---

## 6. Strategic Portfolio Coverage Audit

| Market Requirement | Market Frequency | Portfolio Proof | Verification Standard |
| :--- | :---: | :--- | :---: |
| **Engineering Handoff & Repro** | 33.1% | [Proof 3: Broken Integration Investigation](../workos-proof/01-support-technical-ops/incident-investigation/README.md) | `SIMULATION` (cURL + Race Condition) |
| **SQL & State Verification** | 27.6% | [Proof 2: Pipeline Root-Cause Fix](../workos-proof/01-support-technical-ops/pipeline-diagnosis/README.md) | `REAL EXPERIENCE` (Concept & Block Ledgers) |
| **Cohort Onboarding & Retention** | 40.7% (CS Door) | [Proof 4: Beta Customer Success Program](../workos-proof/02-customer-success/README.md) | `REAL EXPERIENCE` (Playbook, QBR, A/B Test) |
| **Customer Self-Serve KB** | 21.1% (Docs Door) | [Proof 5: Customize Store Knowledge Base](../workos-proof/03-documentation-knowledge-ops/customize-store-kb/README.md) | `SELF-DIRECTED` (5-Layer Troubleshooting) |
| **Technical Runbooks & Specs** | 6.5% | [Proof 6: Mindframe Technical Architecture](../workos-proof/03-documentation-knowledge-ops/mindframe-docs/README.md) | `REAL EXPERIENCE` (9-Stage DAG + Test Suite) |
| **AI Evaluation & Quality Gates** | 17.0% | [Proof 7: Stage 7 Quality-Gate Framework](../workos-proof/04-ai-ops-qa/eval-framework/README.md) | `REAL EXPERIENCE` (Shannon Entropy + Rubric) |
| **Multi-Provider AI Benchmarking** | 6.7% | [Proof 8: Mindframe Multi-Provider Benchmark](../workos-proof/04-ai-ops-qa/model-benchmark/README.md) | `REAL EXPERIENCE` (Gemini vs. DeepSeek Routing) |
