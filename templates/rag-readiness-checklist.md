# Template 07: RAG Readiness Checklist

Do not feed garbage documents into a vector database and expect clean answers. Use this checklist to audit your source data, determine formatting needs, design a metadata strategy, and assess retrieval suitability before building RAG features.

---

## 🏷️ Knowledge Domain
* **Target Knowledge Base Domain:** (e.g., Internal System Runbooks)
* **Target Audience for RAG Answers:** (e.g., Level 1 Customer Support Agents)
* **Source Owners / Subject Experts:** 

---

## 📋 1. Source Document Quality Audit

Evaluate your source files. Check all that apply:

* **Format Type:** `[ ] Word/PDF`  `[ ] Markdown/Text`  `[ ] Google Docs`  `[ ] CSV/Excel`  `[ ] API JSON`
* **Text Cleanliness:**
  * `[ ]` Document contains clear headings and paragraphs.
  * `[ ]` Document is free of legacy OCR scan errors, corrupted characters, or redundant page headers/footers.
  * `[ ]` Information is up-to-date (no conflicting legacy rules in the same folder).
* **Reference Clarity:**
  * `[ ]` Key terms are defined (no ambiguous acronyms).
  * `[ ]` Document links are stable.

---

## 📐 2. Chunking & Ingestion Strategy

* **Chunking Type Recommendation:**
  * `[ ] Paragraph-based` (Ideal for narrative prose, wikis)
  * `[ ] Fixed-size with Overlap` (e.g., 512 tokens with 10% overlap - standard baseline)
  * `[ ] Semantic / Heading-based` (Splits strictly at `H2` or `H3` boundaries)
  * `[ ] Structured / Key-Value` (Splits by JSON objects or database rows)
* **Chosen Chunk Size:** (e.g., 500 tokens)
* **Chosen Overlap Size:** (e.g., 50 tokens)

---

## 🏷️ 3. Metadata Tagging Strategy

List the metadata fields that will be appended to each chunk. Metadata is critical for filtering searches and preventing context pollution.

| Metadata Key | Data Type | Purpose / Description | Example Value |
| :--- | :---: | :--- | :--- |
| `doc_id` | String | Unique ID of the parent document | `doc-runbook-auth-04` |
| `category` | String | System or process domain category | `authentication` |
| `audience_restriction`| String | Filters chunk access based on user credentials | `internal-only` |
| `last_modified` | Date | Tracks freshness to filter out outdated versions | `2026-06-16` |

---

## 🔄 4. Freshness & Update Plan

* **Document Creation/Update Trigger:** How are updates captured? (e.g., Git push, Google Drive webhooks).
* **Sync Frequency:** How often does the vector database rebuild? (e.g., Daily batch, Real-time).
* **Retirement Policy:** How are deprecated files removed from vector indices?

---

## 🚨 5. Golden Evaluation Questions

Draft 5 distinct questions you expect learners or users to ask, and write the exact source file path and section containing the answer. This is your retrieval validation baseline.

1. **Question:** 
   * **Source Document Path:** 
   * **Exact Section / Page:** 
2. **Question:** 
   * **Source Document Path:** 
   * **Exact Section / Page:** 
3. **Question:** 
   * **Source Document Path:** 
   * **Exact Section / Page:** 
4. **Question:** 
   * **Source Document Path:** 
   * **Exact Section / Page:** 
5. **Question:** 
   * **Source Document Path:** 
   * **Exact Section / Page:** 
