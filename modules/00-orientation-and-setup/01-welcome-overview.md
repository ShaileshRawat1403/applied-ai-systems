# 0.1 Welcome & Course Overview

Welcome to **Applied AI Systems: From Prompt to Production**. 

If you have spent any time with AI tools, you have probably experienced a common cycle: you write a prompt, get a magic response, feel amazed, try to put it in a production workflow, watch it hallucinate or format things incorrectly, and realize it isn't ready for real work.

This course is designed to solve that problem. We own the **missing middle** between casual prompting and deep machine learning.

---

## 🏛️ Course Philosophy

We teach AI development through four core principles:

1. **Practical Before Perfect**: Every module requires you to produce a concrete, usable design document or template. We do not value passive reading; we value artifacts that can survive a code or security review.
2. **Business Context Before Tools**: Technology is meaningless without a problem. We will anchor every prompt, RAG query, and agentic workflow in the realities of business workflows, user friction, and cost budgets.
3. **Systems Before Frameworks**: Tools and libraries (like LangChain, LlamaIndex, or AutoGen) evolve rapidly. Standard architectural principles—like schemas, input validation, structured output formats, permissions, and tracing—remain constant.
4. **Evaluation Before Confidence**: Never claim a system works because it succeeded on a single manual run. We teach you to test behavior against a systematic evaluation set of 20+ cases.

---

## 📐 The Five-Layer Model

Every workflow you build in this course is designed using the **Five-Layer Applied AI Systems Model**:

```text
Business Layer      <- Problem, user context, SLA, business value
↓
Intelligence Layer  <- Prompt specifications, model choices, JSON contracts
↓
Workflow Layer      <- Triggers, steps, tools, routing loops, human-in-the-loop gates
↓
Control Layer       <- Guardrails, PII scrubbers, security permissions, risks
↓
Operations Layer    <- Tracing, cost estimation, evaluation sets, deployments
```

---

## 🚀 The Primary Outcome: Your Pilot Pack

By the end of this course, you will not just have a repository of notes. You will compile your work into an **AI Workflow Pilot Pack**—a professional, portfolio-ready document suite that proves you can design, build, test, and govern an AI system. This package will include:

1. **AI Opportunity Brief**: Aligning stakeholders on the problem and constraints.
2. **Prompt Specification**: Versioned instructions with strict JSON structures.
3. **Retrieval Design**: Document chunking, metadata filters, and grounding prompts.
4. **Tool Permission Map**: Defining parameters and read/write scopes.
5. **Agent Workflow Canvas**: Mapping execution logic, state, and loop escapes.
6. **Evaluation Harness**: Programmatic test cases with pass/fail boundaries.
7. **Governance & Risk Pack**: Security threat mitigations and human review gates.
8. **ROI Snapshot**: Cost-per-run analysis and payback projections.

Let's proceed to setting up your workspace.
