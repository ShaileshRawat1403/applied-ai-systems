# Template 05: Prompt Specification Template

Do not write casual prompts. Write versioned prompt specifications with explicit schemas, contracts, style guides, and failure policies. Use this template to document the prompt specification for your primary workflow.

---

## 📄 Prompt Metadata

```yaml
id: "ps-change-comm-01"
name: "Change Communication Drafting Specification"
version: "1.0.0"
author: "Shailesh Rawat"
model_compatibility: ["gemini-1.5-pro", "gemini-2.0-flash", "gpt-4o"]
last_updated: "2026-06-16"
```

---

## 🎯 1. Role & Objective

### 1.1 Persona/Role definition
*Define the professional expertise and perspective the model should adopt. (e.g., "You are an expert change manager and corporate communications specialist").*

### 1.2 Business Objective
*What is the model trying to achieve for the user? (e.g., "Synthesize technical engineering updates into user-facing announcements that explain benefits and actions clearly").*

---

## 📦 2. Input/Output Contract

### 2.1 Input Data Schema (Variables)
List the dynamic parameters that will be passed into this prompt at runtime.

| Variable Name | Data Type | Required (Y/N) | Description |
| :--- | :---: | :---: | :--- |
| `raw_change_notes` | String | Y | Rough developer logs, bug reports, or release logs. |
| `target_audience` | String | Y | The group of employees or customers impacted by the change. |
| `date_effective` | String | Y | Date when the change goes live. |
| `system_impact` | String | N | List of specific services or pages experiencing downtime. |

### 2.2 Output Schema (Expected Structure)
*Specify the structure of the model's output. (We recommend using JSON or YAML block formats. Specify the schema keys).*

```json
{
  "announcement_headline": "String",
  "impact_summary": "String",
  "key_actions_required": [
    {
      "step_number": "Integer",
      "action": "String",
      "deadline": "String"
    }
  ],
  "technical_details_retained": "String",
  "support_contact": "String"
}
```

---

## 🎨 3. Reasoning Boundaries & Guidelines

### 3.1 Style & Voice Guidelines
* **Tone:** 
* **Vocabulary Limits (What words to avoid?):** 
* **Formatting Rules:** 

### 3.2 Reasoning & Fact Retrieval Boundaries
*What must the model assume or verify?*
* **Grounding constraint:** e.g., "Do not introduce external system names. Refer only to systems explicitly defined in `system_impact`."
* **Handling assumptions:** e.g., "If `date_effective` is omitted, output null in the JSON schema. Do not speculate."

---

## 📝 4. Examples (Few-Shot Prompting)

Provide at least one complete example showing the inputs mapped to the ideal output.

### Example 1: Input Variables
* `raw_change_notes`: "Deploying server updates to cloud hosting. Web portal will be offline on Friday between 2 AM and 4 AM GMT."
* `target_audience`: "All registered web users."
* `date_effective`: "2026-06-19"
* `system_impact`: "Web portal"

### Example 1: Ideal Output
```json
{
  "announcement_headline": "Planned Maintenance: Web Portal Offline on June 19",
  "impact_summary": "Our web portal will be temporarily unavailable due to standard system maintenance.",
  "key_actions_required": [
    {
      "step_number": 1,
      "action": "Avoid submitting transactions between 2:00 AM and 4:00 AM GMT.",
      "deadline": "2026-06-19T02:00:00Z"
    }
  ],
  "technical_details_retained": "Deploying server updates to cloud hosting.",
  "support_contact": "support@ourcompany.com"
}
```

---

## 🚨 5. Failure and Refusal Policies

### 5.1 Refusal Conditions (When should the model say "No"?)
* **Rule 1:** *If the raw notes are entirely unreadable or nonsense text.*
* **Rule 2:** *If the change note describes a critical security incident (which requires separate PR policies).*

### 5.2 Refusal Output Structure
```json
{
  "refusal_code": "INSUFFICIENT_DATA | SECURITY_ESCALATION",
  "reason": "Clear explanation of why the output could not be generated."
}
```
