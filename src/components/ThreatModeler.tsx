import React, { useState } from 'react';
import { Shield, Download, Lock, ShieldAlert, ShieldCheck } from 'lucide-react';

interface QuestionState {
  toolUse: boolean;
  writeAccess: boolean;
  untrustedInput: boolean;
  customerFacing: boolean;
  piiPresence: boolean;
  humanInLoop: boolean;
}

interface Threat {
  id: string;
  name: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  isActive: boolean;
  vector: string;
  mitigation: string[];
}

export const ThreatModeler: React.FC = () => {
  const [state, setState] = useState<QuestionState>({
    toolUse: true,
    writeAccess: false,
    untrustedInput: true,
    customerFacing: true,
    piiPresence: false,
    humanInLoop: true,
  });

  const handleToggle = (key: keyof QuestionState) => {
    setState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Score calculation logic
  const calculateScore = (): number => {
    let score = 100;
    if (state.toolUse) score -= 10;
    if (state.writeAccess) score -= 20;
    if (state.untrustedInput) score -= 15;
    if (state.customerFacing) score -= 20;
    if (state.piiPresence) score -= 15;
    if (state.toolUse && state.writeAccess && !state.humanInLoop) score -= 20;
    if (state.customerFacing && state.untrustedInput) score -= 15;
    if (state.humanInLoop) score += 15;
    
    return Math.max(0, Math.min(100, score));
  };

  const score = calculateScore();

  const getGrade = (numScore: number): { grade: string; color: string } => {
    if (numScore >= 90) return { grade: 'A', color: 'var(--accent-green)' };
    if (numScore >= 80) return { grade: 'B', color: '#60a5fa' };
    if (numScore >= 70) return { grade: 'C', color: 'var(--accent-orange)' };
    if (numScore >= 60) return { grade: 'D', color: '#f59e0b' };
    return { grade: 'F', color: 'var(--accent-red)' };
  };

  const { grade, color: gradeColor } = getGrade(score);

  // Generate dynamic threats list
  const getThreats = (): Threat[] => {
    const list: Threat[] = [];

    // Threat 1: Prompt Injection
    const promptInjectionActive = state.customerFacing || state.untrustedInput;
    let piSeverity: 'Critical' | 'High' | 'Medium' | 'Low' = 'Medium';
    if (state.toolUse && state.writeAccess && state.untrustedInput) {
      piSeverity = 'Critical';
    } else if (state.customerFacing && state.untrustedInput) {
      piSeverity = 'High';
    }
    list.push({
      id: 'threat-pi',
      name: 'Direct & Indirect Prompt Injection',
      severity: piSeverity,
      isActive: promptInjectionActive,
      vector: 'Malicious system instructions injected via input parameters, API payloads, or third-party documentation overrides the primary LLM alignment.',
      mitigation: [
        'Enforce structural separation using XML tags (<user_input> payload </user_input>) in the prompt template.',
        'Validate inputs against length limits and deny execution if command keywords (e.g. "ignore", "system") are detected.',
        'Run an input classification pass using a lightweight security-tuned guardrail model.'
      ]
    });

    // Threat 2: Privilege Escalation
    const privEscalationActive = state.toolUse;
    let peSeverity: 'Critical' | 'High' | 'Medium' | 'Low' = 'Medium';
    if (state.writeAccess && !state.humanInLoop) {
      peSeverity = 'Critical';
    } else if (state.writeAccess) {
      peSeverity = 'High';
    }
    list.push({
      id: 'threat-pe',
      name: 'Privilege Escalation & Unauthorized Tool Executions',
      severity: peSeverity,
      isActive: privEscalationActive,
      vector: 'The model interprets a prompt injection to invoke tools it has access to (e.g., sending emails, modifying databases) beyond the caller\'s authority.',
      mitigation: [
        'Enforce user-session token validation directly inside the tool callback function, rather than trusting the LLM payload.',
        'Implement an asynchronous Slack/Console authorization gate (Human in the Loop) for all mutation actions.',
        'Adopt the Principle of Least Privilege: only equip agents with read-only tools unless write operations are validated.'
      ]
    });

    // Threat 3: Sensitive Data Leakage
    const dataLeakageActive = state.piiPresence;
    const dlSeverity = state.customerFacing ? 'High' : 'Medium';
    list.push({
      id: 'threat-dl',
      name: 'Sensitive PII or Proprietary Data Leakage',
      severity: dlSeverity,
      isActive: dataLeakageActive,
      vector: 'Retrieved RAG documents containing sensitive client identifiers or keys are populated in context windows and exposed in outputs.',
      mitigation: [
        'Apply automated Regex scrubbing of PII (emails, names, tokens) during documentation chunking ingestion.',
        'Implement metadata filters in vector query payloads matching the tenant ID of the authenticated user.',
        'Validate LLM outputs against a regex list of structured values (e.g., SSN, credit cards) before sending to UI.'
      ]
    });

    // Threat 4: Denial of Wallet / Resource Exhaustion
    const dosActive = state.toolUse || state.untrustedInput;
    const dosSeverity = state.toolUse && state.untrustedInput ? 'Medium' : 'Low';
    list.push({
      id: 'threat-dos',
      name: 'Agentic Loop Billing & Resource Denial of Service',
      severity: dosSeverity,
      isActive: dosActive,
      vector: 'Recursive search operations or circular document links trigger infinite loop queries, resulting in high cloud API usage fees.',
      mitigation: [
        'Impose a hard, application-level limit on sequential tool execution loops (e.g., maximum 5 turns).',
        'Set API quota budget alerts and run user session request-limiting schemas.',
        'Define strict query timeouts (e.g., abort requests taking over 30 seconds).'
      ]
    });

    return list;
  };

  const threats = getThreats();
  const activeThreatsCount = threats.filter(t => t.isActive).length;

  const handleExport = () => {
    const reportData = {
      timestamp: new Date().toISOString(),
      questionnaire_answers: state,
      evaluated_score: score,
      evaluated_grade: grade,
      threat_audits: threats.map(t => ({
        name: t.name,
        severity: t.severity,
        active: t.isActive,
        vulnerability_vector: t.vector,
        recommended_mitigations: t.mitigation
      }))
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `applied_ai_threat_report_${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontSize: '20px', color: 'var(--text-header)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={20} style={{ color: 'var(--accent-blue)' }} />
            Security Layer: Threat Modeler & Risk Auditor
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Perform automated risk assessment scans by defining system capabilities and verifying mitigation policies.
          </p>
        </div>
        
        <button className="secondary" onClick={handleExport} style={{ fontSize: '12px', padding: '8px 12px' }}>
          <Download size={14} />
          Export Security Report
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '24px' }}>
        
        {/* Left Column: Questionnaire controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div className="glass-panel" style={{ padding: '20px', background: 'rgba(255,255,255,0.01)' }}>
            <h4 style={{ fontSize: '12px', color: 'var(--text-header)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock size={13} /> Architecture Profile
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Tool Use Switch */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-header)', display: 'block' }}>Tool Use Enabled</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Has function-calling capabilities</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={state.toolUse}
                  onChange={() => handleToggle('toolUse')}
                  style={{ width: '36px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-blue)' }}
                />
              </div>

              {/* Write Access Switch */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-header)', display: 'block' }}>Database Write Access</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Tools modify database state or send API actions</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={state.writeAccess}
                  onChange={() => handleToggle('writeAccess')}
                  style={{ width: '36px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-blue)' }}
                />
              </div>

              {/* Untrusted Inputs Switch */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-header)', display: 'block' }}>Untrusted Input Sources</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Ingests user uploads, emails, or public URLs</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={state.untrustedInput}
                  onChange={() => handleToggle('untrustedInput')}
                  style={{ width: '36px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-blue)' }}
                />
              </div>

              {/* Customer Facing Switch */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-header)', display: 'block' }}>Public Customer Facing</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Accessed by external users directly</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={state.customerFacing}
                  onChange={() => handleToggle('customerFacing')}
                  style={{ width: '36px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-blue)' }}
                />
              </div>

              {/* PII Presence Switch */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-header)', display: 'block' }}>PII Data Exposure</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Processes sensitive personal information</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={state.piiPresence}
                  onChange={() => handleToggle('piiPresence')}
                  style={{ width: '36px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-blue)' }}
                />
              </div>

              {/* Human in loop Switch */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-header)', display: 'block' }}>Human-in-the-Loop</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Actions require human validation beforehand</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={state.humanInLoop}
                  onChange={() => handleToggle('humanInLoop')}
                  style={{ width: '36px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-blue)' }}
                />
              </div>

            </div>
          </div>
          
        </div>

        {/* Right Column: Scorecard audit and results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Score overview panel */}
          <div className="glass-panel" style={{ padding: '20px', background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Security Trust Score</span>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--text-header)', marginTop: '4px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                {score}<span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>/ 100</span>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px', display: 'block' }}>
                {activeThreatsCount} potential vectors identified.
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: `${gradeColor}15`, border: `2px solid ${gradeColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: gradeColor, fontFamily: 'var(--font-code)' }}>{grade}</span>
              </div>
              <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Security Grade</span>
            </div>
          </div>

          {/* Active audited threat lists */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '420px', overflowY: 'auto', paddingRight: '4px' }}>
            <span style={{ fontSize: '11.5px', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
              Security Audit Findings
            </span>

            {threats.map((threat) => {
              const badgeClass = 
                threat.severity === 'Critical' || threat.severity === 'High' ? 'red' : 
                threat.severity === 'Medium' ? 'orange' : 'blue';

              return (
                <div 
                  key={threat.id} 
                  className="glass-panel" 
                  style={{ 
                    padding: '16px', 
                    opacity: threat.isActive ? 1 : 0.45, 
                    borderLeft: `3px solid ${threat.isActive ? (threat.severity === 'Critical' || threat.severity === 'High' ? 'var(--accent-red)' : 'var(--accent-orange)') : 'var(--border-color)'}`,
                    transition: 'opacity 0.2s ease, border-left-color 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13.5px', fontWeight: '600', color: threat.isActive ? 'var(--text-header)' : 'var(--text-muted)' }}>
                      {threat.name}
                    </span>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <span className={`badge ${badgeClass}`} style={{ fontSize: '9px', padding: '1px 5px' }}>
                        {threat.severity}
                      </span>
                      {threat.isActive ? (
                        <ShieldAlert size={14} style={{ color: 'var(--accent-red)' }} />
                      ) : (
                        <ShieldCheck size={14} style={{ color: 'var(--text-muted)' }} />
                      )}
                    </div>
                  </div>

                  {threat.isActive ? (
                    <div>
                      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '12px' }}>
                        <strong>Vector:</strong> {threat.vector}
                      </p>

                      <div style={{ background: 'var(--bg-primary)', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--border-glass)' }}>
                        <span style={{ fontSize: '10.5px', color: 'var(--text-muted)', fontWeight: 'bold', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Required Mitigation Protocol
                        </span>
                        <ul style={{ paddingLeft: '16px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {threat.mitigation.map((mit, i) => (
                            <li key={i} style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                              {mit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <p style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                      System configurations satisfy current safety margins. Under no active risk vector threat.
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
};
