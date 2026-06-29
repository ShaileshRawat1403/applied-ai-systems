# Template 11: Memory and Context Policy

Do not let chat history grow indefinitely, or you will waste money, increase latency, and cause model distraction. Use this template to define your system's memory architecture, context pruning rules, state lifetime, and PII sanitization policy.

---

## 🏷️ System Target
* **System Name:** 
* **Compliance Category:** (e.g., Internal Only, GDPR-Scoped, Customer Facing)
* **Maximum Context Window Limit:** (e.g., 8,192 tokens or 32,768 tokens)

---

## 💾 1. Memory Architecture

Select your session memory model:

* `[ ] Stateless`: No history retained between requests. Ideal for batch analysis, translation, and extraction.
* `[ ] Buffer Memory`: Retain raw chat history up to a specific limit. (e.g., Last 10 exchanges).
* `[ ] Summarized Memory`: Condense older dialogue history into a brief narrative summary block, appending only the most recent raw messages.
* `[ ] Long-Term Memory (Entity/Vector Storage)`: Extract key entities and facts, write them to a user database, and retrieve them via semantic search when the user returns.

---

## ✂️ 2. Pruning & Summarization Trigger

* **Pruning Condition (When do we trim context?):** *e.g., When total session history token size exceeds 4,000 tokens.*
* **Summarization Prompt (The prompt used to compress history):**
  * *e.g., "Summarize the key decisions, technical metrics, and user preferences agreed upon in this chat log. Avoid conversational filler."*
* **Preserved Context Elements:** *What must NEVER be pruned or summarized? (e.g., User API keys, current target file paths, specific error codes).*

---

## 🛡️ 3. PII & Privacy Filter Guidelines

* **Sanitization Type:** `[ ] Input Scrub`  `[ ] Output Scrub`  `[ ] None`
* **Scrubbing Rules (Regular Expressions / Model Checks):**
  * **Email Addresses:** `[ ] Yes` Regex: `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`
  * **Credit Card Numbers:** `[ ] Yes` Regex: `\b(?:\d[ -]*?){13,16}\b`
  * **System API Keys / Tokens:** `[ ] Yes` Regex: `(?i)(key|password|secret|token)\s*[:=]\s*[^\s]{10,}`
* **Handling Scrubbed Data (Anonymization Method):**
  * `[ ] Replacement`: Replace PII with placeholder strings (e.g., `[REDACTED_EMAIL]`).
  * `[ ] Refusal`: Reject the request entirely if PII is detected.

---

## ⏳ 4. State Lifespan & Deletion Policy

* **Session Idle Timeout:** How long before the session state is deleted? (e.g., 2 hours).
* **Storage Location:** Where is the session state stored? (e.g., Redis Cache, Postgres Session Table).
* **Compliance Purge Policy:** How do users request their session data be permanently deleted?
