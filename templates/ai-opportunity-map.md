# Template 02: AI Opportunity Map

Use this template to audit your department or team's workflows. By mapping current friction points and scoring them against suitability and risk, you can identify high-value candidate points for AI system integration.

---

## 🗺️ Workflow Audit & Mapping

List 3 distinct workflows that suffer from operational friction, then dissect where AI might plug in.

### Candidate Workflow 1: [Workflow Name]
* **Brief Description of Current Process:** 
* **Primary Friction Point (Where is it slow/error-prone?):** 
* **Users Involved:** 

### Candidate Workflow 2: [Workflow Name]
* **Brief Description of Current Process:** 
* **Primary Friction Point:** 
* **Users Involved:** 

### Candidate Workflow 3: [Workflow Name]
* **Brief Description of Current Process:** 
* **Primary Friction Point:** 
* **Users Involved:** 

---

## 📊 Opportunity Matrix

Score each candidate workflow from **1 (Low)** to **5 (High)** on the following criteria:
1. **Friction Level**: How painful is the current process?
2. **AI Suitability**: Does it involve language processing, structured extraction, summarization, or reasoning?
3. **Execution Safety**: Is there a low risk of catastrophic failure if the AI outputs are slightly incorrect?
4. **Feasibility**: Do you have access to the inputs/context needed for the AI?
5. **Business Value**: Will automating/improving this save substantial hours, reduce cost, or increase quality?

| Candidate Workflow | Friction (1-5) | Suitability (1-5) | Safety (1-5) | Feasibility (1-5) | Value (1-5) | **Total Score** |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Workflow 1:** | | | | | | **/25** |
| **Workflow 2:** | | | | | | **/25** |
| **Workflow 3:** | | | | | | **/25** |

---

## 🔍 Detail Mapping (Top Ranked Candidate)

Complete this deep dive for your highest-scoring workflow opportunity.

### 1. Business Layer Bounds
* **Goal Output**: What is the final, concrete artifact or decision this workflow produces? (e.g., an approved response email, a structured triage log).
* **Target User**: Who initiates, interacts with, or consumes the results of this workflow?
* **Current Cycle Time**: How long does it take today?

### 2. Intelligence Layer Boundaries
* **Task Classification**: Which intelligence capability is required? (Select all that apply: *Generation, Classification, Extraction, Retrieval, Reason/Logic, Translation*).
* **Context Access**: What document, database, or API context does the model need to perform this task?
* **Standard of Quality**: How would a senior human evaluator describe a "perfect" output?

### 3. Workflow Layer Routing
* **Trigger**: What event initiates this workflow?
* **Human-in-the-Loop Point**: Where must a human review, edit, or approve the AI output before it proceeds?

### 4. Control Layer Guardrails
* **Access Boundary**: What systems or databases must this workflow *never* write to directly?
* **Low-Confidence Action**: What should the system do if it is unsure of the answer? (e.g., refuse, flag for human triage).

### 5. Operations Layer Metrics
* **Unit Cost Goal**: What is the target cost per run? (e.g., less than $0.05).
* **Evaluation Metric**: How will we programmatically or manually check that the output is safe and accurate?
