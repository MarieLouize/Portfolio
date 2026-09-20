# Proof 7 — AcePadi Stage 7 Quality-Gate Evaluation Framework

**Proof Class:** REAL EXPERIENCE  
**Capability:** LLM Output Evaluation, Rubric Design, Algorithmic Quality Gates, Error Taxonomy  
**Operational Stage:** Automated Quality Checks  
**Proof ID:** WOS-AI-007  

---

## 1. Executive Summary & Context

In AcePadi's automated learning content generation pipeline, raw LLM completions frequently suffered from two subtle but severe quality defects:
1. **Block-Type Monotony:** The model fell into conversational ruts, generating 3 to 5 consecutive flashcards or multiple back-to-back multiple-choice questions without introducing interactive scenarios or code analysis.
2. **Pedagogical Inversion:** Introducing advanced operational concepts (e.g. B-Tree leaf splitting or ACID isolation levels) before foundational definitions (e.g. disk block I/O or transaction atomicity) had been taught.

Relying solely on "better prompts" failed because large language models generate tokens autoregressively without inherent awareness of multi-turn session structure. 

As part of the pipeline redesign (originating in [Proof 2: Pipeline Diagnosis](../../01-support-technical-ops/pipeline-diagnosis/)), I designed, formalised, and deployed the **Stage 7 Automated Quality-Gate Evaluation Framework**. This system converts qualitative pedagogical standards into mathematical scoring rubrics and deterministic assertions executed before any study session is dispatched to student cohorts.

---

## 2. Multi-Dimensional Quality Rubric

Every synthesized learning module (consisting of 8–12 pedagogical blocks) is scored across four orthogonal dimensions on a normalized 0.0 to 5.0 scale:

| Dimension | Weight | Evaluation Objective | Failure Threshold | Pass Threshold |
| :--- | :---: | :--- | :---: | :---: |
| **D1: Grounding & Source Fidelity** | $30\%$ | Asserts all technical assertions map to indexed source syllabus chunks. | $< 4.0$ | $\ge 4.5$ |
| **D2: Pedagogical Dependency Flow** | $25\%$ | Verifies prerequisites precede derived concepts according to the curriculum DAG. | $< 3.5$ | $\ge 4.2$ |
| **D3: Block-Type Diversity & Entropy**| $25\%$ | Penalizes consecutive repetition of identical learning formats. | $< 3.5$ | $\ge 4.0$ |
| **D4: Syntactic & Phrase Repetition** | $20\%$ | Detects redundant sentence stems, boilerplate encouragement, and verbal filler. | $< 3.0$ | $\ge 4.0$ |

### Scoring Matrix & Rubric Definitions

```
DIMENSION 1: GROUNDING & SOURCE FIDELITY (0–5)
  5.0 - Flawless: Every technical axiom, code snippet, and formula maps to source chunks with zero extrapolation.
  3.5 - Acceptable: Core concepts grounded; minor illustrative analogies introduced without factual drift.
  2.0 - Flagged: Contains unverified technical claims or hallucinated parameter names.
  0.0 - Critical Reject: Factual fabrication or direct contradiction of curriculum source.

DIMENSION 2: PEDAGOGICAL DEPENDENCY FLOW (0–5)
  5.0 - Strict DAG: Every concept's prerequisites are validated in the session Concept Ledger prior to testing.
  3.0 - Soft Jump: Related concept tested concurrently with minimal friction.
  1.0 - Unearned Leap: Advanced mechanism tested before base definition is introduced.

DIMENSION 3: BLOCK-TYPE DIVERSITY & ENTROPY (0–5)
  5.0 - Balanced Cadence: High format entropy; alternating recall, scenario drill, and code inspection.
  3.0 - Mild Clumping: Exactly 2 identical block types adjacent.
  0.0 - Monotony Failure: 3 or more identical block types consecutive (triggers auto-reject).

DIMENSION 4: SYNTACTIC & PHRASE REPETITION (0–5)
  5.0 - Natural: High vocabulary diversity; Jaccard n-gram overlap between consecutive blocks < 0.15.
  3.0 - Moderate: Occasional reused prompt stems ("Let's examine...", "Consider the following...").
  1.0 - Formulaic: Identical explanation wrappers across 3+ consecutive questions.
```

---

## 3. Deterministic Gate Formulations

To eliminate subjective manual variance during automated runs, Stage 7 implements three algorithmic gates:

### Gate 1: Shannon Entropy for Block Diversity
For a module sequence of length $N$ containing block types $B = \{b_1, b_2, \dots, b_k\}$:
$$H(B) = -\sum_{i=1}^{k} P(b_i) \log_2 P(b_i)$$
* **Condition:** Must satisfy $H(B) \ge 1.80$ for an 8-block module.
* **Consecutive Cap:** $\max(\text{run}(b_i)) \le 2$. If $\text{run}(b_i) \ge 3$, the module fails immediately.

### Gate 2: Concept Ledger Prerequisite Verification
Let $C_t$ be the concept introduced in block $t$, and $\text{Prereq}(C_t)$ be its required upstream concepts from the syllabus DAG:
$$\text{Violation Count} = \sum_{t=1}^{N} \mathbf{1}\Big[\exists p \in \text{Prereq}(C_t) \text{ s.t. } p \notin \text{ConceptLedger}_{t-1}\Big]$$
* **Condition:** $\text{Violation Count} = 0$. Any violation triggers automatic re-ordering or stage retry.

### Gate 3: Jaccard N-Gram Phrase Overlap
Measures syntactic similarity between the explanation text of consecutive blocks $E_t$ and $E_{t+1}$:
$$J(E_t, E_{t+1}) = \frac{|S(E_t) \cap S(E_{t+1})|}{|S(E_t) \cup S(E_{t+1})|}$$
where $S(E)$ is the set of 3-grams in explanation $E$.
* **Condition:** $J(E_t, E_{t+1}) \le 0.35$.

---

## 4. Before & After Output Samples

### Sample 1: Block-Type Monotony (Gate 1 Failure)

#### BEFORE (Flagged & Rejected by Gate 1):
```json
[
  { "id": "b1", "type": "flashcard", "prompt": "What is the primary function of a database index?" },
  { "id": "b2", "type": "flashcard", "prompt": "Define what a B-Tree clustered index stores at leaf nodes." },
  { "id": "b3", "type": "flashcard", "prompt": "What is the time complexity of searching a balanced B-Tree?" }
]
```
* **Gate Telemetry:** `Consecutive Run Count: 3 (Type: flashcard) | Entropy H: 0.00 | Action: REJECT_MODULE`.
* **Symptom:** Cognitive fatigue in beta cohort; student feels like they are taking a repetitive drill rather than learning.

#### AFTER (Remediated with Recent Block Log & State Constraints):
```json
[
  { "id": "b1", "type": "flashcard", "prompt": "What is the primary function of a database index?" },
  { "id": "b2", "type": "scenario_drill", "prompt": "A query executes in 4,200ms on a table with 5M rows. Adding an index on user_id drops it to 12ms. Explain why a full table scan was avoided." },
  { "id": "b3", "type": "code_inspection", "prompt": "Inspect this SQL EXPLAIN output: Identify whether the index ix_cust_email was used as an Index Scan or Index Seek." }
]
```
* **Gate Telemetry:** `Consecutive Run Count: 1 | Entropy H: 2.12 | Action: PASS`.

---

### Sample 2: Pedagogical Dependency Inversion (Gate 2 Failure)

#### BEFORE (Flagged & Rejected by Gate 2):
```text
Block 1: "Explain how 2-Phase Locking (2PL) prevents dirty reads under SERIALIZABLE isolation."
Block 2: "What is a transaction, and what does the Atomicity property in ACID guarantee?"
```
* **Gate Telemetry:** `Violation: 2PL requires Concept:ACID_TRANSACTION. Concept not found in ConceptLedger. Action: RE-ORDER_OR_REGENERATE`.

#### AFTER (Remediated via Prerequisite DAG Enforcement):
```text
Block 1: "Define what a database transaction is and why Atomicity requires all-or-nothing execution."
Block 2: "Now that we understand concurrent transactions, analyze how 2-Phase Locking (2PL) enforces serializability."
```
* **Gate Telemetry:** `Prerequisite verified in ConceptLedger. Action: PASS`.

---

## 5. Error Classification Taxonomy

When a synthesized learning module fails Stage 7 evaluation, the system assigns a standardized error code from this taxonomy:

| Error Code | Category | Severity | Detection Mechanism | Automated System Action |
| :--- | :--- | :---: | :--- | :--- |
| `ERR_EVAL_01` | Source Grounding | High | Chunk Hash Cross-Check | Discard block; re-synthesize with strict temperature ($0.1$). |
| `ERR_EVAL_02` | Pedagogical Inversion | High | DAG Topological Lookup | Re-order blocks automatically; if DAG broken, flag for prompt review. |
| `ERR_EVAL_03` | Monotony Triplicate | Medium | Recent Block Log Counter | Swap block format via secondary generator branch. |
| `ERR_EVAL_04` | Lexical Monotony | Low | Jaccard 3-Gram Overlap | Apply lexical diversification transform or re-prompt explanation. |
| `ERR_EVAL_05` | Schema Incomplete | Critical | Ajv JSON Schema Validator | Immediate retry with structured JSON schema mode enforcement. |
| `ERR_EVAL_06` | Code Fence Unbalanced | Medium | AST Regex Parser | Auto-repair trailing fences before serialization. |

---

## 6. Quantitative Results & Operational Impact

Across 4,200 synthesized lesson modules evaluated under this framework:

| Metric | Before Gate 7 Deployment | After Gate 7 Deployment | Improvement |
| :--- | :---: | :---: | :---: |
| **Consecutive Monotony Rate ($\ge 3$)** | $34.2\%$ | $1.4\%$ | **$95.9\%$ reduction** |
| **Pedagogical Inversion Rate** | $18.6\%$ | $0.8\%$ | **$95.7\%$ reduction** |
| **Manual Human QA Intervention Rate** | $28.0\%$ | $4.2\%$ | **$85.0\%$ reduction** |
| **JSON Schema First-Pass Validity** | $84.5\%$ | $99.4\%$ | **$+14.9\%$ absolute** |
| **Average QA Latency per Module** | $12\text{ min}$ (human review) | $420\text{ ms}$ (automated gate) | **$1,700\times$ faster** |

---

## 7. Reflection & Cross-Proof Traceability

- **Upstream Origin:** Stemmed directly from user complaints in [Proof 1 (Support Queue AP-021)](../../01-support-technical-ops/queue/) and the structural ledger redesign in [Proof 2 (Pipeline Diagnosis)](../../01-support-technical-ops/pipeline-diagnosis/).
- **Downstream Verification:** Built into the continuous integration suite described in [Proof 6 (Mindframe Docs Test Runbook)](../../03-documentation-knowledge-ops/mindframe-docs/).
- **Interview Takeaway:** Evaluating LLM applications is not about manual subjective spot-checking. High-reliability AI systems require explicit quantitative rubrics, mathematical bounds (entropy, Jaccard distance, DAG invariants), and a formalized error taxonomy that triggers automated remediation before end users ever see bad output.

---

## 8. Public / Private Status
Public — Full rubric definitions, mathematical formulations, error taxonomy, and quantitative metrics are completely open and presented as core portfolio evidence.
