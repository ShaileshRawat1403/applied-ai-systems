import { useState } from 'react';
import { CheckCircle2, MessageSquare, AlertCircle, Edit } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SlackApprovalGate = () => {
  const [draftContent, setDraftContent] = useState<string>(
    `📢 **Planned System Update: Database Optimization**\n\nWe are deploying a standard database migration to optimize login speed and session security.\n\n⏱️ **When:** Saturday, June 20 at 3:00 AM GMT\n⚠️ **Impact:** Intermittent reload delays on the login portal for 15 minutes.\n\n*No manual action required. Contact support@company.com if you experience issues.*`
  );
  const [status, setStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleApprove = () => {
    setStatus('approved');
    confetti({
      particleCount: 120,
      spread: 80,
      colors: ['#00df89', '#0070f3', '#7928ca']
    });
  };

  const handleReject = () => {
    setStatus('rejected');
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      
      {/* Component Header */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', color: 'var(--text-header)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageSquare size={20} style={{ color: 'var(--accent-blue)' }} />
          Workflow Layer: Slack Human Approval Gate
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          Simulate a human review gate. Edit and sign off on AI content drafts before they post to production channels.
        </p>
      </div>

      {/* Mock Slack Workspace Container */}
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', background: '#030712', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', minHeight: '380px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.7)' }}>
        
        {/* Slack Sidebar */}
        <div style={{ background: '#0b0f19', borderRight: '1px solid rgba(255,255,255,0.04)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Workspace Channels
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <span style={{ cursor: 'pointer', padding: '4px 6px' }}># announcements</span>
              <span style={{ cursor: 'pointer', padding: '4px 6px' }}># general</span>
              <span style={{ cursor: 'pointer', fontWeight: '600', color: '#3b82f6', background: 'rgba(0,112,243,0.08)', padding: '6px 10px', borderRadius: '6px', display: 'inline-block' }}>
                # comms-approvals
              </span>
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Direct Messages
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 6px' }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--accent-green)', borderRadius: '50%' }}></span>
                alex.chen (You)
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 6px' }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--accent-green)', borderRadius: '50%' }}></span>
                ChangeComms App
              </span>
            </div>
          </div>
        </div>

        {/* Slack Workspace Panel */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', gap: '16px' }}>
          
          {status === 'pending' && (
            <div className="glass-panel" style={{ borderLeft: '4px solid var(--accent-purple)', background: 'rgba(121, 40, 202, 0.02)', padding: '20px', borderRadius: '8px' }}>
              
              {/* Draft Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ background: 'var(--accent-purple)', width: '22px', height: '22px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', color: 'white' }}>
                    AI
                  </div>
                  <span style={{ fontWeight: '600', fontSize: '13.5px' }}>ChangeComms App</span>
                  <span className="badge purple" style={{ fontSize: '9px', padding: '1px 5px' }}>Draft Node</span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Awaiting review gate signoff</span>
              </div>

              <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--text-header)' }}>
                ⚡ Action Required: AI System Change Approval
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                **Submitted By:** GitHub Action merges | **Risk Score:** Low-Friction
              </p>

              {/* Textarea Editor Option */}
              {isEditing ? (
                <textarea
                  rows={6}
                  style={{ width: '100%', padding: '12px', fontSize: '13.5px', background: '#010204', border: '1px solid var(--accent-blue)', color: '#e2e8f0', fontFamily: 'var(--font-body)', borderRadius: '6px', marginBottom: '14px', lineHeight: '1.5' }}
                  value={draftContent}
                  onChange={(e) => setDraftContent(e.target.value)}
                />
              ) : (
                <div style={{ padding: '14px', background: '#010204', borderRadius: '6px', fontSize: '13.5px', color: '#e2e8f0', whiteSpace: 'pre-line', border: '1px solid rgba(255,255,255,0.03)', marginBottom: '14px', lineHeight: '1.5' }}>
                  {draftContent}
                </div>
              )}

              {/* Actions Grid */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  className="primary success" 
                  onClick={handleApprove}
                  style={{ fontSize: '13px', padding: '8px 14px' }}
                >
                  Approve & Post
                </button>
                
                <button 
                  className="secondary" 
                  onClick={() => setIsEditing(!isEditing)}
                  style={{ fontSize: '13px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <Edit size={12} />
                  {isEditing ? 'Save Edit' : 'Edit Draft'}
                </button>

                <button 
                  className="secondary danger" 
                  onClick={handleReject}
                  style={{ fontSize: '13px', padding: '8px 14px' }}
                >
                  Reject & Regenerate
                </button>
              </div>
            </div>
          )}

          {status === 'approved' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', textAlign: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0,223,137,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={32} style={{ color: 'var(--accent-green)' }} />
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Change Notice Approved & Published!</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '380px', lineHeight: '1.5' }}>
                Draft has been successfully posted to **#announcements** channel and archived in Confluence database logs.
              </p>
              <button className="secondary" onClick={() => setStatus('pending')} style={{ fontSize: '12px', padding: '6px 12px' }}>
                Reset Simulation
              </button>
            </div>
          )}

          {status === 'rejected' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', textAlign: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,51,102,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertCircle size={32} style={{ color: 'var(--accent-red)' }} />
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--accent-red)' }}>Draft Rejected</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '380px', lineHeight: '1.5' }}>
                The drafting pipeline has halted. The model was sent feedback to re-draft: **"Incorrect formatting or schema details mismatch."**
              </p>
              <button className="secondary" onClick={() => setStatus('pending')} style={{ fontSize: '12px', padding: '6px 12px' }}>
                Reset Simulation
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
