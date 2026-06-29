# 1.2 Prompt vs. Workflow vs. System

## Why This Matters
Many builders get stuck in "prompt land." They spend weeks tweaking a single text prompt in a web playground (like ChatGPT or Claude) until it looks perfect. Then, they deploy it and are shocked when users encounter broken formatting, hallucinated links, or security leaks. To build reliable business solutions, you must understand the clear differences between a prompt, a workflow, and a system.

---

## Core Idea

We define the boundaries of AI integration across three tiers of complexity:

```text
[ Prompt ]  --> Single input/output text call. Zero state. Hard to control.
    ↓
[ Workflow ] --> Sequence of steps. Triggers, tools, APIs, routing, and human gates.
    ↓
[ System ]   --> Structured specifications, schemas, automated tests, logs, and security.
```

1. **A Prompt**: A single instruction block passed to a model. It has zero state memory, lacks schema validation, and relies on "vibe checks" for verification.
2. **A Workflow**: A chain of execution steps. It has a start trigger (e.g., a ticket created), runs the prompt, retrieves documents, calls external tools (APIs), routes output based on logic, and halts at human review gates.
3. **A System**: A fully governed engineering deployment. It wraps the workflow in version-controlled schemas, validates inputs/outputs, logs execution traces, implements risk controls (security guardrails), monitors token costs, and runs regression test harnesses.

---

## System View
Moving from prompt to system requires design work across the **Intelligence Layer** (Prompt Specifications, JSON contracts), the **Workflow Layer** (Routing, Tool integration), the **Control Layer** (Permissions, risk mitigations), and the **Operations Layer** (Trace logs, testing).

---

## Example: Code Release Notes
* **The Prompt**: "Read these commits and write release notes." (Model might output a random narrative paragraph, mention internal server names, or crash on empty inputs).
* **The Workflow**:
  1. Trigger: Developer pushes code.
  2. Action: Script fetches commits.
  3. Action: Retrieval database fetches team style guides.
  4. Action: Model generates draft using a strict spec.
  5. Action: Slack webhook posts draft to release manager.
  6. Action: Manager clicks "Approve" -> posted to Confluence.
* **The System**: The workflow + input schema checks (rejecting empty commits) + PII redaction (removing passwords) + output schema validation (must parse to JSON) + trace log storage + a test suite of 20 old commits to verify quality rate weekly.

---

## Practical Walkthrough
To transition an idea from a prompt to a system, use this implementation checklist:
1. **Define the Input Contract**: Create a strict schema (like YAML or JSON) for all variables passed to the prompt.
2. **Implement Structured Output**: Force the model to return JSON structure instead of raw markdown text.
3. **Build the Review Gate**: Design a UI node (like Slack, email, or a web form) where a human editor clicks "Approve" before any system mutations occur.
4. **Log Traces**: Store the prompt token count, latency, API cost, and inputs/outputs in a database.

---

## Common Failure Modes
* **The Playground Mirage**: Assuming that because a prompt worked 3 times in the Claude playground, it is ready to run automatically in production.
* **Excessive Agency**: Giving the model direct write permissions (e.g., emailing customers automatically) without a human review gate.

---

## Lab
Look at your target project candidate. Sketch a diagram showing the trigger, the AI node, the human-in-the-loop gate, and the final action.

---

## Output
This concept anchors the structural design of your **Agent Workflow Canvas** (Template 10).

---

## Review Checklist
* `[ ]` Can you identify where human approval occurs in your target process?
* `[ ]` Did you establish a maximum LLM call limit per execution context to prevent looping run costs?

---

## Reflection
*If your prompt fails in production today, how does your system catch it? Does it crash the user interface, or do you have a fallback policy?*
