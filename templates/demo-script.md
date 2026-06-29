# Template 18: Demo Script

A great demo doesn't just show a system working under perfect conditions. It explains the problem, shows the workflow in action, demonstrates how the system handles errors safely, and shows the ultimate business value. Use this script to structure your 5-minute pilot demo for stakeholders.

---

## 🏷️ Demo Details
* **Presenter Name:** 
* **Target Audience:** (e.g., Executive Sponsor, Head of Operations)
* **Demo Duration:** 5 Minutes
* **System Link / Access:** 

---

## ⏱️ Timeline & Section Outlines

### 0:00 - 1:00 | Section 1: The Context & Friction (The "Before")
* **Action:** Show the manual spreadsheet, raw Slack log, or developer ticket list.
* **Talking Points:**
  * *"Every week, our team receives [Number] raw engineering change notices. Today, a specialist has to read these logs, figure out who is impacted, draft an email, and copy-paste it into Confluence."*
  * *"This takes [Time] per message and leads to errors like missing deadlines or confusing details. Here is what a typical messy input look like."*
* **Visual:** Share screen showing a raw, messy developer ticket.

---

### 1:00 - 2:30 | Section 2: The Core Workflow (The "After")
* **Action:** Input the raw change notice into the AI system and trigger the workflow.
* **Talking Points:**
  * *"Let's paste this exact raw ticket into our system. We are not just prompting a model. We have a five-layer system that validates the input, retrieves relevant audience metadata from Confluence, and applies a strict Prompt Specification."*
  * *"Notice how the model outputs a perfectly formatted JSON structure within seconds, detailing the headline, impact summary, and action items."*
* **Visual:** System processing the input and displaying the draft in the reviewer's dashboard interface.

---

### 2:30 - 3:30 | Section 3: The Control Gate (Safety & Human Review)
* **Action:** Edit a minor line in the generated draft and click "Approve". Show the log.
* **Talking Points:**
  * *"Because this is customer-facing, our Control Layer prevents direct publication. The system holds the draft in this Slack channel for review. I can verify it against the retrieved Confluence source in one click, make a minor edit, and click Approve."*
  * *"Every edit I make is logged to our audit database so we can trace changes and improve the model over time."*
* **Visual:** Reviewer interface, Slack message gate, or audit logs.

---

### 3:30 - 4:15 | Section 4: Edge Case Triage (Safety & Refusal)
* **Action:** Paste a blank prompt, a security ticket, or a prompt injection attempt.
* **Talking Points:**
  * *"What happens if we feed the system garbage data or a malicious input? Let's paste this mock attack."*
  * *"Our system refuses to process it, triggers a safety alert in our logs, and refuses to leak our prompt instructions. The control layer stops it instantly."*
* **Visual:** Screen showing the system gracefully displaying a refusal message.

---

### 4:15 - 5:00 | Section 5: The ROI & Wrap Up (The "Value")
* **Action:** Show the ROI dashboard or ROI Snapshot table.
* **Talking Points:**
  * *"During our pilot, we processed [Number] updates. The average draft quality score was 4.6/5. Average time-to-draft dropped from 45 minutes to 30 seconds."*
  * *"This returns [Number] hours back to our communication team monthly, paying back our build cost in just [Number] months. We are ready to launch Phase 1."*
* **Visual:** ROI summary slide or metrics graph.
