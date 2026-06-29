# Template 08: Retrieval Design Template

Use this template to specify the exact retrieval architecture and prompt grounding instructions for your RAG system. This defines how queries are transformed, searched, ranked, and eventually presented to the model.

---

## 🏗️ 1. Retrieval Pipeline Settings

* **Vector Database Choice:** (e.g., Pinecone, pgvector, Chroma, Qdrant)
* **Embedding Model ID:** (e.g., `text-embedding-3-small`, `text-embedding-gecko`)
* **Search Method:**
  * `[ ] Vector Search Only` (Cosine similarity/L2 distance)
  * `[ ] Keyword Search Only` (BM25)
  * `[ ] Hybrid Search` (Vector + Keyword fusion)
* **Reranking Method:**
  * `[ ] None`
  * `[ ] Cohere Rerank`
  * `[ ] Cross-Encoder Model`

---

## 🔄 2. Query Reformulation Block

Explain how raw user queries are transformed before querying the database.

* **Trigger condition:** Does the pipeline call an LLM to reformulate the user's chat history into a standalone question? (Yes/No)
* **Reformulation Instructions:**
  * *e.g., "Given a user chat history and a new query, rewrite it to be a standalone, search-ready noun phrase, stripping out conversational filler."*
  * *Your guidelines...*

---

## 🏷️ 3. Pre-Filter Settings

Specify any metadata filters applied automatically depending on user context.

* **User Context Variable:** (e.g., `user.role`, `user.department`)
* **Metadata Filter Query:**
  ```json
  {
    "audience_restriction": {
      "$in": ["public", "internal-employee"]
    }
  }
  ```

---

## 📂 4. Context Assembly & Grounding Prompt

Define how the retrieved chunks are formatted into the model's prompt context.

### 4.1 Context Block Format
Show the exact structure of the context section inside the prompt:
```text
=== START OF CONTEXT DOCS ===
[Document 1]
Source: runbooks/auth-guide.md
Content: [Chunk Text]

[Document 2]
Source: policies/privacy.md
Content: [Chunk Text]
=== END OF CONTEXT DOCS ===
```

### 4.2 Model Instructions for Grounding (Prompt Snippet)
*Paste the exact instructions telling the model how to use the context and cite sources.*
* **Grounding Rule:** e.g., "Answer the user question using ONLY facts from the context. If the context does not contain the answer, output: 'I cannot answer this based on the available documentation.' Do not use your pre-training data."
* **Citation Rule:** e.g., "Every factual statement must end with an inline citation in brackets referencing the Source name (e.g., [runbooks/auth-guide.md])."

---

## 🚨 5. Fallback & Confidence Thresholds

* **Maximum Chunks Retrieved (k):** (e.g., `k=5`)
* **Embedding Score Threshold (Minimum similarity to retrieve):** (e.g., `0.72`)
* **Reranker Score Threshold:** (e.g., `0.55`)
* **Fallback Behavior (When score is below threshold):**
  * `[ ] Refuse to answer (Standard message)`
  * `[ ] Triage to Support (Automated ticket creation)`
  * `[ ] Broad internet/web search (Low security)`
