# Template 15: Human Review Checklist

Human review is a critical design requirement for high-risk or customer-facing AI systems. Use this checklist to define the exact steps, verification checks, and escalation paths that human operators must follow when reviewing model drafts.

---

## 📸 Reference Review Interface

Below is an example of the Slack human-in-the-loop review interface:

![Slack Human-in-the-Loop Approval UI](../assets/diagrams/slack_approval_gate_mockup.png)

---

## 🏷️ System Target
* **Workflow / System:** 
* **Target Auditor Role:** (e.g., Customer Support Supervisor, Team Lead)
* **Average Time Budget per Review:** (e.g., 30 seconds)

---

## 📋 1. Core Verification Steps

Operators must verify the following checkpoints before approving the draft. Mark each check as completed:

### Step 1: Fact Grounding
* `[ ]` **Grounding Verification**: Compare the generated text with the retrieved system data. Does it contain any numbers, dates, urls, or instructions not explicitly supported by source documents?
* `[ ]` **No Assumptions**: Did the model make assumptions about policies (e.g., promising a refund that is not authorized in ticket history)?

### Step 2: Tone and Professionalism
* `[ ]` **Tone Check**: Is the output professional, polite, and free of conversational AI filler (e.g., "Certainly! I'd be happy to help with that...")?
* `[ ]` **Jargon Elimination**: If customer-facing, are internal system database codes (e.g., `ERROR_DB_104_RESET`) translated into clean language?

### Step 3: Call-to-Action Validation
* `[ ]` **Action Check**: Are the next steps for the user or downstream team clearly formatted as bullet points?
* `[ ]` **Deadline Check**: If a deadline is mentioned, does it match the effective dates in the ticket?

---

## 🚨 2. Escalation & Rejection Matrix

If the draft fails any of the verification steps above, choose the appropriate action below:

* **Action A: Minor Edits (Direct Correction)**
  * *Condition:* Minor spelling error, formatting preference, or simple word swap.
  * *Procedure:* Correct directly in the editor and click "Approve & Send". Do not regenerate.
* **Action B: Regenerate with System Feedback**
  * *Condition:* Structured schema errors, missing paragraphs, or tone is completely wrong.
  * *Procedure:* Click "Reject", write a 1-sentence prompt update (e.g., "make tone more formal"), and regenerate.
* **Action C: Manual Override (Complete Rewrite)**
  * *Condition:* Model hallucinated critical facts, leaked instructions, or refused the query.
  * *Procedure:* Delete draft, write answer manually from scratch, and flag the conversation ID for the development team.

---

## 💾 3. Review Log Metadata
Ensure your workflow capture system records:
1. ID of the reviewer
2. Timestamp of the review
3. Changes made to the draft (diff logs)
4. Triage classification (Approved / Edited / Rejected / Overridden)
