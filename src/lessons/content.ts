export interface Lesson {
  id: string;
  title: string;
  markdown: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const modules: Module[] = [
  {
    id: "m0",
    title: "Module 0: Orientation and Setup",
    lessons: [
      {
        id: "m0-welcome",
        title: "0.1 Welcome & Overview",
        markdown: `# 0.1 Welcome & Course Overview

Welcome to **Applied AI Systems: From Prompt to Production**. 

If you have spent any time with AI tools, you have probably experienced a common cycle: you write a prompt, get a magic response, feel amazed, try to put it in a production workflow, watch it hallucinate or format things incorrectly, and realize it isn't ready for real work.

This course is designed to solve that problem. We own the **missing middle** between casual prompting and deep machine learning.

---

## Course Philosophy

We teach AI development through four core principles:

1. **Practical Before Perfect**: Every module requires you to produce a concrete, usable design document or template. We do not value passive reading; we value artifacts that can survive a code or security review.
2. **Business Context Before Tools**: Technology is meaningless without a problem. We will anchor every prompt, RAG query, and agentic workflow in the realities of business workflows, user friction, and cost budgets.
3. **Systems Before Frameworks**: Tools and libraries (like LangChain, LlamaIndex, or AutoGen) evolve rapidly. Standard architectural principles—like schemas, input validation, structured output formats, permissions, and tracing—remain constant.
4. **Evaluation Before Confidence**: Never claim a system works because it succeeded on a single manual run. We teach you to test behavior against a systematic evaluation set of 20+ cases.

---

## The Five-Layer Model

Every workflow you build in this course is designed using the **Five-Layer Applied AI Systems Model**:

\`\`\`text
Business Layer      <- Problem, user context, SLA, business value
↓
Intelligence Layer  <- Prompt specifications, model choices, JSON contracts
↓
Workflow Layer      <- Triggers, steps, tools, routing loops, human-in-the-loop gates
↓
Control Layer       <- Guardrails, PII scrubbers, security permissions, risks
↓
Operations Layer    <- Tracing, cost estimation, evaluation sets, deployments
\`\`\`
`
      },
      {
        id: "m0-setup",
        title: "0.2 Workspace Setup",
        markdown: `# 0.2 Workspace Setup

To complete this course, you must establish a clean, structured repository for your templates, notes, and lab submissions. We recommend managing your course folder as a Git repository, allowing you to track version changes and sync directly to platforms like GitBook or GitHub.

---

## Workspace Setup Checklist

Follow these steps to establish your workspace:

### 1. Repository Structure
Ensure your local project directory matches the structure below:
* \`README.md\`
* \`SUMMARY.md\`
* \`course-prd/\`
* \`start-here/\`
* \`modules/\`
* \`templates/\`
* \`case-studies/\`

### 2. Editor & Tools
* **Markdown Editor:** Use an editor that supports Git sync and rendering (e.g., VS Code, Obsidian, Typora, or GitBook Web Editor).
* **Diagrams:** Ensure you have support for **Mermaid.js** diagrams (which we use to visualize agent flows and routing paths). VS Code has several extensions (like *Markdown Preview Mermaid Support*) that do this.
* **Terminal Environment:** Ensure you have basic CLI tools (Git, Node, or Python) installed for running optional validation scripts.

---

## A Note on API Key Security

If you write code or scripts to test templates:
* **NEVER** commit API keys or secret tokens to your Git repository.
* Always use a \`.env\` file or environment variables to load keys at runtime.
`
      },
      {
        id: "m0-project",
        title: "0.3 Project Selection",
        markdown: `# 0.3 Project Selection

Rather than teaching technical concepts using abstract examples, this course is designed for you to build **one primary project** from start to finish. You will apply every module's template to this use case, building a comprehensive Pilot Pack.

Choosing the right project now is critical. Let's walk through how to select a suitable use case.

---

## What Makes a Good Project Use Case?

For the purposes of this course, a good project candidate meets these criteria:

1. **Repetitive Language Tasks**: The workflow involves reading, summarizing, classification, extraction, translation, or drafting documents or text messages.
2. **Access to Clean Source Data**: You have ready access to the documents, runbooks, logs, or emails that the system needs to read.
3. **High Human Friction**: The current manual process takes a team member at least 15-45 minutes per run and is delayed due to human backlog.
4. **Moderate Risk Profile**: If the AI makes a minor formatting error or hallucination, it is caught by a human review gate before causing damage.

---

## Recommended Project Themes

* **AI Change Communication Workflow (Recommended Demo Theme)**: Turn raw technical engineering change logs into stakeholder-aligned Slack announcements and email drafts with automatic review gates.
* **Customer Support Escalation Assistant**: Read incoming support tickets, retrieve relevant product manuals from Confluence, draft a response, and categorize the priority score.
* **Internal Knowledge Base QA (RAG-focused)**: Build a search assistant over policy documents, HR wikis, or engineering guides that cites exact document sections.
`
      },
      {
        id: "m0-lab",
        title: "Lab 0: Orientation & Baseline",
        markdown: `# Lab 0: Orientation & Baseline

## Objective
Establish your local workspace environment, document your project candidate list, self-assess your baseline skills, and initialize your learning log.

## Scenario
You are joining a new project team as the Lead Applied AI Architect. Before you begin planning any system architectures, you need to configure your technical workspace and document your goals.

## Inputs
- **Learning Log Template**
- Your local project directory structure

## Steps

### Step 1: Directory Verification
Verify that your local folders match the structure. You should see \`course-prd/\`, \`modules/\`, \`templates/\`, and \`case-studies/\` folders.

### Step 2: Learning Log Setup
1. Copy \`templates/learning-log.md\` into your workspace.
2. Fill out your profile name, role, and target project theme.
3. Grade your baseline skills (1 to 5) in the **Baseline Skill Map** table.

### Step 3: Project Candidates Selection
1. Open a new file \`project-candidates.md\` or append to your learning log.
2. Outline 2 distinct workflow problems you could solve during this course.
`
      }
    ]
  },
  {
    id: "m1",
    title: "Module 1: Applied AI Foundations",
    lessons: [
      {
        id: "m1-meaning",
        title: "1.1 What Applied AI Really Means",
        markdown: `# 1.1 What Applied AI Really Means

## Why This Matters
Most professionals treat AI as a conversational companion—a chatbot they chat with until they get a passable answer. In business, workflows must be reliable, repeatable, audited, and cost-effective. To build these workflows, you must shift your perspective from AI as a "tool" to AI as a **system capability**.

---

## Core Idea
Applied AI is the practice of integrating machine intelligence into operational workflows to automate, augment, or explain decisions. 

Rather than viewing an LLM as a "know-it-all" oracle, think of it as a processor with three core properties:
1. **Natural Language Interface**: Translating unstructured human communication into structured system commands.
2. **Fuzzy Reasoning Engine**: Categorizing, extracting, or summarizing messy, non-standard datasets that traditional rule-based coding cannot parse.
3. **Contextual Synthesizer**: Composing personalized drafts, scripts, or summaries based on real-time documentation retrieval.
`
      },
      {
        id: "m1-comparison",
        title: "1.2 Prompt vs. Workflow vs. System",
        markdown: `# 1.2 Prompt vs. Workflow vs. System

## Why This Matters
Many builders get stuck in "prompt land." They spend weeks tweaking a single text prompt in a web playground until it looks perfect, then deploy it and are shocked when users encounter broken formatting or security leaks.

---

## Core Idea

We define the boundaries of AI integration across three tiers of complexity:

1. **A Prompt**: A single instruction block passed to a model. It has zero state memory, lacks schema validation, and relies on "vibe checks" for verification.
2. **A Workflow**: A chain of execution steps. It has a start trigger, runs the prompt, retrieves documents, calls external tools (APIs), routes output based on logic, and halts at human review gates.
3. **A System**: A fully governed engineering deployment. It wraps the workflow in version-controlled schemas, validates inputs/outputs, logs execution traces, implements risk controls, monitors token costs, and runs regression test harnesses.
`
      },
      {
        id: "m1-five-layer",
        title: "1.3 The Five-Layer Model",
        markdown: `# 1.3 The Five-Layer Applied AI Systems Model

## Why This Matters
When building traditional software, engineers use established architectures to organize code, manage state, and isolate risks. The **Five-Layer Applied AI Systems Model** provides a structured architecture to design inspectable and secure AI workflows.

---

## Core Idea

The Five-Layer Model isolates system responsibilities into five distinct, decoupled layers:

\`\`\`mermaid
graph TD
    classDef business fill:#e1f5fe,stroke:#0288d1,stroke-width:2px;
    classDef intelligence fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
    classDef workflow fill:#efebe9,stroke:#5d4037,stroke-width:2px;
    classDef control fill:#ffebee,stroke:#c62828,stroke-width:2px;
    classDef operations fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;

    B["1. Business Layer<br>(Problem, SLA, User Context, Value)"]:::business
    I["2. Intelligence Layer<br>(Prompt Specs, Model Config, JSON Contracts)"]:::intelligence
    W["3. Workflow Layer<br>(Triggers, Routing, APIs, Human review gates)"]:::workflow
    C["4. Control Layer<br>(PII scrub, Injection check, Permissions, Kill switches)"]:::control
    O["5. Operations Layer<br>(Trace logs, Evaluation set, Cost monitoring)"]:::operations

    B --> I --> W --> C --> O
\`\`\`

1. **Business Layer**: Defines the problem, the target user, the desired business outcome, and the cycle-time constraints (SLAs).
2. **Intelligence Layer**: Defines what the model is responsible for, its system prompts, instructions, few-shot examples, reasoning boundaries, and structured JSON contracts.
3. **Workflow Layer**: Coordinates how information moves. Defines the trigger event, routing rules, tool APIs, loop logic, and human approval checkpoints.
4. **Control Layer**: Handles security and compliance. Defines input scrubbers (PII redaction), security validation, permission limits, audit trails, and emergency kill switches.
5. **Operations Layer**: Tracks token metrics, execution costs, latency traces, automated evaluation datasets, and rollback deployment plans.
`
      },
      {
        id: "m1-lab",
        title: "Lab 1: Opportunity Mapping",
        markdown: `# Lab 1: Opportunity Mapping

## Objective
Identify three candidate workflows within your team or organization, score them against suitability and risk metrics, and create your first course artifact: the **AI Opportunity Map**.

## Scenario
You have been hired as the Lead AI Strategist for a fast-growing team. The business is experiencing bottleneck issues in multiple areas and has requested a formal audit to determine where to launch the first AI pilot project.

## Inputs
- **AI Opportunity Map Template**
- Your local project workspace

## Steps

### Step 1: Workflow Identification
Audit your team's day-to-day operations. Identify 3 distinct tasks that take over 15 minutes of manual text processing. Complete Section 1 ("Workflow Audit & Mapping") of your Opportunity Map.

### Step 2: Scoring the Opportunities
1. Open your copy of the **AI Opportunity Map**.
2. Rate each candidate workflow from 1 to 5 on Friction, AI Suitability, Safety, Feasibility, and Business Value.
3. Calculate the total score out of 25 for each workflow.

### Step 3: Detail Mapping
Select the candidate with the highest total score. Map its boundaries across the Business, Intelligence, Workflow, Control, and Operations layers.
`
      }
    ]
  }
];

export const caseStudyMarkdown = `# Case Study: AI Change Communication Workflow

## 🏷️ Case Study Profile
* **Project Title:** Automating System Release & Change Communications using controlled RAG and Slack Gateways
* **Author:** Shailesh Rawat (Course Demo Capstone)
* **Perspective:** Lead Applied AI Systems Architect
* **Timeline:** 4 Weeks

---

## 📖 1. Executive Summary

Every software release or configuration change in a modern engineering department requires translating technical commit notes into plain, audience-appropriate notifications (for customers, operations teams, and sales representatives). 

We engineered the **Change Communication Assistant**—an end-to-end applied AI system designed around a strict Prompt Specification, Confluence grounding context (RAG), and a Slack human-in-the-loop gate. The system reduces drafting cycle times from 45 minutes to 30 seconds while maintaining a 100% compliance record on data privacy, system logging, and human audit approvals.

---

## 📐 3. System Architecture (The Five-Layer Design)

Our solution decouples execution across the five-layer systems model:

\`\`\`mermaid
graph TD
    Trigger[Dev merges PR] --> InputFilter[Node 1: Control Layer - PII & Injection Filter]
    InputFilter --> RAGQuery[Node 2: Operations Layer - Confluence Retrieval]
    RAGQuery --> Inference[Node 3: Intelligence Layer - Prompt Spec Execution]
    Inference --> SchemaValid{Node 4: Control Layer - Schema Validation Check}
    SchemaValid -- Fail --> RefusalLog[Log Error & Notify Developer]
    SchemaValid -- Pass --> SlackGate[Node 5: Workflow Layer - Slack Human Gate]
    SlackGate -- Edit/Approve --> PostAction[Node 6: Workflow Layer - Post to Confluence/Email]
    PostAction --> LogAudit[Node 7: Operations Layer - Save Trace Log]
\`\`\`

* **Human review gate**: The generated draft is posted directly into the Slack channel \`#comms-approvals\` using a block-kit UI containing "Approve" and "Edit" buttons.
`;
