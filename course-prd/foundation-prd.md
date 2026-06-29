---
title: "Applied AI Systems: From Prompt to Production - Foundation PRD"
archetype: "course-prd"
status: "scope-locked-v1"
owner: "Shailesh Rawat"
maintainer: "Shailesh Rawat"
version: "1.0"
tags: ["applied-ai", "agentic-ai", "ai-workflows", "prompt-engineering", "rag", "mcp", "governance", "evaluation", "gitbook", "course-design"]
last_reviewed: "2026-06-16"
---

# Applied AI Systems: From Prompt to Production

## Foundation PRD

**Document purpose:** This is the foundation document for building, revising, and later selling the course **Applied AI Systems: From Prompt to Production**. It should be used as the master reference for AI agents, content creation, GitBook structure, curriculum planning, lab design, and eventual course publishing.

**Core decision:** The course will be built first as a GitBook-first learning product for the creator's own revision and gap-filling. After completion and internal validation, it will be packaged and sold as a full practical course.

**Course promise:** Help learners move from casual prompting to practical AI systems by designing, building, testing, governing, and explaining AI-assisted workflows that can survive real work.

---

## 1. Product Summary

### 1.1 Product Name

**Applied AI Systems: From Prompt to Production**

### 1.2 Product Type

A practical, documentation-first course with guided labs, reusable templates, implementation checklists, portfolio artifacts, and optional video walkthroughs.

### 1.3 Product Thesis

Most AI courses either teach shallow prompting or jump directly into technical frameworks. The missing middle is the skill of turning business work into useful, inspectable, testable, and governable AI workflows.

This course owns that middle.

### 1.4 Primary Outcome

By the end of the course, the learner should be able to take a real business problem and produce an **AI Workflow Pilot Pack** that includes:

1. Problem and workflow brief
2. AI suitability assessment
3. Prompt specification
4. Knowledge and context design
5. RAG or retrieval plan
6. Tool and permission map
7. Workflow or agent design
8. Evaluation plan
9. Security and governance controls
10. Deployment and adoption plan
11. Demo script
12. Portfolio-ready case study

### 1.5 First Build Mode

The first version is not designed as a polished LMS course. It is designed as a **builder's curriculum** that lets the creator revise, learn missing pieces, create working artifacts, and produce proof.

The final commercial course will be created only after this foundation version has been completed and validated.

---

## 2. GitBook Publishing Decision

### 2.1 Recommendation

Use **GitBook** as the primary course knowledge base and learning manual.

GitBook is well suited for this course because the product is documentation-heavy, framework-heavy, template-heavy, and systems-oriented. The course should feel like a practical field manual, not a random playlist of lessons.

### 2.2 Can GitBook Be Used to Publish Courses?

Yes, GitBook can be used to publish course-like content, especially for technical, systems, product, and documentation-first learning. It works well for:

- Structured modules
- Written lessons
- Diagrams
- Code snippets
- Markdown pages
- Templates
- Lab instructions
- Case studies
- Public previews
- Internal/private docs
- GitHub-synced course repositories

However, GitBook should not be treated as a complete LMS by itself.

### 2.3 What GitBook Is Good At

Use GitBook for:

- Course textbook
- Course documentation hub
- Module pages
- Lab manuals
- Templates and checklists
- AI-agent-readable content
- Versioned course material
- Public free preview
- Living curriculum updates
- Docs-as-code workflows with GitHub or GitLab sync
- Review workflows using change requests

### 2.4 What GitBook Is Not Ideal For

GitBook is not the best standalone tool for:

- Payment collection
- Student enrollment management
- Course completion tracking
- Quiz grading
- Certificates
- Cohort scheduling
- Community management
- Video hosting at scale
- Student analytics like an LMS

### 2.5 Recommended Stack

| Need | Recommended Tool | Notes |
|---|---|---|
| Course knowledge base | GitBook | Main course manual and modules |
| Source control | GitHub | Sync course markdown and templates |
| Payment | Razorpay, Gumroad, Graphy, or Lemon Squeezy | Choose based on India-first vs global audience |
| Videos | YouTube unlisted, Loom, Vimeo, or Graphy | Keep GitBook as the written hub |
| Community | WhatsApp, Discord, Circle, or Slack | Start lightweight |
| Assignments | Tally, Google Forms, Notion forms, GitHub issues | Depends on learner type |
| Templates | GitHub repo + GitBook pages | Keep artifacts reusable |
| Certificate | Canva, Google Slides, or Graphy | Only after assessment is defined |

### 2.6 Publishing Strategy

Use GitBook as the **course operating system**.

Use an LMS only when the course needs automated enrollment, payment, progress tracking, certificates, and student management.

Recommended sequence:

1. Build course in GitBook
2. Keep source in GitHub
3. Publish selected preview modules publicly
4. Keep advanced modules behind paid access or separate LMS
5. Sell using a landing page and payment link
6. Later convert into Graphy, Thinkific, or another LMS if scale demands it

---

## 3. Course Positioning

### 3.1 One-Line Positioning

A practical course for designing, building, evaluating, and governing AI-assisted workflows for real business use.

### 3.2 Stronger Market Positioning

**Applied AI Systems: From Prompt to Production** teaches professionals how to move beyond prompt tricks and build AI workflows that are useful, inspectable, safe, and valuable enough to pilot in real work.

### 3.3 Course Category

This course sits between:

- Prompt engineering
- AI product thinking
- Business analysis
- Workflow automation
- RAG systems
- Agentic AI
- Evaluation and governance
- AI adoption and enablement

### 3.4 Differentiation

This course is not about knowing every AI tool. It is about knowing how to turn work into systems.

The course differentiates through:

- Business-first AI use-case framing
- Prompt-to-spec method
- Five-layer Applied AI Systems model
- Practical labs instead of passive lectures
- Evaluation and governance as core modules, not optional extras
- Portfolio-ready artifacts
- Agent-ready documentation structure
- Documentation-first publishing through GitBook

---

## 4. Scope Lock

### 4.1 V1 Scope

The course will cover the following domains:

1. Applied AI foundations
2. Business problem and workflow discovery
3. Prompt-to-spec design
4. Structured outputs and quality rubrics
5. Knowledge systems and RAG
6. Tool use, APIs, and MCP-style integration thinking
7. Workflow orchestration and agentic patterns
8. State, memory, and context management
9. Evaluation, testing, and debugging
10. Security, prompt injection, and permission boundaries
11. Responsible AI, governance, and human review
12. Deployment, adoption, ROI, and stakeholder storytelling
13. Capstone AI Workflow Pilot Pack

### 4.2 Explicitly Out of Scope for V1

The course will not focus on:

- Deep machine learning theory
- Training neural networks from scratch
- Advanced statistics and model internals
- Heavy MLOps pipelines for custom model training
- Fine-tuning as the main path
- Full-stack SaaS development as the primary objective
- Generic prompt trick collections
- Framework worship
- A broad survey of every AI tool in the market
- Unrealistic automation claims

### 4.3 Boundary Statement

The course teaches practical AI system design for modern knowledge work. It does not claim to turn learners into ML researchers or senior AI engineers. It helps them become stronger applied AI practitioners, workflow designers, AI-enabled business analysts, AI product thinkers, and solution builders.

---

## 5. Target Learners

### 5.1 Primary Audience

The course is for professionals who understand work, teams, documentation, processes, products, or business problems, and want to apply AI practically.

Primary learners:

- Business analysts
- Product managers
- Consultants
- Technical writers
- Content strategists
- Internal communications professionals
- AI enablement leads
- Founders
- Operators
- No-code and low-code builders
- Junior developers seeking system thinking

### 5.2 Secondary Audience

- Developers who want to communicate AI workflows better
- Startup teams building internal AI tools
- Enterprise teams experimenting with AI adoption
- Freelancers who want to package AI workflow services

### 5.3 Learner Pain Points

Learners may be struggling with:

- Too many tools and no clear system
- Good prompts but unreliable outputs
- RAG demos that do not feel production-ready
- Confusion between agents and workflows
- No evaluation habit
- No governance structure
- No confidence presenting AI systems to stakeholders
- No portfolio proof beyond screenshots
- No method for choosing good AI use cases

### 5.4 Learner Transformation

Before the course, the learner thinks:

> I know some AI tools, but I am not sure how to apply them properly in real workflows.

After the course, the learner should think:

> I can identify a real AI opportunity, design the workflow, build a working prototype, test it, govern it, and explain its value clearly.

---

## 6. Course Design Principles

### 6.1 Practical Before Perfect

Each module must produce a usable artifact. No module should exist only as theory.

### 6.2 Business Context Before Tools

Every technical concept must connect to a business workflow, user problem, or operational risk.

### 6.3 Systems Before Frameworks

Frameworks change. Systems thinking carries forward.

### 6.4 Evaluation Before Confidence

Learners should not trust an AI workflow because it worked once. They should learn to test behavior, collect evidence, and define acceptance criteria.

### 6.5 Human Review By Design

Human-in-the-loop should not be a decorative add-on. It should be part of the workflow contract.

### 6.6 Governance Without Fear

Governance should be taught as a practical design layer, not as corporate theatre.

### 6.7 Documentation As Product

The course itself should model good documentation. Every module should be reusable, linkable, inspectable, and easy for an AI agent to work with.

---

## 7. Signature Framework

## The Five-Layer Applied AI Systems Model

The entire course should be anchored in this model.

```text
Business Layer
↓
Intelligence Layer
↓
Workflow Layer
↓
Control Layer
↓
Operations Layer
```

### 7.1 Business Layer

Defines the problem, user, outcome, workflow, risk, and value.

Core questions:

- What work is being improved?
- Who is the user?
- What decision or output matters?
- What is the current friction?
- What does success look like?

### 7.2 Intelligence Layer

Defines what the model is responsible for.

Core questions:

- Does the system need generation, classification, extraction, reasoning, retrieval, summarization, transformation, or recommendation?
- What context does the model need?
- What should the model not decide?
- What quality standard should it follow?

### 7.3 Workflow Layer

Defines how work moves through the system.

Core questions:

- What triggers the workflow?
- What steps happen?
- What tools are used?
- Where does routing happen?
- Where does human review happen?
- What are the stop conditions?

### 7.4 Control Layer

Defines permissions, guardrails, governance, and safety.

Core questions:

- What can the system access?
- What can it modify?
- What requires approval?
- What risks exist?
- What data should not be exposed?
- What happens when confidence is low?

### 7.5 Operations Layer

Defines testing, monitoring, deployment, cost, feedback, and improvement.

Core questions:

- How do we evaluate outputs?
- What logs do we keep?
- What failures do we track?
- What costs are acceptable?
- How do we improve the workflow?
- How do we show value?

---

## 8. Course Structure V1

### 8.1 Recommended Format

V1 should be structured as a self-paced GitBook course with optional video explanations.

Recommended course length:

- 8 core modules
- 1 capstone module
- 40 to 60 hours total effort
- 20 to 30 practical lessons
- 8 module assignments
- 1 final AI Workflow Pilot Pack

### 8.2 Course Modules

| Module | Title | Primary Output |
|---|---|---|
| 0 | Orientation and Course Setup | Learning workspace and project selection |
| 1 | Applied AI Foundations | AI opportunity map |
| 2 | From Business Friction to AI Use Case | AI Opportunity Brief |
| 3 | Prompt to Specification | Prompt Specification Pack |
| 4 | Knowledge Systems and RAG | RAG Readiness and Retrieval Design |
| 5 | Tools, APIs, MCP, and Workflow Integration | Tool Permission Map |
| 6 | Agentic Workflows and Orchestration | Agent Workflow Canvas |
| 7 | Evaluation, Debugging, and Observability | Evaluation Harness Plan |
| 8 | Security, Governance, and Human Review | Governance and Risk Pack |
| 9 | Deployment, Adoption, and Capstone | AI Workflow Pilot Pack |

---

## 9. Detailed Module PRD

[Refer to primary PRD for detailed descriptions of Modules 0-9]

---

## 10. Capstone Specification

[Refer to primary PRD for full details]

---

## 11. Course Asset Library

### 11.1 Mandatory Templates

The course must include these templates:

1. Learning Log
2. AI Opportunity Map
3. AI Opportunity Brief
4. Use Case Scorecard
5. Prompt Specification Template
6. Output Quality Rubric
7. RAG Readiness Checklist
8. Retrieval Design Template
9. Tool Permission Map
10. Agent Workflow Canvas
11. Memory and Context Policy
12. Evaluation Harness Template
13. Trace Log Template
14. Risk Register
15. Human Review Checklist
16. Governance Pack
17. ROI Snapshot
18. Demo Script
19. Portfolio Case Study Template
20. Final AI Workflow Pilot Pack

---

## 12. Lesson Template

Every lesson should follow this reusable structure.

```markdown
# Lesson Title

## Why This Matters
Explain the real-world problem.

## Core Idea
Teach the concept simply.

## System View
Show where this fits in the five-layer model.

## Example
Use a realistic workflow example.

## Practical Walkthrough
Show how to apply the concept.

## Common Failure Modes
Explain what usually goes wrong.

## Lab
Give the learner something to build or document.

## Output
Define the artifact they must produce.

## Review Checklist
Give acceptance criteria.

## Reflection
Ask what changed in their understanding.
```

---

## 13. Lab Template

Every practical lab should follow this structure.

```markdown
# Lab Title

## Objective
What the learner will create.

## Scenario
The business context.

## Inputs
What the learner starts with.

## Steps
Step-by-step instructions.

## Expected Output
What should be produced.

## Validation
How to check whether it works.

## Failure Mode
What to intentionally test or break.

## Submission Artifact
What file or template should be completed.

## Extension
Optional deeper challenge.
```

---

## 14. GitBook Information Architecture

[Refer to primary PRD for full structural hierarchy]

---

## 15. AI Agent Production Workflow

[Refer to primary PRD for agent instructions]

---

## 16. Assessment Model

[Refer to primary PRD]

---

## 17. Publishing and Sales Model

[Refer to primary PRD]

---

## 18. Launch Plan

[Refer to primary PRD]

---

## 19. Quality Assurance Checklist

[Refer to primary PRD]

---

## 20. Risk Register

[Refer to primary PRD]

---

## 21. Content Backlog

[Refer to primary PRD]

---

## 22. Recommended First Demo Capstone

[Refer to primary PRD]

---

## 23. Definition of Done for Course V1

[Refer to primary PRD]

---

## 24. Immediate Next Actions

[Refer to primary PRD]

---

## 25. References for Platform Decisions

[Refer to primary PRD]

---

## 26. Final Scope Statement

[Refer to primary PRD]
