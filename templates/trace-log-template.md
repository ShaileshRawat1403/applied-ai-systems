# Template 13: Trace Log Template

When an AI system fails, you cannot debug it from the final output alone. You must trace the entire execution chain. Use this Trace Log Template to track data flow, latency, tokens, and errors across every node in your workflow.

---

## 🏷️ Session Reference
* **Workflow Run ID:** `run-20260616-triage-9481`
* **Trigger Event:** `Incoming Ticket #1847`
* **Timestamp:** `2026-06-16T07:44:00Z`
* **Overall Execution Status:** `SUCCESS | FAILED | ESCALATED`

---

## 🗺️ Step-by-Step Trace Nodes

Follow the data through the five layers.

### Node 1: Input Validation & Redaction (Control Layer)
* **Start Time:** `07:44:00.102Z`
* **Input Data:** `Raw ticket text containing: "My user email is billing@company.com and my server login has been failing since yesterday."`
* **Node Output:** `Cleaned ticket text: "My user email is [REDACTED_EMAIL] and my server login has been failing since yesterday."`
* **Latency:** `42ms`
* **Status:** `PASS`
* **Diagnostic Logs:** `"PII Email Match found at index 18. Anonymized to [REDACTED_EMAIL]."`

---

### Node 2: Knowledge Retrieval / RAG (Operations/Intelligence Layer)
* **Start Time:** `07:44:00.145Z`
* **Search Query:** `server login failure`
* **Retrieved Document Chunks:**
  * Chunk 1: `Source: runbooks/login-errors.md | Score: 0.84 | Text: "If login fails with error code 104, reset the session cache."`
  * Chunk 2: `Source: runbooks/login-errors.md | Score: 0.76 | Text: "Standard login timeout occurs after 15 seconds of database inactivity."`
* **Latency:** `184ms`
* **Status:** `PASS`
* **Diagnostic Logs:** `"Query embedded using text-embedding-3-small. Hybrid search returned 2 documents above threshold 0.72."`

---

### Node 3: Prompt Generation & LLM Inference (Intelligence Layer)
* **Start Time:** `07:44:00.330Z`
* **Model Used:** `gemini-2.0-flash`
* **Prompt Tokens:** `1,420`
* **Completion Tokens:** `230`
* **Model Raw Output:**
  ```json
  {
    "diagnosed_error": "DB_INACTIVITY",
    "recommended_action": "Check session cache and database connectivity status.",
    "confidence_score": 0.88
  }
  ```
* **Latency:** `850ms`
* **Cost Estimate:** `$0.00021` (Prompt: $0.000075, Completion: $0.000135)
* **Status:** `PASS`

---

### Node 4: Tool Execution (Workflow Layer)
* **Start Time:** `07:44:01.182Z`
* **Tool Called:** `get_db_health`
* **Arguments Passed:**
  ```json
  {
    "db_identifier": "user-session-db"
  }
  ```
* **Tool Response:** `{"status": "HEALTHY", "active_connections": 14, "avg_response_ms": 8}`
* **Latency:** `110ms`
* **Status:** `PASS`

---

### Node 5: Output Guardrail & Formatting (Control Layer)
* **Start Time:** `07:44:01.293Z`
* **Input to Validate:** *JSON block from Node 3*
* **Validation Outcome:**
  * Schema Valid: `[x] Yes  [ ] No`
  * Hallucination Check: `[x] Pass  [ ] Fail` (All systems referenced map directly to retrieved chunks).
* **Final User Output:** `{"announcement": "We have diagnosed your login error. Please reset your session cache or check database connection."}`
* **Latency:** `18ms`
* **Status:** `PASS`

---

## 📈 Aggregated Session Execution Metrics
* **Total Latency:** `1,204ms`
* **Total LLM Call Count:** `1`
* **Total Tokens Consumed:** `1,650`
* **Total Session Run Cost:** `$0.00021`
