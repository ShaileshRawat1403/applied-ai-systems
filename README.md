# Applied AI Systems: From Prompt to Production

Welcome to the course repository for **Applied AI Systems: From Prompt to Production**. This repository serves as the complete, documentation-first curriculum and reference implementation for turning business workflows into robust, inspectable, and governable AI systems.

---

## 🚀 Course Overview

Most AI education today focuses either on shallow prompt engineering tricks or highly specialized, framework-dependent machine learning coding. This course targets **the missing middle**: the architectural design and operational principles required to convert a real-world business problem into an AI-assisted workflow that can be reliably evaluated, safely governed, and deployed in production.

This repository is designed to sync directly with **GitBook**, serving as the student manual, lab workbook, and template archive.

---

## 🛠️ Repository Structure

This repository adheres to the following organization, optimized for GitBook sync:

```text
applied-ai-systems-course/
├── README.md                                 # Course entry point (this file)
├── SUMMARY.md                                # GitBook Table of Contents
├── changelog.md                              # Version history and course updates
├── course-prd/
│   └── foundation-prd.md                     # Master Foundation Product Requirement Document
├── start-here/
│   ├── course-overview.md                    # Core syllabus and course objectives
│   ├── how-to-use-this-course.md             # Guide on navigating labs and templates
│   ├── setup-checklist.md                    # Technical & workspace setup steps
│   └── capstone-preview.md                   # Understanding the final pilot pack
├── modules/
│   ├── 00-orientation-and-setup/             # Workspace setup and project candidates
│   ├── 01-applied-ai-foundations/            # Grounding AI as a system capability
│   ├── 02-business-friction-to-use-case/     # Filtering and brief creation
│   ├── 03-prompt-to-specification/           # Specs, contracts, and quality rubrics
│   ├── 04-knowledge-systems-rag/             # RAG design and metadata
│   ├── 05-tools-apis-mcp/                    # Tool schemas, permissions, and gates
│   ├── 06-agentic-workflows/                 # Multi-step state, routers, and stop rules
│   ├── 07-evaluation-debugging-observability/# Testing, debugging, and trace logs
│   ├── 08-security-governance-human-review/  # Guardrails, risk registers, and human gates
│   └── 09-deployment-adoption-capstone/      # Final pilot assembly, ROI, and demo script
├── templates/                                # 20 mandatory course templates
├── labs/                                     # Step-by-step practical exercises
├── case-studies/                             # Demo capstone and production case studies
└── assets/                                   # Architectural diagrams and visual assets
```

---

## 📐 The Five-Layer Applied AI Systems Model

The course content is anchored in the signature **Five-Layer Applied AI Systems Model**:

1. **Business Layer**: Problem definition, user needs, outcomes, and business value.
2. **Intelligence Layer**: Model capabilities, structured outputs, prompt specifications, and context rules.
3. **Workflow Layer**: Execution triggers, routing, tool integrations, and human review gates.
4. **Control Layer**: Permission maps, security policies, guardrails, risk registers, and compliance controls.
5. **Operations Layer**: Automated evaluations, tracing, monitoring, costs, and continuous integration.

---

## 📖 Getting Started

To get the most out of this course:

1. **Read the Orientation**: Start in [Start Here: Course Overview](start-here/course-overview.md) and complete the workspace setup.
2. **Set up Your Learning Log**: Copy the template in `templates/learning-log.md` into your own workspace to track your progress and reflections.
3. **Select Your Project Use Case**: Think of a repetitive business workflow or operational bottleneck you want to solve, and fill out the `project-candidates.md` template.
4. **Follow the Modules**: Each module contains lesson documents, a practical lab, and a mandatory template you will complete to build your final **Capstone: AI Workflow Pilot Pack**.

---

## 💻 Running the Interactive App Portal

You can run the interactive course companion dashboard and playground application locally:

### Option A: Double-Click Launcher (Recommended for Non-Technical Users)
If you are on macOS:
1. Double-click the `start.command` file in the root folder of this repository.
2. It will open a Terminal window, check and install local dependencies, and start the developer server.
3. Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

### Option B: Command Line (Developer Setup)
1. In your terminal, run `npm install` to download dependencies.
2. Run `npm run dev` to launch the Vite local server.
3. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📄 License & Contributing

This material is prepared for practitioners, builders, and learners. For corrections, updates, or additions, please submit a Change Request (pull request) in the synced GitHub repository.
