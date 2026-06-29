# Template 10: Agent Workflow Canvas

Avoid creating open-ended, infinite agent loops. Use this Canvas to design, orchestrate, and bound your agentic workflows. Define the triggers, state tracking, execution patterns, routing logic, stop conditions, and human gates.

---

## 🏷️ Workflow Profile
* **Workflow Name:** 
* **Business Target:** 
* **Primary Agent Role:** 

---

## 🔄 1. Trigger & Initial State
* **Workflow Trigger:** *What event kicks off the workflow? (e.g., Slack mention, API Webhook, new document in folder).*
* **Initial State Variables:** *What values are stored in the session state at start?*
  ```json
  {
    "session_id": "String",
    "raw_input": "String",
    "user_details": "Object",
    "current_step": "String",
    "retry_count": "Integer"
  }
  ```

---

## 🎨 2. Orchestration Design

Select your primary system design pattern:

* `[ ] Sequential (Chain)`: Step A -> Step B -> Step C. No complex branching.
* `[ ] Router Pattern`: Central classifier directs input to specialized agents.
* `[ ] Planner-Executor`: Agent creates a plan of action, then executes step-by-step.
* `[ ] Critic / Reviewer`: Agent A generates draft; Agent B evaluates draft against rubrics. Loops until approved.

Describe the routing logic and step flow:
* **Step 1 (Input Triage):** 
* **Step 2 (Core Logic / AI Task):** 
* **Step 3 (Quality Gate / Review):** 
* **Step 4 (Final Execution):** 

---

## 🛑 3. Stop Conditions & Safety Boundaries

An agent must have strict rules for when to *stop* execution and return or escalate.

* **Success Stop Condition:** *What criteria mean the workflow is complete? (e.g., Output matches json schema, human signs off).*
* **Maximum Iteration Limit (Loop Protection):** (e.g., Max 5 LLM calls per execution context).
* **Failure Escapes (When to exit immediately):**
  * *Condition 1 (Refusal)*: 
  * *Condition 2 (Consecutive Tool Errors)*: e.g., if any tool fails 3 times in a row, stop and escalate.
  * *Condition 3 (High Risk classification)*: e.g., if content score falls below threshold.

---

## 🤝 4. Handoff & Human Checkpoints

Define how the agent communicates with users for help or approvals.

* **User Escalation Trigger:** *When does the agent stop to ask a human for input? (e.g., low confidence score, or write permission requested).*
* **User Input Schema:** *What does the human need to submit to resume the workflow?*
  ```json
  {
    "approved": "Boolean",
    "corrections": "String"
  }
  ```
* **Resumption Trigger:** How does the system restart? (e.g., Slack action payload, Webhook post).

---

## 📊 5. Audit & Tracing Map
* **Trace Logs Collected:** `[ ] Input variables` `[ ] Raw prompt payload` `[ ] Raw LLM completion` `[ ] Tool arguments & output` `[ ] Latency per step` `[ ] Token count & cost`
* **Workflow Audit Dashboard Location:** 
