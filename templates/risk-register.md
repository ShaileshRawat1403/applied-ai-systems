# Template 14: Risk Register

Every AI system introduces operational, technical, and security risks. Use this Risk Register to map potential failures, score their likelihood and impact, define mitigations, and assign responsible owners.

---

## 🏷️ System Target
* **System Name:** 
* **Target Environment:** 
* **Last Audited Date:** 

---

## 🗃️ Risk Matrix Reference

Combine **Likelihood** (1-5) and **Impact** (1-5) to calculate the **Risk Score** (1-25):
* **1 - 5 (Low)**: Acceptable risk; monitor periodically.
* **6 - 12 (Medium)**: Control implementation required; review before staging.
* **15 - 25 (High)**: Strict gating required; must not deploy to production without approval.

---

## 📋 Risk Entries

Map at least 4 key risks associated with your system's workflow.

### Risk 1: Prompt Injection leading to Unauthorized Data Access
* **Category:** Security / Privacy
* **Scenario:** User inputs a bypass command ("ignore prior instructions") that tricks the model into revealing system prompts or backend data.
* **Likelihood (1-5):** 
* **Impact (1-5):** 
* **Initial Risk Score:** **/25**
* **Mitigation Control:** (e.g., Input validation schema check, system/user message separation, output parsing constraints).
* **Mitigated Likelihood (1-5):** 
* **Mitigated Impact (1-5):** 
* **Residual Risk Score:** **/25**
* **Control Owner:** 

---

### Risk 2: Hallucination of Support Instructions / Wrong URL Citations
* **Category:** Operational / Brand Damage
* **Scenario:** The RAG system retrieves old support documentation, and the model synthesizes a broken URL or non-existent step for a customer.
* **Likelihood (1-5):** 
* **Impact (1-5):** 
* **Initial Risk Score:** **/25**
* **Mitigation Control:** (e.g., Golden question set evals, strict grounding prompts, URL verification check in tool execution layer).
* **Mitigated Likelihood (1-5):** 
* **Mitigated Impact (1-5):** 
* **Residual Risk Score:** **/25**
* **Control Owner:** 

---

### Risk 3: Excessive Tool Agency / Unchecked Write Operations
* **Category:** Technical / Data Integrity
* **Scenario:** Model misinterprets email text and triggers a database mutation tool to overwrite an active record without human approval.
* **Likelihood (1-5):** 
* **Impact (1-5):** 
* **Initial Risk Score:** **/25**
* **Mitigation Control:** (e.g., Read/Write access separation, Slack human-in-the-loop approval confirmation button for any mutation).
* **Mitigated Likelihood (1-5):** 
* **Mitigated Impact (1-5):** 
* **Residual Risk Score:** **/25**
* **Control Owner:** 

---

### Risk 4: API Rate Limiting / Model Outages (SLA Failure)
* **Category:** Availability
* **Scenario:** Upstream LLM provider experiences downtime or API limits are hit, leaving support agents with no draft generation capability.
* **Likelihood (1-5):** 
* **Impact (1-5):** 
* **Initial Risk Score:** **/25**
* **Mitigation Control:** (e.g., Fallback model routing, local retry block, offline graceful degradation message).
* **Mitigated Likelihood (1-5):** 
* **Mitigated Impact (1-5):** 
* **Residual Risk Score:** **/25**
* **Control Owner:** 
