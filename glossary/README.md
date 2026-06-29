# Course Glossary

This glossary defines key technical terms, architectural layers, and system patterns taught in the **Applied AI Systems** course.

---

## 📐 Five-Layer Model Layers

* **Business Layer**: The system layer mapping operational problems, user contexts, service level agreements (SLAs), and key business return values.
* **Intelligence Layer**: The layer containing prompt specifications, dynamic variables, examples, model model parameters, and JSON output schemas.
* **Workflow Layer**: The pipes managing trigger events, routing pathways, tool integration schemas, loop logic, and human approval gateways.
* **Control Layer**: The security perimeter housing input validators, prompt injection guards, data masking (PII scrubbing), credential bounds, and emergency cutoff switches.
* **Operations Layer**: The layer overseeing execution trace logs, model token billing, latency, and programmatic evaluation datasets.

---

## 🧠 Core System Terminology

* **Applied AI**: The integration of pre-trained reasoning models into targeted operational workflows to automate, augment, or explain business actions.
* **Prompt Specification**: A structured, version-controlled markdown or YAML template that replaces informal prompting with formal inputs, outputs, rules, and boundaries.
* **Retrieval-Augmented Generation (RAG)**: The process of querying an external vector database or file collection for relevant documents matching a user's query and feeding those documents into the model prompt to prevent hallucinations.
* **Model Context Protocol (MCP)**: An open standard protocol designed to integrate local data sources, tools, and API connectors with AI agents in a uniform, structured format.
* **Human-in-the-Loop (HITL)**: A workflow checkpoint requiring a human reviewer to verify, edit, or approve an AI-generated draft before it triggers any write or publish action.
* **Trace Log**: A sequential record of execution node data capturing step-by-step inputs, outputs, latencies, tokens consumed, and errors within an agentic workflow.
* **Evaluation Harness**: An automated test suite that executes a set of mock test inputs, checks their outputs against programmatic rules (assertions), and tracks success metrics over time.
* **Prompt Injection**: A security exploit where an untrusted user input contains bypass commands that trick the model into ignoring system prompts or leaking credentials.
* **Pydantic**: A data validation and settings library for Python that uses type annotations to enforce schemas and serialize outputs.
