import React, { useState } from 'react';
import { Briefcase, Code, FileText, Download, Server, Info, Sliders } from 'lucide-react';

interface CapstoneProject {
  id: string;
  name: string;
  sector: string;
  problem: string;
  outcome: string;
  techStack: {
    frontend: string;
    agentOrchestrator: string;
    vectorStore: string;
    observability: string;
    model: string;
  };
  flowSteps: {
    title: string;
    tech: string;
    desc: string;
  }[];
  guidelines: {
    sla: string;
    latency: string;
    fallback: string;
    humanInTheLoop: string;
    security: string;
    costOptimization: string;
  };
}

export const CapstoneCatalog: React.FC = () => {
  const [activeView, setActiveView] = useState<'projects' | 'mindmap'>('projects');
  const [activeTab, setActiveTab] = useState<string>('support');
  const [selectedNode, setSelectedNode] = useState<number>(0);
  const [selectedMindLayer, setSelectedMindLayer] = useState<string>('business');
  
  // Custom Planner Form State
  const [plannerProject, setPlannerProject] = useState<string>('support');
  const [customSource, setCustomSource] = useState<string>('Zendesk support logs & Confluence documentation');
  const [vectorDb, setVectorDb] = useState<string>('Pinecone');
  const [orchestrator, setOrchestrator] = useState<string>('LangGraph');
  const [targetModel, setTargetModel] = useState<string>('Claude 3.5 Sonnet');
  const [slaTime, setSlaTime] = useState<number>(3);
  const [humanGate, setHumanGate] = useState<string>('Slack Approval Gate');

  const projects: CapstoneProject[] = [
    {
      id: 'support',
      name: 'Automated CRM Support Agent & Dispatcher',
      sector: 'SaaS & E-Commerce Operations',
      problem: 'High customer support ticket backlogs (average resolution time 18 hours). Staff spend significant time manually copy-pasting answers from internal engineering runbooks and customer records.',
      outcome: 'Reduce average response time to under 5 minutes with 80% automated resolution rate, redirecting only complex issues to human triage.',
      techStack: {
        frontend: 'Next.js 14 (App Router) & Tailwind CSS',
        agentOrchestrator: 'LangGraph (multi-agent routing) / Python FastAPI',
        vectorStore: 'Pinecone (hybrid sparse-dense semantic search)',
        observability: 'LangSmith & Arize Phoenix for trace evaluations',
        model: 'Claude 3.5 Sonnet (reasoning) & GPT-4o-mini (classification)'
      },
      flowSteps: [
        { title: 'Ingress Webhook', tech: 'Zendesk Event API', desc: 'Converts raw JSON support ticket payloads into standardized text transcripts.' },
        { title: 'Safety Gate', tech: 'Microsoft Presidio Filter', desc: 'Identifies and scrubs client phone numbers, emails, and credit cards before LLM processing.' },
        { title: 'Vector Index', tech: 'Pinecone Serverless', desc: 'Performs low-latency hybrid search across indexed corporate runbooks & product manuals.' },
        { title: 'Agent Router', tech: 'LangGraph multi-agent', desc: 'Routes queries to classified responder nodes. Simple answers draft a reply; complex questions escalate to human support.' },
        { title: 'Review Gate', tech: 'Slack Approval Hook', desc: 'Drafts reply and context citations inside a Slack triage channel, holding message for sign-off.' },
        { title: 'API Destination', tech: 'CRM Ticket Update API', desc: 'Appends final verified answers back to customer Zendesk tickets as public responses.' }
      ],
      guidelines: {
        sla: '99.9% API availability threshold; support responses must execute within 8 seconds for real-time portals.',
        latency: 'Total system turn: ~2.5 seconds (classification: 400ms, RAG retrieval: 150ms, generation: 1800ms, safety check: 150ms).',
        fallback: 'If model output fails formatting schema or times out, route raw ticket details directly to the active Zendesk human dispatcher queue.',
        humanInTheLoop: 'All automated responses scoring below a 90% confidence threshold are funneled through the Slack Triage channel for manual review.',
        security: 'Strict API key authorization, Row-Level Security on vector storage matching account tenant ID, and TLS 1.3 encryption in transit.',
        costOptimization: 'Enforce cache controls for static system prompts; use GPT-4o-mini for routing classification tasks before executing larger Sonnet reasoning queries.'
      }
    },
    {
      id: 'finance',
      name: 'Financial Report & SEC Filing Compliance Auditor',
      sector: 'Banking & Financial Services',
      problem: 'Manual compliance reviews of multi-page earnings sheets and SEC filings are slow and highly prone to oversight, resulting in regulatory penalty risks.',
      outcome: '95% decrease in document audit cycles; instant cross-referencing of financial records against corporate policies and standard compliance rules.',
      techStack: {
        frontend: 'React & Vite with Tailwind CSS',
        agentOrchestrator: 'LlamaIndex (recursive hierarchical retrieval)',
        vectorStore: 'pgvector (PostgreSQL-integrated database schemas)',
        observability: 'Langfuse for trace telemetry & cost tracking',
        model: 'Gemini 1.5 Pro (large 1M+ token context window) & Llama 3 70B'
      },
      flowSteps: [
        { title: 'Ingress Webhook', tech: 'Unstructured.io Parsing', desc: 'Executes layout-aware text extraction from multi-page PDFs, spreadsheets, and SEC filings.' },
        { title: 'Safety Gate', tech: 'Corporate Key Masking', desc: 'Removes or hashes internal investment ID codes and proprietary account balances.' },
        { title: 'Vector Index', tech: 'pgvector Database', desc: 'Indexes parent-child nodes representing document hierarchy (sections, tables, paragraphs).' },
        { title: 'Agent Router', tech: 'LlamaIndex Router', desc: 'Checks extracted figures against standard regulatory rules, flagging mathematical inconsistencies.' },
        { title: 'Review Gate', tech: 'Audit Dashboard Gate', desc: 'Holds generated audit reports in a pending verification queue on the executive portal.' },
        { title: 'API Destination', tech: 'Compliance Registry Hook', desc: 'Registers final signed reports in the company compliance record database.' }
      ],
      guidelines: {
        sla: 'Zero-tolerance accuracy SLA; all flagged inconsistencies must contain exact file and paragraph number citations.',
        latency: 'Document pre-processing: ~30 seconds; interactive audit queries: ~6 seconds.',
        fallback: 'When structural tables fail layout parsing, system alerts the operator to submit clean raw spreadsheet exports (CSV).',
        humanInTheLoop: 'All generated compliance reports must be checked, edited, and approved by a senior compliance auditor before submission.',
        security: 'HIPAA and SOC2 Type II compliance, encryption at rest using AWS KMS, and isolated database clusters inside VPC.',
        costOptimization: 'Run document text parsing locally; utilize vector cache summaries to avoid passing full PDF text contexts on repetitive questions.'
      }
    },
    {
      id: 'legal',
      name: 'Legal Contract Review & Redlining Advisor',
      sector: 'Corporate Legal & Procurement',
      problem: 'Procurement teams experience significant delays waiting for corporate legal counsel to review standard Master Service Agreements (MSAs) and Statements of Work (SOWs).',
      outcome: 'Reduce contract contract cycle times by 70%; ensure compliance with company guidelines on liability, SOW scopes, and payment terms.',
      techStack: {
        frontend: 'Next.js 14 & CSS Modules',
        agentOrchestrator: 'LangChain & Python Custom State Machine',
        vectorStore: 'Weaviate (object-relational vector database)',
        observability: 'Weights & Biases (W&B) Prompts for evaluation tracking',
        model: 'Claude 3.5 Sonnet (for contract drafting and redlining)'
      },
      flowSteps: [
        { title: 'Ingress Webhook', tech: 'DOCX Segmenter API', desc: 'Loads docx text data, partitioning clauses into distinct analysis chunks.' },
        { title: 'Safety Gate', tech: 'Confidentiality Anonymizer', desc: 'Anonymizes client names and specific pricing deals before model submission.' },
        { title: 'Vector Index', tech: 'Weaviate Hybrid DB', desc: 'Retrieves standard corporate playbook clause recommendations matching chunk context.' },
        { title: 'Agent Router', tech: 'LangChain Redliner Engine', desc: 'Compares text clause terms (e.g., SLA, Liability Limit) and drafts suggested redlines.' },
        { title: 'Review Gate', tech: 'Redline Review Panel', desc: 'Displays inline diff views in the manager portal for legal counsel approval.' },
        { title: 'API Destination', tech: 'Contract Management Sync', desc: 'Saves accepted contract revisions directly back into the company DMS storage.' }
      ],
      guidelines: {
        sla: 'High precision threshold; system must identify 100% of defined non-standard liability or payment terms.',
        latency: 'Audit execution: ~4.5 seconds per clause; total document analysis: ~45 seconds.',
        fallback: 'Unparsed sections or legacy scanned contracts are automatically flagged for complete human legal intake review.',
        humanInTheLoop: 'AI-generated redlines are treated as drafting suggestions. No automated edits are saved to final documents without explicit legal approval.',
        security: 'Isolated client-data tenants, client-specific encryption keys, and automatic workspace deletion on session close.',
        costOptimization: 'Enforce standard template caching to skip processing of standard boilerplates.'
      }
    },
    {
      id: 'devops',
      name: 'DevOps Incident Triage & Automated Runbook SRE',
      sector: 'Cloud Infrastructure & SRE Operations',
      problem: 'High Mean Time to Resolution (MTTR) for cloud infrastructure incidents due to delayed searches through Slack histories, wiki runbooks, and Datadog dashboards.',
      outcome: 'Reduce MTTR by 45% by delivering automated diagnostics, step-by-step triage recommendations, and runbook links to incident Slack channels.',
      techStack: {
        frontend: 'Slack Webhook App & Datadog Dashboard Widgets',
        agentOrchestrator: 'Custom SRE Agent / Go API Core',
        vectorStore: 'Qdrant (low-latency vector search)',
        observability: 'OpenTelemetry (OTel) custom tracing logs',
        model: 'Claude 3.5 Sonnet (for function calling) & Llama 3 8B'
      },
      flowSteps: [
        { title: 'Ingress Webhook', tech: 'PagerDuty Alert Webhook', desc: 'Triggered instantly when a microservice alert fires, capturing metric outliers.' },
        { title: 'Safety Gate', tech: 'Credential Filter Shield', desc: 'Filters logging details to remove internal cloud API tokens or password strings.' },
        { title: 'Vector Index', tech: 'Qdrant Vector DB', desc: 'Queries historical post-mortem documents and infrastructure documentation.' },
        { title: 'Agent Router', tech: 'OTel Diagnostician Agent', desc: 'Executes read-only Kubectl commands to trace failure logs and suggest root causes.' },
        { title: 'Review Gate', tech: 'On-Call Slack Approval', desc: 'Posts recommended runbooks and diagnostics in Slack with trigger buttons.' },
        { title: 'API Destination', tech: 'Kubernetes API Trigger', desc: 'Launches authorized script runners (e.g. restart pod) upon engineer sign-off.' }
      ],
      guidelines: {
        sla: 'Incident alerting integration latency must be under 3 seconds; diagnostic command generation must be strictly read-only.',
        latency: 'Alert intake to Slack message delivery: ~3.8 seconds.',
        fallback: 'If agent fails to find matching runbooks, post standard pager escalation lists and alert SRE on-call engineers.',
        humanInTheLoop: 'All write actions (like restarting pods or purging caches) require explicitly clicking "Execute" button in Slack by an SRE.',
        security: 'Read-only service accounts, strictly audited webhook signatures, and execution boundaries for system commands.',
        costOptimization: 'Execute initial indexing on low-cost vector instances; limit LLM diagnostic steps based on incident severity tags.'
      }
    },
    {
      id: 'healthcare',
      name: 'HIPAA Medical Transcription & EHR Coder',
      sector: 'Healthcare & Clinical Administration',
      problem: 'Physicians spend up to 3 hours daily typing patient summaries and matching symptoms to complex ICD-10 medical billing coding standards.',
      outcome: 'Automate draft summaries of clinical visits and procedure coding suggestions, saving physicians over 2 hours of admin work daily.',
      techStack: {
        frontend: 'iOS Mobile Audio Input Port & Desktop EHR Webapp',
        agentOrchestrator: 'FastAPI / Python Neo4j Graph API',
        vectorStore: 'Neo4j (Knowledge Graph of SNOMED-CT / ICD-10 ontologies)',
        observability: 'Azure Monitor Logs & HIPAA Auditing trace flows',
        model: 'HIPAA-compliant Azure OpenAI GPT-4o & Whisper API'
      },
      flowSteps: [
        { title: 'Ingress Webhook', tech: 'Whisper Transcription API', desc: 'Transcribes recorded doctor-patient audio visits into detailed text transcripts.' },
        { title: 'Safety Gate', tech: 'HIPAA Identity Guard', desc: 'Anonymizes patient identity metrics, keeping raw records isolated inside secure EHR.' },
        { title: 'Vector Index', tech: 'Neo4j Medical Graph', desc: 'Resolves parsed symptoms and procedures to standardized SNOMED-CT entities.' },
        { title: 'Agent Router', tech: 'Azure Medical Synthesizer', desc: 'Generates structured SOAP clinic notes and suggests medical ICD-10 billing codes.' },
        { title: 'Review Gate', tech: 'Physician Signature Gate', desc: 'Displays notes inside the EHR system, requiring physician verification and signature.' },
        { title: 'API Destination', tech: 'FHIR Medical Records API', desc: 'Transmits final signed summaries directly into the EHR system database.' }
      ],
      guidelines: {
        sla: '100% HIPAA compliance; no patient data can be persisted on external model servers.',
        latency: 'Audio processing: ~1.5x audio duration; EHR note generation: ~5 seconds.',
        fallback: 'If audio quality is poor or transcription fails, prompt physician for quick dictation bullet points.',
        humanInTheLoop: 'Absolute Physician Verification Gate: billing codes and SOAP notes are never committed to EHR without physician signature.',
        security: 'End-to-end BAA (Business Associate Agreement) contracts, encrypted DBs, active audit trails, and strict RBAC controls.',
        costOptimization: 'Use local medical-tuned transcription models if audio volume is high; cache medical ontology maps in memory.'
      }
    }
  ];

  const activeProject = projects.find(p => p.id === activeTab) || projects[0];

  const mindMapLayers = {
    business: {
      title: '1. Business Layer Spec',
      items: [
        'Define explicit user friction point and SLA guidelines.',
        'Target a measurable metric (e.g. 45% MTTR reduction, 80% query resolution).',
        'Identify initial data source scope and historical log volumes.',
        'Establish token and execution cost limits per user query.'
      ]
    },
    intelligence: {
      title: '2. Intelligence Layer Spec',
      items: [
        'Formulate strict prompt templates with delimiter tags.',
        'Configure model choice schemas based on task complexity.',
        'Enforce structured JSON output formats using schemas.',
        'Generate Python Pydantic classes for schema validation.'
      ]
    },
    workflow: {
      title: '3. Workflow Layer Spec',
      items: [
        'Adopt state-machine multi-agent routing engines.',
        'Define clear terminal conditions and loop thresholds.',
        'Implement Slack or dashboard approval review gates for mutations.',
        'Configure tool call schema verification boundaries.'
      ]
    },
    control: {
      title: '4. Control Layer Spec',
      items: [
        'Implement pre-ingestion PII data scrubbers.',
        'Adopt Row-Level Security matches on vector store tenants.',
        'Execute prompt injection classification filters.',
        'Limit API tool privileges to read-only capabilities.'
      ]
    },
    operations: {
      title: '5. Operations Layer Spec',
      items: [
        'Configure automated regression evaluation harnesses.',
        'Deploy Langfuse/LangSmith for trace observability.',
        'Track average token costs, latency offsets, and error rates.',
        'Establish rollback failover loops for model timeouts.'
      ]
    }
  };

  const handleExportBrief = () => {
    const selectedProj = projects.find(p => p.id === plannerProject) || projects[0];
    
    const briefContent = `# Capstone Project Opportunity Brief: ${selectedProj.name}

## 1. Project Overview & Business Case
* **Industry Sector:** ${selectedProj.sector}
* **Target System:** Custom Applied AI Pilot implementation
* **Source Data Scope:** ${customSource}
* **Target Business Outcome:** ${selectedProj.outcome}

## 2. Production Technical Architecture
* **Frontend Layer:** ${selectedProj.techStack.frontend}
* **Agent Orchestrator:** ${orchestrator}
* **Vector Database:** ${vectorDb}
* **Observability & Eval Harness:** ${selectedProj.techStack.observability}
* **Core Language Model:** ${targetModel}

### Data Flow Layout
\`\`\`text
[Data Source Ingestion] ──► [Chunking Pipeline] ──► [${vectorDb}]
                                                       │
                                                       ▼
[LLM: ${targetModel}] ◄──► [Orchestration: ${orchestrator}]
                                                       │
                                                       ▼
                                         [${humanGate}]
                                                       │
                                                       ▼
                                             [Production Destination]
\`\`\`

## 3. SLA & Operational Parameters
* **Target SLA Availability:** 99.9%
* **Maximum Response Latency:** ${slaTime} seconds
* **Human-in-the-Loop Gateway:** ${humanGate}
* **Model Failover Protocol:** ${selectedProj.guidelines.fallback}
* **Access Control & Security Protocol:** ${selectedProj.guidelines.security}
* **Token Cost Optimization Policy:** ${selectedProj.guidelines.costOptimization}

---
*Generated via Applied AI Systems Capstone Opportunity Planner.*
`;

    const blob = new Blob([briefContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `capstone_opportunity_brief_${plannerProject}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Page Header */}
      <div className="glass-panel" style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '20px', color: 'var(--text-header)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Briefcase size={20} style={{ color: 'var(--accent-blue)' }} />
          Capstone Portfolio & Production Architectures
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Review production-grade architectures, decision mind maps, and interactive system diagrams across 5 major industry use cases.
        </p>
        
        {/* Toggle Mode Navigation */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button
            className={activeView === 'projects' ? 'primary' : 'secondary'}
            onClick={() => setActiveView('projects')}
            style={{ fontSize: '12px', padding: '6px 14px' }}
          >
            Capstone Project Catalog
          </button>
          <button
            className={activeView === 'mindmap' ? 'primary' : 'secondary'}
            onClick={() => setActiveView('mindmap')}
            style={{ fontSize: '12px', padding: '6px 14px' }}
          >
            5-Layer Architecture Mind Map
          </button>
        </div>
      </div>

      {activeView === 'projects' ? (
        <>
          {/* Main Catalog Section */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', marginBottom: '24px', overflowX: 'auto', gap: '4px' }}>
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveTab(p.id);
                    setSelectedNode(0);
                  }}
                  className={`tab-btn ${activeTab === p.id ? 'active' : ''}`}
                >
                  {p.id.toUpperCase()}: {p.name.split(' & ')[0]}
                </button>
              ))}
            </div>

            {/* Selected Project Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
              
              {/* Left Side: Problem, Flow, Interactive Diagram */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span className="badge blue" style={{ fontSize: '10px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {activeProject.sector}
                  </span>
                  <h3 style={{ fontSize: '18px', color: 'var(--text-header)', fontWeight: 'bold' }}>
                    {activeProject.name}
                  </h3>
                </div>

                <div>
                  <label>Business Problem Context</label>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {activeProject.problem}
                  </p>
                </div>

                {/* Interactive SVG Diagram */}
                <div>
                  <label>Interactive Architecture flow diagram (Select any block to inspect details)</label>
                  <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'center' }}>
                    <svg viewBox="0 0 740 100" width="100%" height="auto" style={{ display: 'block' }}>
                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="var(--text-muted)" />
                        </marker>
                      </defs>
                      
                      {activeProject.flowSteps.map((step, idx) => {
                        const isSelected = selectedNode === idx;
                        const x = 10 + idx * 120;
                        const y = 25;
                        const w = 96;
                        const h = 50;
                        
                        return (
                          <g key={idx} onClick={() => setSelectedNode(idx)} className="svg-node-interactive" style={{ cursor: 'pointer' }}>
                            {/* Node Box */}
                            <rect
                              x={x}
                              y={y}
                              width={w}
                              height={h}
                              rx={6}
                              fill={isSelected ? 'var(--bg-card)' : 'var(--bg-secondary)'}
                              stroke={isSelected ? 'var(--accent-blue)' : 'var(--border-color)'}
                              strokeWidth={isSelected ? 2 : 1.2}
                            />
                            {/* Step Text Label */}
                            <text
                              x={x + w / 2}
                              y={y + 24}
                              textAnchor="middle"
                              fill={isSelected ? 'var(--text-header)' : 'var(--text-primary)'}
                              style={{ fontSize: '10px', fontWeight: 'bold', fontFamily: 'var(--font-body)' }}
                            >
                              {step.title.split(' ')[0]}
                            </text>
                            <text
                              x={x + w / 2}
                              y={y + 38}
                              textAnchor="middle"
                              fill="var(--text-muted)"
                              style={{ fontSize: '8px', fontFamily: 'var(--font-code)' }}
                            >
                              {step.title.split(' ')[1] || ''}
                            </text>
                            
                            {/* Arrow connector - Shortened slightly to avoid border overlap */}
                            {idx < 5 && (
                              <line
                                x1={x + w}
                                y1={y + h / 2}
                                x2={x + 120 - 4}
                                y2={y + h / 2}
                                stroke="var(--border-color)"
                                strokeWidth={1}
                                markerEnd="url(#arrow)"
                              />
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* Detail Inspector Card */}
                <div className="glass-panel" style={{ padding: '20px', background: 'var(--bg-inner)', border: '1px solid var(--border-glass)' }}>
                  <span className="badge blue" style={{ fontSize: '9px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Node Inspector: Step {selectedNode + 1} of 6
                  </span>
                  <h4 style={{ fontSize: '14px', color: 'var(--text-header)', fontWeight: 'bold' }}>
                    {activeProject.flowSteps[selectedNode].title}
                  </h4>
                  <div style={{ display: 'flex', gap: '8px', margin: '6px 0 10px 0', fontSize: '11px', fontFamily: 'var(--font-code)', color: 'var(--accent-blue)' }}>
                    <span>Tech Core: {activeProject.flowSteps[selectedNode].tech}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {activeProject.flowSteps[selectedNode].desc}
                  </p>
                </div>
              </div>

              {/* Right Side: Production Tech Stack & Operational Guidelines */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Tech Stack List */}
                <div className="glass-panel" style={{ padding: '20px', background: 'var(--bg-inner)', border: '1px solid var(--border-glass)' }}>
                  <h4 style={{ fontSize: '12px', color: 'var(--text-header)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Code size={13} style={{ color: 'var(--accent-purple)' }} />
                    Production Tech Stack
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px' }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>Frontend UI</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{activeProject.techStack.frontend}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>Agent Framework</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{activeProject.techStack.agentOrchestrator}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>Vector Database</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{activeProject.techStack.vectorStore}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>Observability Core</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{activeProject.techStack.observability}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>Language Model</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{activeProject.techStack.model}</span>
                    </div>
                  </div>
                </div>

                {/* Design Guidelines */}
                <div className="glass-panel" style={{ padding: '20px', background: 'var(--bg-inner)', border: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <h4 style={{ fontSize: '12px', color: 'var(--text-header)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Server size={13} style={{ color: 'var(--accent-blue)' }} />
                    System Design Specs
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12.5px' }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>SLA Target</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{activeProject.guidelines.sla}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>Average Turn Latency</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{activeProject.guidelines.latency}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>Failover Fallback</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{activeProject.guidelines.fallback}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>Human Review Gate</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{activeProject.guidelines.humanInTheLoop}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>Access Controls</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{activeProject.guidelines.security}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '10.5px', display: 'block', textTransform: 'uppercase' }}>Cost Optimization</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{activeProject.guidelines.costOptimization}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Capstone Opportunity Planner Form */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', color: 'var(--text-header)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={18} style={{ color: 'var(--accent-green)' }} />
                Interactive Capstone Opportunity Planner
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Configure your custom pilot application parameters below to download a structured, professional Capstone Opportunity Brief document.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label>Select Template Baseline</label>
                  <select value={plannerProject} onChange={(e) => setPlannerProject(e.target.value)}>
                    <option value="support">Customer Support Agent & Dispatcher</option>
                    <option value="finance">SEC Compliance Auditor</option>
                    <option value="legal">Contract Redlining & SOW Reviewer</option>
                    <option value="devops">DevOps Triage SRE Assistant</option>
                    <option value="healthcare">HIPAA Patient Note & ICD-10 Coder</option>
                  </select>
                </div>

                <div>
                  <label>Custom Data Source & Scope</label>
                  <input value={customSource} onChange={(e) => setCustomSource(e.target.value)} placeholder="e.g. Zendesk Logs / Confluence Docs" />
                </div>

                <div>
                  <label>Vector Database Choice</label>
                  <select value={vectorDb} onChange={(e) => setVectorDb(e.target.value)}>
                    <option value="Pinecone">Pinecone (Fully Managed / Serverless)</option>
                    <option value="pgvector">pgvector (Relational PostgreSQL integration)</option>
                    <option value="Weaviate">Weaviate (Graph Hybrid vector search)</option>
                    <option value="Qdrant">Qdrant (Ultra-low latency / Rust-based)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label>Agent Framework / Orchestrator</label>
                  <select value={orchestrator} onChange={(e) => setOrchestrator(e.target.value)}>
                    <option value="LangGraph">LangGraph (Multi-agent loops with state)</option>
                    <option value="LlamaIndex Workflow">LlamaIndex Workflows (Hierarchical routing)</option>
                    <option value="Autogen">Autogen (Conversational agent systems)</option>
                    <option value="Custom State Machine">Custom Python Async State Engine</option>
                  </select>
                </div>

                <div>
                  <label>Target Language Model (LLM)</label>
                  <select value={targetModel} onChange={(e) => setTargetModel(e.target.value)}>
                    <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet (State-of-the-art reasoning)</option>
                    <option value="Gemini 1.5 Pro">Gemini 1.5 Pro (Ultra-large context window)</option>
                    <option value="GPT-4o">GPT-4o (High-throughput API responses)</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '10px' }}>
                  <div>
                    <label>Target SLA latency (seconds)</label>
                    <input type="number" value={slaTime} onChange={(e) => setSlaTime(Number(e.target.value))} min={1} max={30} />
                  </div>
                  <div>
                    <label>Human Approval Gate Channel</label>
                    <select value={humanGate} onChange={(e) => setHumanGate(e.target.value)}>
                      <option value="Slack Approval Gate">Slack Webhook Triage</option>
                      <option value="MS Teams Webhook">MS Teams Webhook Channel</option>
                      <option value="Admin Dashboard Panel">Portal Admin Approval Console</option>
                      <option value="None (Autonomous)">No Approval Gate (Fully Autonomous)</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
              <button className="primary" onClick={handleExportBrief} style={{ fontSize: '13px', padding: '10px 20px' }}>
                <Download size={15} />
                Export Capstone Opportunity Brief (Markdown)
              </button>
            </div>

          </div>
        </>
      ) : (
        /* Mind Map Mode */
        <div className="glass-panel" style={{ padding: '32px' }}>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', color: 'var(--text-header)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sliders size={18} style={{ color: 'var(--accent-purple)' }} />
              5-Layer Applied AI Framework Mind Map
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Interact with the decision mind map to audit each layer requirements for production AI deployments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: '30px' }}>
            
            {/* Mind Map SVG Visualizer */}
            <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg viewBox="0 0 700 300" width="100%" height="auto" style={{ display: 'block' }}>
                
                {/* Connecting lines */}
                <line x1="350" y1="150" x2="160" y2="70" stroke="var(--border-color)" strokeWidth={1.5} strokeDasharray={3} />
                <line x1="350" y1="150" x2="540" y2="70" stroke="var(--border-color)" strokeWidth={1.5} strokeDasharray={3} />
                <line x1="350" y1="150" x2="160" y2="230" stroke="var(--border-color)" strokeWidth={1.5} strokeDasharray={3} />
                <line x1="350" y1="150" x2="540" y2="230" stroke="var(--border-color)" strokeWidth={1.5} strokeDasharray={3} />
                <line x1="350" y1="150" x2="350" y2="230" stroke="var(--border-color)" strokeWidth={1.5} strokeDasharray={3} />

                {/* Central Hub Node */}
                <rect x="290" y="130" width="120" height="40" rx={8} fill="var(--bg-card)" stroke="var(--accent-blue)" strokeWidth={2} />
                <text x="350" y="155" textAnchor="middle" fill="var(--text-header)" style={{ fontSize: '11px', fontWeight: 'bold' }}>Applied AI Core</text>

                {/* Business Layer Node */}
                <g onClick={() => setSelectedMindLayer('business')} className="svg-node-interactive" style={{ cursor: 'pointer' }}>
                  <rect x="90" y="50" width="140" height="40" rx={6} fill={selectedMindLayer === 'business' ? 'rgba(59, 130, 246, 0.12)' : 'var(--bg-secondary)'} stroke={selectedMindLayer === 'business' ? 'var(--accent-blue)' : 'var(--border-color)'} strokeWidth={selectedMindLayer === 'business' ? 2 : 1} />
                  <text x="160" y="74" textAnchor="middle" fill="var(--text-primary)" style={{ fontSize: '10.5px', fontWeight: 'bold' }}>1. Business Layer</text>
                </g>

                {/* Intelligence Layer Node */}
                <g onClick={() => setSelectedMindLayer('intelligence')} className="svg-node-interactive" style={{ cursor: 'pointer' }}>
                  <rect x="470" y="50" width="140" height="40" rx={6} fill={selectedMindLayer === 'intelligence' ? 'rgba(139, 92, 246, 0.12)' : 'var(--bg-secondary)'} stroke={selectedMindLayer === 'intelligence' ? 'var(--accent-purple)' : 'var(--border-color)'} strokeWidth={selectedMindLayer === 'intelligence' ? 2 : 1} />
                  <text x="540" y="74" textAnchor="middle" fill="var(--text-primary)" style={{ fontSize: '10.5px', fontWeight: 'bold' }}>2. Intelligence Layer</text>
                </g>

                {/* Workflow Layer Node */}
                <g onClick={() => setSelectedMindLayer('workflow')} className="svg-node-interactive" style={{ cursor: 'pointer' }}>
                  <rect x="90" y="210" width="140" height="40" rx={6} fill={selectedMindLayer === 'workflow' ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-secondary)'} stroke={selectedMindLayer === 'workflow' ? 'var(--accent-green)' : 'var(--border-color)'} strokeWidth={selectedMindLayer === 'workflow' ? 2 : 1} />
                  <text x="160" y="234" textAnchor="middle" fill="var(--text-primary)" style={{ fontSize: '10.5px', fontWeight: 'bold' }}>3. Workflow Layer</text>
                </g>

                {/* Control Layer Node */}
                <g onClick={() => setSelectedMindLayer('control')} className="svg-node-interactive" style={{ cursor: 'pointer' }}>
                  <rect x="470" y="210" width="140" height="40" rx={6} fill={selectedMindLayer === 'control' ? 'rgba(239, 68, 68, 0.12)' : 'var(--bg-secondary)'} stroke={selectedMindLayer === 'control' ? 'var(--accent-red)' : 'var(--border-color)'} strokeWidth={selectedMindLayer === 'control' ? 2 : 1} />
                  <text x="540" y="234" textAnchor="middle" fill="var(--text-primary)" style={{ fontSize: '10.5px', fontWeight: 'bold' }}>4. Control Layer</text>
                </g>

                {/* Operations Layer Node */}
                <g onClick={() => setSelectedMindLayer('operations')} className="svg-node-interactive" style={{ cursor: 'pointer' }}>
                  <rect x="280" y="210" width="140" height="40" rx={6} fill={selectedMindLayer === 'operations' ? 'rgba(245, 158, 11, 0.12)' : 'var(--bg-secondary)'} stroke={selectedMindLayer === 'operations' ? 'var(--accent-orange)' : 'var(--border-color)'} strokeWidth={selectedMindLayer === 'operations' ? 2 : 1} />
                  <text x="350" y="234" textAnchor="middle" fill="var(--text-primary)" style={{ fontSize: '10.5px', fontWeight: 'bold' }}>5. Operations Layer</text>
                </g>

              </svg>
            </div>

            {/* Mind Map Inspector Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="glass-panel" style={{ padding: '20px', minHeight: '260px' }}>
                <span className="badge purple" style={{ fontSize: '9px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Decision Node Guidelines
                </span>
                <h4 style={{ fontSize: '15px', color: 'var(--text-header)', fontWeight: 'bold', marginBottom: '14px' }}>
                  {mindMapLayers[selectedMindLayer as keyof typeof mindMapLayers].title}
                </h4>
                
                <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {mindMapLayers[selectedMindLayer as keyof typeof mindMapLayers].items.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.4', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                      <Info size={14} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
