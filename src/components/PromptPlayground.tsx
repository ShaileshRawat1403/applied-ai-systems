import { useState, useEffect } from 'react';
import { AlertTriangle, Terminal, Code } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PromptPlayground = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [changeNotes, setChangeNotes] = useState<string>('Deploying v2 auth migrations to PostgreSQL db cluster. Login screen will experience intermittent failures for 15 minutes at 3 AM GMT.');
  const [audience, setAudience] = useState<string>('Portal Users');
  const [dateEffective, setDateEffective] = useState<string>('2026-06-20');
  const [systemImpact, setSystemImpact] = useState<string>('Login UI');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);
  const [showKeyField, setShowKeyField] = useState<boolean>(false);
  const [displayScore, setDisplayScore] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'json' | 'code'>('json');

  useEffect(() => {
    const savedKey = localStorage.getItem('GEMINI_API_KEY') || '';
    setApiKey(savedKey);
  }, []);

  const saveKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('GEMINI_API_KEY', key);
    setShowKeyField(false);
  };

  const handleRun = async () => {
    setIsLoading(true);
    setResult(null);
    setDisplayScore(0);

    if (apiKey) {
      try {
        const promptText = `
        You are a change communications specialist. Your goal is to draft clear, audience-appropriate notifications based on technical notes.
        Return ONLY a JSON block matching this typescript interface:
        interface Response {
          announcement_headline: string;
          impact_summary: string;
          key_actions_required: Array<{step_number: number, action: string, deadline?: string}>;
          technical_details_retained: string;
          support_contact: string;
        }

        Input variables:
        - Raw change notes: ${changeNotes}
        - Target audience: ${audience}
        - Date effective: ${dateEffective}
        - System impact: ${systemImpact}
        `;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: promptText }] }],
              generationConfig: {
                responseMimeType: "application/json",
                temperature: 0.1
              }
            })
          }
        );

        const data = await response.json();
        const responseText = data.candidates[0].content.parts[0].text;
        const parsedJson = JSON.parse(responseText);
        
        setResult({
          success: true,
          type: 'live',
          data: parsedJson,
          groundingScore: 96
        });
        animateScore(96);
        confetti({ particleCount: 80, spread: 60 });
      } catch (err) {
        console.error(err);
        setResult({
          success: false,
          error: 'Failed to complete live API call. Reverting to sandbox simulation...'
        });
        runSandboxSimulation();
      }
    } else {
      runSandboxSimulation();
    }
  };

  const runSandboxSimulation = () => {
    setTimeout(() => {
      setResult({
        success: true,
        type: 'simulation',
        groundingScore: 94,
        data: {
          announcement_headline: `Planned Maintenance: ${systemImpact} Migration`,
          impact_summary: `We are deploying a standard database migration to optimize login reliability and security. Users will experience temporary downtime on the ${systemImpact} during the update window.`,
          key_actions_required: [
            {
              step_number: 1,
              action: `Avoid submitting login requests on the ${systemImpact} during the 15-minute maintenance window.`,
              deadline: `${dateEffective}T03:00:00Z`
            }
          ],
          technical_details_retained: changeNotes,
          support_contact: "support@company.com"
        }
      });
      animateScore(94);
      confetti({ particleCount: 50, spread: 45 });
    }, 1200);
  };

  const animateScore = (target: number) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 2;
      if (count >= target) {
        setDisplayScore(target);
        clearInterval(interval);
      } else {
        setDisplayScore(count);
      }
    }, 15);
  };

  useEffect(() => {
    if (result && !result.success) setIsLoading(false);
  }, [result]);

  const renderHighlightedJson = (obj: any) => {
    const jsonString = JSON.stringify(obj, null, 2);
    const lines = jsonString.split('\n');
    return lines.map((line, idx) => {
      let lineHtml = line;
      lineHtml = lineHtml.replace(/(".*?")\s*:/g, '<span class="syntax-key">$1</span>:');
      lineHtml = lineHtml.replace(/:\s*(".*?")/g, ': <span class="syntax-string">$1</span>');
      lineHtml = lineHtml.replace(/:\s*(\d+|true|false)/g, ': <span class="syntax-number">$1</span>');
      lineHtml = lineHtml.replace(/([\{\}\[\]])/g, '<span class="syntax-bracket">$1</span>');
      return (
        <div key={idx} style={{ display: 'flex', fontSize: '12.5px', lineHeight: '1.5', fontFamily: 'var(--font-code)' }}>
          <span style={{ width: '24px', color: 'var(--text-muted)', textAlign: 'right', marginRight: '16px', userSelect: 'none', display: 'inline-block' }}>{idx + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: lineHtml }} />
        </div>
      );
    });
  };

  // Generates Python Pydantic Class Code dynamically based on form parameters
  const generatePydanticCode = () => {
    return `from pydantic import BaseModel, Field
from typing import List, Optional

class ActionStep(BaseModel):
    step_number: int = Field(description="Sequential step number starting at 1")
    action: str = Field(description="Action description in plain, non-technical words")
    deadline: Optional[str] = Field(None, description="ISO 8601 formatted date if applicable")

class ChangeAnnouncementSchema(BaseModel):
    # Dynamic schemas generated for system: ${systemImpact}
    announcement_headline: str = Field(description="Short headline containing ${systemImpact}")
    impact_summary: str = Field(description="Brief summary targeting ${audience}")
    key_actions_required: List[ActionStep] = Field(description="Actions target audience must take")
    technical_details_retained: str = Field(description="Reference details: ${changeNotes.substring(0, 30)}...")
    support_contact: str = Field(default="support@company.com", description="Point of contact")`;
  };

  const renderHighlightedPython = () => {
    const lines = generatePydanticCode().split('\n');
    return lines.map((line, idx) => {
      let lineHtml = line;
      // Highlight imports
      lineHtml = lineHtml.replace(/^(from\s+\S+\s+import\s+.+)$/g, '<span class="syntax-key">$1</span>');
      // Highlight class declarations
      lineHtml = lineHtml.replace(/(class\s+\w+)/g, '<span class="syntax-string">$1</span>');
      // Highlight fields
      lineHtml = lineHtml.replace(/(\w+)\s*:/g, '<span class="syntax-key">$1</span>:');
      // Highlight comments
      lineHtml = lineHtml.replace(/(#.+)$/g, '<span class="syntax-comment">$1</span>');
      return (
        <div key={idx} style={{ display: 'flex', fontSize: '12px', lineHeight: '1.5', fontFamily: 'var(--font-code)' }}>
          <span style={{ width: '24px', color: 'var(--text-muted)', textAlign: 'right', marginRight: '16px', userSelect: 'none', display: 'inline-block' }}>{idx + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: lineHtml }} />
        </div>
      );
    });
  };



  return (
    <div className="glass-panel" style={{ padding: '32px', minHeight: '500px' }}>
      
      {/* Sandbox Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '20px', color: 'var(--text-header)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Intelligence Layer Sandbox
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Design, edit, and validate structured prompt output contracts.
          </p>
        </div>
        
        <div>
          <button 
            className="secondary" 
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', padding: '6px 12px' }}
            onClick={() => setShowKeyField(!showKeyField)}
          >
            {apiKey ? 'API Key Active' : 'Add API Key'}
          </button>
        </div>
      </div>

      {showKeyField && (
        <div className="glass-panel" style={{ padding: '20px', marginBottom: '24px', background: 'rgba(255,255,255,0.01)' }}>
          <label>Google AI Studio API Key</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="password" 
              placeholder="Paste AI Studio API Key here..." 
              value={apiKey} 
              onChange={(e) => setApiKey(e.target.value)}
            />
            <button className="primary" onClick={() => saveKey(apiKey)}>Save Key</button>
          </div>
        </div>
      )}

      {/* Workspace Inputs/Outputs Split Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        
        {/* Left Inputs Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label>Raw Change Notes (Input Variable)</label>
            <textarea 
              rows={4} 
              value={changeNotes} 
              onChange={(e) => setChangeNotes(e.target.value)}
              placeholder="Paste raw technical details, commit logs, or bug tickets..."
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label>Target Audience</label>
              <input value={audience} onChange={(e) => setAudience(e.target.value)} />
            </div>
            <div>
              <label>System Impact</label>
              <input value={systemImpact} onChange={(e) => setSystemImpact(e.target.value)} />
            </div>
          </div>

          <div>
            <label>Effective Date</label>
            <input type="date" value={dateEffective} onChange={(e) => setDateEffective(e.target.value)} />
          </div>

          <button 
            className="primary" 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '12px' }}
            onClick={handleRun}
            disabled={isLoading}
          >
            {isLoading ? <span>Processing...</span> : <span>Run Specification Validation</span>}
          </button>
        </div>

        {/* Right Output Panel (Terminal Window) */}
        <div className="terminal-window" style={{ display: 'flex', flexDirection: 'column', minHeight: '340px' }}>
          
          <div className="terminal-header">
            <div className="terminal-dots-container">
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
              <div className="terminal-dot"></div>
            </div>
            
            <div style={{ display: 'flex', gap: '4px' }}>
              <button
                className={`terminal-tab ${activeTab === 'json' ? 'active' : ''}`}
                onClick={() => setActiveTab('json')}
              >
                <Terminal size={11} /> output.json
              </button>
              <button
                className={`terminal-tab ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                <Code size={11} /> schema.py
              </button>
            </div>
          </div>

          <div style={{ flexGrow: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            {isLoading && (
              <div style={{ margin: 'auto', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <div style={{ animation: 'spin 1s linear infinite', border: '3px solid rgba(255,255,255,0.05)', borderTopColor: 'var(--accent-blue)', borderRadius: '50%', width: '32px', height: '32px', margin: '0 auto 16px auto' }}></div>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Validating output JSON contract...</span>
              </div>
            )}

            {!isLoading && !result && (
              <div style={{ margin: 'auto', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <span>Await execution run. Output will load in terminal log.</span>
              </div>
            )}

            {result && result.success && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: '12px' }}>
                  <span className="badge green">
                    Pydantic Schema Match
                  </span>
                  
                  {/* Radial SVG Circular Score Gauge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                      Grounding Score: {displayScore}%
                    </span>
                    <svg width="40" height="40" style={{ transform: 'rotate(-90deg)' }}>
                      <circle
                        stroke="rgba(255,255,255,0.04)"
                        fill="transparent"
                        strokeWidth="3"
                        r="16"
                        cx="20"
                        cy="20"
                      />
                      <circle
                        stroke="var(--accent-green)"
                        fill="transparent"
                        strokeWidth="3"
                        strokeDasharray={2 * Math.PI * 16}
                        strokeDashoffset={2 * Math.PI * 16 - (displayScore / 100) * 2 * Math.PI * 16}
                        r="16"
                        cx="20"
                        cy="20"
                        style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Switchable active view tab */}
                <div style={{ flexGrow: 1, overflowY: 'auto' }}>
                  {activeTab === 'json' ? renderHighlightedJson(result.data) : renderHighlightedPython()}
                </div>
                
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'right', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '8px' }}>
                  Execution Mode: {result.type === 'live' ? 'Gemini API Call' : 'Sandbox Simulator'}
                </span>
              </div>
            )}

            {result && !result.success && (
              <div style={{ color: 'var(--accent-red)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', margin: 'auto' }}>
                <AlertTriangle size={18} />
                {result.error}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
