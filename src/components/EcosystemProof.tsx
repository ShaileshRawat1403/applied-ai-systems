import { CheckCircle, FileCheck, GitPullRequestClosed, Hand, LockKeyhole, ScanSearch, Workflow } from 'lucide-react';

const proofRun = {
  runId: '0fb975d6-b309-4d68-98fc-d9716193a6ca',
  workflow: 'websiteops.website_content_publish.v0',
  status: 'completed',
  ledgerEvents: 51,
  headHash: 'sha256:cd297932...',
  bundleHash: 'sha256:37a58b5...',
  reviewer: 'websiteops-operator',
  exportPath: 'proofs/websiteops-hitl/exports/0fb975d6-b309-4d68-98fc-d9716193a6ca/website_publish_packet',
};

const loopSteps = [
  { label: 'Intake website state', detail: 'Site goal, target pages, SEO constraints, and publication boundary captured.' },
  { label: 'Audit existing pages', detail: 'The site is treated as an operating surface, not a static brochure.' },
  { label: 'Plan content update', detail: 'Agent prepares an update plan from the governed backlog.' },
  { label: 'Draft new content', detail: 'Agent creates the candidate public copy as a controlled artifact.' },
  { label: 'Verify links and SEO', detail: 'Kernel records validation evidence before any review handoff.' },
  { label: 'Human review', detail: 'The run pauses until the operator approves the draft.' },
  { label: 'Export publish packet', detail: 'Only approved content is exported for manual website implementation.' },
  { label: 'Capture feedback', detail: 'The next loop is based on measured page and audience signals.' },
];

const proofCards = [
  {
    icon: Workflow,
    title: 'Agentic execution',
    body: 'Flowright drove a multi-step WebsiteOps loop from intake to export using a repeatable workflow contract.',
  },
  {
    icon: Hand,
    title: 'Human authority',
    body: 'The run stopped at human_review and resumed only after an operator approval was recorded.',
  },
  {
    icon: FileCheck,
    title: 'Evidence passport',
    body: 'The evidence bundle recorded 51 ledger events, artifact hashes, validation status, and review metadata.',
  },
  {
    icon: GitPullRequestClosed,
    title: 'Promotion denied',
    body: 'Promotion was blocked because this WebsiteOps loop exports a packet; it does not autonomously publish or open a PR.',
  },
];

export function EcosystemProof() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <section className="glass-panel" style={{ padding: '36px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <span className="badge green" style={{ width: 'fit-content' }}>
            Flowright WebsiteOps proof
          </span>
          <div>
            <h1 style={{ fontSize: '34px', marginBottom: '12px' }}>
              Agentic Execution With Human-in-the-Loop Control
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, maxWidth: '760px' }}>
              This page is the first public proof of the Sans Serif Systems ecosystem operating on itself.
              Flowright prepared a website content packet, verified the loop, paused for human approval,
              exported the approved artifact, and refused autonomous promotion.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px', marginTop: '8px' }}>
            <Metric label="Run" value={proofRun.status} />
            <Metric label="Ledger events" value={String(proofRun.ledgerEvents)} />
            <Metric label="Reviewer" value={proofRun.reviewer} />
            <Metric label="Workflow" value="WebsiteOps" />
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        {proofCards.map((card) => {
          const Icon = card.icon;
          return (
            <div className="glass-panel" key={card.title} style={{ padding: '22px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>{card.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '13.5px' }}>{card.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="glass-panel" style={{ padding: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <ScanSearch size={18} color="var(--accent-blue)" />
          <h2 style={{ fontSize: '22px' }}>The governed website loop</h2>
        </div>

        <div style={{ display: 'grid', gap: '10px' }}>
          {loopSteps.map((step, index) => (
            <div key={step.label} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: '12px', alignItems: 'start', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-inner)' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>
                {index + 1}
              </div>
              <div>
                <h3 style={{ fontSize: '14px', marginBottom: '4px' }}>{step.label}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.55 }}>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
        <div className="glass-panel" style={{ padding: '26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <LockKeyhole size={18} color="var(--accent-orange)" />
            <h2 style={{ fontSize: '20px' }}>Control boundary</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Flowright is not an autonomous publisher. It governs the preparation loop: agents can structure,
            draft, validate, and export artifacts, but the system must pause when human authority is required.
            The final website edit remains a human-controlled publication step.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <CheckCircle size={18} color="var(--accent-green)" />
            <h2 style={{ fontSize: '20px' }}>Evidence</h2>
          </div>
          <div style={{ display: 'grid', gap: '10px', color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6 }}>
            <CodeLine label="Run ID" value={proofRun.runId} />
            <CodeLine label="Workflow" value={proofRun.workflow} />
            <CodeLine label="Ledger" value={proofRun.headHash} />
            <CodeLine label="Bundle" value={proofRun.bundleHash} />
            <CodeLine label="Export" value={proofRun.exportPath} />
          </div>
        </div>
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '14px', background: 'var(--bg-inner)' }}>
      <div style={{ color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>{label}</div>
      <div style={{ color: 'var(--text-header)', fontWeight: 700, fontSize: '14px', overflowWrap: 'anywhere' }}>{value}</div>
    </div>
  );
}

function CodeLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
      <code style={{ display: 'block', marginTop: '3px', overflowWrap: 'anywhere' }}>{value}</code>
    </div>
  );
}
