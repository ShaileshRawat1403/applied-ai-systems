# Template 09: Tool Permission Map

Do not grant unrestricted access to your AI system. Use this Tool Permission Map to define every function, API, or integration the model can call, documenting their input parameters, permission boundaries (read vs. write), human approval requirements, and error-recovery behaviors.

---

## 🏷️ System Target
* **Agent / Assistant Name:** 
* **Hosting Environment:** 
* **Authorized Runtime Credentials:** (e.g., Service Account Token - ReadOnly Scope)

---

## 🗺️ Tool Permission Definitions

Define up to 3 distinct tools your system will use.

### Tool 1: [Tool name, e.g., get_system_status]
* **API Endpoint or Python Function:** 
* **Description (Given to the model):** *Explain what the tool does and when to call it.*
* **Input Schema (Arguments):**
  ```json
  {
    "system_name": "String"
  }
  ```
* **Permission Level:** `[ ] Read-Only`  `[ ] Write-Mutation`
* **Access Boundary (What can it NOT access?):** *e.g., Cannot access server configuration details or environment variables.*
* **Human Approval Gate:** `[ ] Required`  `[ ] Bypass Allowed`
  * *If required, describe the approval gate mechanism (e.g., Slack button, Web UI modal confirmation).*
* **Tool Failure & Recovery Rule:** *What should the model do if this tool returns a 500 error or a timeout? (e.g., retry once after 2 seconds, then report service outage).*

---

### Tool 2: [Tool name, e.g., update_ticket_status]
* **API Endpoint or Python Function:** 
* **Description (Given to the model):** 
* **Input Schema (Arguments):**
  ```json
  {
    "ticket_id": "String",
    "status": "String",
    "work_note": "String"
  }
  ```
* **Permission Level:** `[ ] Read-Only`  `[ ] Write-Mutation`
* **Access Boundary (What can it NOT access?):** *e.g., Cannot modify billing details or delete tickets.*
* **Human Approval Gate:** `[ ] Required`  `[ ] Bypass Allowed`
* **Tool Failure & Recovery Rule:** 

---

### Tool 3: [Tool name]
* **API Endpoint or Python Function:** 
* **Description (Given to the model):** 
* **Input Schema (Arguments):** 
* **Permission Level:** `[ ] Read-Only`  `[ ] Write-Mutation`
* **Access Boundary:** 
* **Human Approval Gate:** `[ ] Required`  `[ ] Bypass Allowed`
* **Tool Failure & Recovery Rule:** 

---

## 🛡️ Control Layer Checklist

Verify that your tool execution environment adheres to these safety controls:

* `[ ]` **Strict Typing**: All arguments are validated using schemas (e.g., Pydantic) before calling downstream APIs.
* `[ ]` **Injection Protection**: Tool outputs are treated as untrusted strings and are never executed directly (e.g., no raw evaluation in Python or SQL).
* `[ ]` **Log Audits**: Every tool execution, including arguments passed, model status, and returned outputs, is recorded in a secure access log.
* `[ ]` **Strict Rate-Limiting**: Calls are limited to prevent server exhaustion or excessive loop costs.
