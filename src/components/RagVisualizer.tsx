import React, { useState } from 'react';
import { Database, Sliders } from 'lucide-react';

interface Chunk {
  id: number;
  text: string;
  tokens: number;
  metadata: {
    source: string;
    index: number;
    category: string;
  };
}

export const RagVisualizer: React.FC = () => {
  const [sourceText, setSourceText] = useState<string>(
    `Authentication service runbook. Under heavy load, the database connections might time out. If error code 104 is returned in the API log, verify the PostgreSQL session pool limit. You can reset the session cache in the administrative console by clicking on Server Actions -> Reset Cache. This is a secure operation that does not lose active session tokens.`
  );
  const [chunkSize, setChunkSize] = useState<number>(120);
  const [overlap, setOverlap] = useState<number>(30);
  const [sourceCategory, setSourceCategory] = useState<string>('authentication');

  // Simple client-side RAG chunking algorithm simulator
  const generateChunks = (): Chunk[] => {
    const text = sourceText.trim();
    if (!text) return [];

    const words = text.split(/\s+/);
    const chunks: Chunk[] = [];
    
    let currentWordIdx = 0;
    let chunkCount = 1;

    // Word count based chunking simulation with overlap
    while (currentWordIdx < words.length) {
      // Get sub-array of words for this chunk
      const wordLimit = Math.min(currentWordIdx + Math.round(chunkSize / 6), words.length); // Assume avg 6 chars per token/word
      const chunkWords = words.slice(currentWordIdx, wordLimit);
      const chunkText = chunkWords.join(' ');
      
      chunks.push({
        id: chunkCount,
        text: chunkText,
        tokens: Math.round(chunkText.length / 4.2), // Standard average token calculation
        metadata: {
          source: 'runbooks/auth_triage.md',
          index: chunkCount,
          category: sourceCategory
        }
      });

      // Calculate step size based on overlap offset
      const step = Math.max(1, Math.round(chunkSize / 6) - Math.round(overlap / 6));
      currentWordIdx += step;
      chunkCount += 1;

      // Escape loop if we have reached the end of the text
      if (wordLimit === words.length) {
        break;
      }
    }

    return chunks;
  };

  const chunksList = generateChunks();

  return (
    <div className="glass-panel" style={{ padding: '32px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', color: 'var(--text-header)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Database size={20} style={{ color: 'var(--accent-blue)' }} />
          Knowledge Layer: RAG Ingestion & Chunking Visualizer
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          Simulate document chunking sizes, overlap properties, and metadata injection schemas.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '24px' }}>
        
        {/* Left Inputs Control Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="glass-panel" style={{ padding: '16px', background: 'rgba(255,255,255,0.01)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sliders size={14} /> Ingestion Settings
            </h4>

            <div>
              <label>Source Category Metadata</label>
              <input value={sourceCategory} onChange={(e) => setSourceCategory(e.target.value)} />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '6px' }}>
                <span>CHUNK SIZE (Tokens)</span>
                <span>{chunkSize} tokens</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="500" 
                step="10"
                value={chunkSize} 
                onChange={(e) => setChunkSize(Number(e.target.value))}
                style={{ cursor: 'pointer', height: '4px', background: 'var(--border-color)', padding: 0 }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '6px' }}>
                <span>OVERLAP SIZE (Tokens)</span>
                <span>{overlap} tokens</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="150" 
                step="5"
                value={overlap} 
                onChange={(e) => setOverlap(Number(e.target.value))}
                style={{ cursor: 'pointer', height: '4px', background: 'var(--border-color)', padding: 0 }}
              />
            </div>
          </div>

          <div>
            <label>Source Document Text</label>
            <textarea 
              rows={6} 
              value={sourceText} 
              onChange={(e) => setSourceText(e.target.value)}
              placeholder="Paste raw documentation text here..."
            />
          </div>
        </div>

        {/* Right Chunks Visualizer Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label>Resulting Indexed Chunks</label>
            <span className="badge blue" style={{ fontSize: '10px' }}>
              Total Nodes: {chunksList.length}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '460px', overflowY: 'auto', paddingRight: '4px' }}>
            {chunksList.map((chunk) => (
              <div 
                key={chunk.id} 
                className="glass-panel" 
                style={{ padding: '16px', background: 'var(--bg-primary)', border: '1px solid var(--border-glass)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '8px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11.5px', fontFamily: 'var(--font-code)', color: 'var(--text-muted)' }}>
                    NODE_ID: {chunk.id.toString().padStart(2, '0')}
                  </span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span className="badge blue" style={{ fontSize: '9px', padding: '1px 5px' }}>
                      {chunk.tokens} tokens
                    </span>
                    <span className="badge purple" style={{ fontSize: '9px', padding: '1px 5px' }}>
                      cat: {chunk.metadata.category}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', fontFamily: 'var(--font-body)' }}>
                  "{chunk.text}"
                </p>

                <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px dashed rgba(255,255,255,0.03)', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>
                  <span>source: {chunk.metadata.source}</span>
                  <span>index: {chunk.metadata.index}</span>
                </div>
              </div>
            ))}

            {chunksList.length === 0 && (
              <div style={{ margin: 'auto', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', paddingTop: '40px' }}>
                No text to split. Paste text in source input.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
