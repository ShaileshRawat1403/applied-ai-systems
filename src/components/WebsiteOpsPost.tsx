import { CheckCircle, FileText, Hand, ShieldCheck } from 'lucide-react';

const proof = {
  runId: '0fb975d6-b309-4d68-98fc-d9716193a6ca',
  workflow: 'websiteops.website_content_publish.v0',
  reviewer: 'websiteops-operator',
  ledgerEvents: 51,
};

export function WebsiteOpsPost() {
  return (
    <article className="glass-panel" style={{ padding: '38px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <header style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <span className="badge blue" style={{ width: 'fit-content' }}>
          WebsiteOps post
        </span>
        <h1 style={{ fontSize: '32px' }}>How this site now proves agentic execution with HITL</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, maxWidth: '760px' }}>
          Sans Serif Systems is being built around a simple operating belief: model capabilities will keep changing,
          but control, evidence, permission, and human authority should remain stable. This website update is a small
          proof of that principle.
        </p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px' }}>
        <PostCard
          icon={FileText}
          title="The agent drafted"
          body="Flowright WebsiteOps produced a publish packet from a declared site goal, target pages, source material, SEO requirements, and publish constraints."
        />
        <PostCard
          icon={ShieldCheck}
          title="The kernel verified"
          body="The run recorded validation evidence and a verified ledger before the content was allowed to move forward."
        />
        <PostCard
          icon={Hand}
          title="A human approved"
          body="The workflow paused at human_review and resumed only after an operator approved the handoff."
        />
      </section>

      <section>
        <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>What changed</h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          <Step title="WebsiteOps drafted the packet" body="The content was prepared through `websiteops.website_content_publish.v0`, not written directly into the site as an uncontrolled publish action." />
          <Step title="The page was implemented after review" body="The public site now includes an Ecosystem Proof page and this post to explain the operating pattern." />
          <Step title="Promotion stayed blocked" body="Flowright denied autonomous promotion because WebsiteOps exports artifacts; it does not publish to the website repository by itself." />
        </div>
      </section>

      <section style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px', background: 'var(--bg-inner)' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>Evidence snapshot</h2>
        <div style={{ display: 'grid', gap: '10px', color: 'var(--text-secondary)', fontSize: '13px' }}>
          <EvidenceLine label="Run ID" value={proof.runId} />
          <EvidenceLine label="Workflow" value={proof.workflow} />
          <EvidenceLine label="Reviewer" value={proof.reviewer} />
          <EvidenceLine label="Ledger events" value={String(proof.ledgerEvents)} />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>Why this matters</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          The point is not that an agent can write a blog post. The point is that an agent can participate in a governed
          publishing loop: intake, draft, verify, pause, export, and learn from feedback. The website becomes an operating
          surface for the ecosystem, not just a place to describe it.
        </p>
      </section>
    </article>
  );
}

function PostCard({ icon: Icon, title, body }: { icon: typeof FileText; title: string; body: string }) {
  return (
    <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '18px', background: 'var(--bg-inner)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <Icon size={18} color="var(--accent-blue)" />
        <h3 style={{ fontSize: '15px' }}>{title}</h3>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

function Step({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '10px', alignItems: 'start' }}>
      <CheckCircle size={18} color="var(--accent-green)" style={{ marginTop: '2px' }} />
      <div>
        <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6 }}>{body}</p>
      </div>
    </div>
  );
}

function EvidenceLine({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '10px', alignItems: 'start' }}>
      <span style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '11px' }}>{label}</span>
      <code style={{ overflowWrap: 'anywhere' }}>{value}</code>
    </div>
  );
}
