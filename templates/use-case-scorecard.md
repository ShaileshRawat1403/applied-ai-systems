# Template 04: Use Case Scorecard

Use this scorecard to systematically evaluate proposed AI use cases. Rate each dimension from **1 (Poor/Risky)** to **5 (Excellent/Safe)**. Use the scoring logic at the bottom to determine your execution pathway: **Build immediately (Pilot)**, **Defer (Optimize context first)**, or **Reject (High Risk / Low Value)**.

---

## 🏷️ Use Case Identification
* **Proposed Use Case Name:** 
* **Submitted By:** 
* **Target Department:** 

---

## ✏️ Scoring Rubrics

### 1. Business Value Dimension (Weight: 35%)
* **V1: Time/Cost Savings (1-5):** *How many hours per week does this save the team? (1 = <1 hour, 5 = >10 hours).*
* **V2: Error Rate/Quality Impact (1-5):** *Does the current manual process suffer from human errors that the AI can catch or standardize?*
* **V3: Cycle Time Reduction (1-5):** *Does it unblock downstream teams or customers? (1 = no change, 5 = substantial SLA improvement).*
* **Value Score (Sum of V1-V3):** **/15**

### 2. Feasibility & Technical Fit Dimension (Weight: 35%)
* **F1: Data Availability (1-5):** *Do we have clear, clean, structured input data and style templates? (1 = no docs/messy logs, 5 = clean PDFs/databases).*
* **F2: Capability Match (1-5):** *Is the task well suited for LLM reasoning capabilities (classification, extraction, drafting) rather than complex math or database lookups?*
* **F3: Integration Complexity (1-5):** *Can this run in a simple playground, API script, or standard workflow platform? (1 = legacy mainframe integrations, 5 = standalone UI or simple API call).*
* **Feasibility Score (Sum of F1-F3):** **/15**

### 3. Risk & Control Dimension (Weight: 30%)
* **R1: Tolerance for Errors (1-5):** *What happens if the model hallucinates? (1 = critical health/financial loss, 5 = minor text correction by review user).*
* **R2: Security & Privacy (1-5):** *Does it handle sensitive credentials or PII? (1 = heavy PII/secret keys, 5 = public/non-confidential documents).*
* **R3: Human Review Ease (1-5):** *Can a human easily verify the model's output in under 30 seconds? (1 = requires complex domain expert cross-reference, 5 = trivial spelling/formatting skim).*
* **Risk/Control Score (Sum of R1-R3):** **/15**

---

## 📊 Score Summary

| Evaluation Dimension | Subtotal | Weight | Weighted Score |
| :--- | :---: | :---: | :---: |
| **Business Value** | `/15` | 35% | |
| **Feasibility & Fit** | `/15` | 35% | |
| **Risk & Control** | `/15` | 30% | |
| **Final Score** | `/15` | **100%** | **`/15.0`** |

*Weighted Score Calculation: `(Subtotal / 15) * 15 * Weight`*

---

## 🚦 Decision Matrix

| Score Range | Recommendation | Action Plan |
| :--- | :--- | :--- |
| **12.0 - 15.0** | 🟢 **Green / Pilot Pack** | **Build immediately.** High value, highly feasible, low risk. Excellent candidate for your capstone project. |
| **8.0 - 11.9** | 🟡 **Yellow / Defer** | **Optimize details first.** Improve your knowledge base layout, refine prompt boundaries, or design a stricter human gate, then re-score. |
| **0.0 - 7.9** | 🔴 **Red / Reject** | **Do not build.** High risk, excessive integration friction, or negligible business value. Keep manual. |

* **Final recommendation for this use case:** 
* **Key mitigation or refinement step needed before building:** 
