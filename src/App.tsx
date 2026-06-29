import { useState, useEffect } from 'react';
import { BookOpen, Layers, FileText, Menu, HelpCircle, Terminal, Compass, GraduationCap, CheckCircle, Sun, Moon } from 'lucide-react';
import { modules, caseStudyMarkdown } from './lessons/content.ts';
import { MarkdownRenderer } from './components/MarkdownRenderer.tsx';
import { PromptPlayground } from './components/PromptPlayground.tsx';
import { EvaluationDashboard } from './components/EvaluationDashboard.tsx';
import { SlackApprovalGate } from './components/SlackApprovalGate.tsx';
import { RagVisualizer } from './components/RagVisualizer.tsx';
import { ThreatModeler } from './components/ThreatModeler.tsx';
import { CapstoneCatalog } from './components/CapstoneCatalog.tsx';
import { EcosystemProof } from './components/EcosystemProof.tsx';
import { WebsiteOpsPost } from './components/WebsiteOpsPost.tsx';

type PageType = 'lesson' | 'playground' | 'evals' | 'slack' | 'case_study' | 'ecosystem_proof' | 'websiteops_post' | 'overview' | 'checklist' | 'preview' | 'ui_guide' | 'rag_visualizer' | 'threat_modeler' | 'capstones';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('overview');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('m0-welcome');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  
  // Track completed lessons to display in progress meter (Module 0 & 1 have 8 lessons + 2 labs = 10 items)
  const [completedLessons, setCompletedLessons] = useState<string[]>(['m0-welcome']);

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const getLessonMarkdown = () => {
    for (const m of modules) {
      const lesson = m.lessons.find(l => l.id === selectedLessonId);
      if (lesson) return lesson.markdown;
    }
    return '';
  };

  const toggleLessonComplete = (lessonId: string) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const getStartHereMarkdown = (page: PageType) => {
    switch (page) {
      case 'overview':
        return `# Course Overview\n\nWelcome to **Applied AI Systems: From Prompt to Production**. This application serves as your interactive textbook, template repository, and laboratory playground.\n\n### The Signature Framework\n\nThe course revolves around the **Five-Layer Applied AI Systems Model**, helping you analyze tasks from business context down to operational traces.\n\n### What You Will Build\n\nYou will scope and architect a custom corporate AI assistant pilot from scratch. To see an expert-level benchmark, click on **Change Comms Workflow** in the Case Studies sidebar.\n\nUse the left sidebar navigation nodes to read lessons or trigger live execution labs!`;
      case 'checklist':
        return `# Setup Checklist\n\nBefore you start, complete this workspace verification:\n\n* \`[x]\` Git initialized locally.\n* \`[ ]\` Workspace directory matches repository architecture.\n* \`[ ]\` Markdown editor configured with Mermaid rendering.\n* \`[ ]\` Google AI Studio API Key initialized (optional).`;
      case 'preview':
        return `# Capstone Preview: AI Workflow Pilot Pack\n\nYour final pilot package compiles the templates you complete during the course modules:\n\n1. **Opportunity Brief (Module 2)**\n2. **Prompt Specification (Module 3)**\n3. **RAG Design (Module 4)**\n4. **Tool Permission Map (Module 5)**\n5. **Agent Workflow Canvas (Module 6)**\n6. **Evaluation Harness (Module 7)**\n7. **Governance Pack (Module 8)**\n8. **ROI Snapshot & Demo Script (Module 9)**`;
      case 'ui_guide':
        return `# GitBook UI/UX Guide\n\nThis guide outlines formatting rules for the course owner to construct clean typography structures, color-coded callouts, and visually distinct Mermaid flowcharts in GitBook.`;
      default:
        return '';
    }
  };

  const totalLessonsCount = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const progressPercent = Math.round((completedLessons.length / totalLessonsCount) * 100);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: sidebarOpen ? '280px 1fr' : '1fr', minHeight: '100vh', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', background: 'var(--bg-primary)' }}>
      
      {/* Sidebar Navigation */}
      {sidebarOpen && (
        <div style={{ background: 'var(--bg-secondary)', borderRight: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto', position: 'sticky', top: 0 }}>
          
          {/* Sidebar Header */}
          <div style={{ padding: '24px 20px', borderBottom: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0, 112, 243, 0.3)' }}>
              <Layers style={{ color: '#ffffff' }} size={16} />
            </div>
            <div>
              <h2 style={{ fontSize: '15px', color: 'var(--text-header)', fontWeight: 'bold', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                Applied AI Systems
              </h2>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '500' }}>From Prompt to Production</span>
            </div>
          </div>

          {/* Nav Links Container */}
          <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '22px', flexGrow: 1 }}>
            
            {/* Syllabus Progress Meter */}
            <div className="glass-panel" style={{ padding: '12px 14px', background: 'var(--bg-inner)', border: '1px solid var(--border-glass)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '8px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <GraduationCap size={12} /> Syllabus Progress
                </span>
                <span>{progressPercent}%</span>
              </div>
              <div style={{ height: '4px', background: 'var(--border-glass)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${progressPercent}%`, background: 'linear-gradient(90deg, var(--accent-blue) 0%, var(--accent-green) 100%)', transition: 'width 0.5s ease' }}></div>
              </div>
            </div>

            {/* Start Here Section */}
            <div>
              <h4 style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Compass size={12} /> Start Here
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '13px' }}>
                <div 
                  onClick={() => setCurrentPage('overview')}
                  className={`sidebar-item ${currentPage === 'overview' ? 'active' : ''}`}
                >
                  Course Overview
                </div>
                <div 
                  onClick={() => setCurrentPage('checklist')}
                  className={`sidebar-item ${currentPage === 'checklist' ? 'active' : ''}`}
                >
                  Setup Checklist
                </div>
                <div 
                  onClick={() => setCurrentPage('preview')}
                  className={`sidebar-item ${currentPage === 'preview' ? 'active' : ''}`}
                >
                  Capstone Preview
                </div>
                <div 
                  onClick={() => setCurrentPage('ui_guide')}
                  className={`sidebar-item ${currentPage === 'ui_guide' ? 'active' : ''}`}
                >
                  GitBook UI/UX Guide
                </div>
              </div>
            </div>

            {/* Modules List */}
            {modules.map((m) => (
              <div key={m.id}>
                <h4 style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <BookOpen size={12} /> {m.title.split(':')[0]}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '13px' }}>
                  {m.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      onClick={() => {
                        setCurrentPage('lesson');
                        setSelectedLessonId(lesson.id);
                      }}
                      className={`sidebar-item ${currentPage === 'lesson' && selectedLessonId === lesson.id ? 'active' : ''}`}
                      style={{ justifyContent: 'space-between' }}
                    >
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{lesson.title}</span>
                      {completedLessons.includes(lesson.id) && (
                        <CheckCircle size={12} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Interactive Laboratories */}
            <div>
              <h4 style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Terminal size={12} /> Interactive Labs
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '13px' }}>
                <div 
                  onClick={() => setCurrentPage('playground')}
                  className={`sidebar-item ${currentPage === 'playground' ? 'active' : ''}`}
                >
                  Prompt Spec Validator
                </div>
                <div 
                  onClick={() => setCurrentPage('rag_visualizer')}
                  className={`sidebar-item ${currentPage === 'rag_visualizer' ? 'active' : ''}`}
                >
                  RAG Chunking Visualizer
                </div>
                <div 
                  onClick={() => setCurrentPage('evals')}
                  className={`sidebar-item ${currentPage === 'evals' ? 'active' : ''}`}
                >
                  Eval Harness Suite
                </div>
                <div 
                  onClick={() => setCurrentPage('threat_modeler')}
                  className={`sidebar-item ${currentPage === 'threat_modeler' ? 'active' : ''}`}
                >
                  Security Threat Modeler
                </div>
                <div 
                  onClick={() => setCurrentPage('slack')}
                  className={`sidebar-item ${currentPage === 'slack' ? 'active' : ''}`}
                >
                  Slack Approval Gate
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div>
              <h4 style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={12} /> Case Studies
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '13px' }}>
                <div 
                  onClick={() => setCurrentPage('ecosystem_proof')}
                  className={`sidebar-item ${currentPage === 'ecosystem_proof' ? 'active' : ''}`}
                >
                  Ecosystem Proof
                </div>
                <div 
                  onClick={() => setCurrentPage('websiteops_post')}
                  className={`sidebar-item ${currentPage === 'websiteops_post' ? 'active' : ''}`}
                >
                  WebsiteOps Post
                </div>
                <div 
                  onClick={() => setCurrentPage('case_study')}
                  className={`sidebar-item ${currentPage === 'case_study' ? 'active' : ''}`}
                >
                  Change Comms Workflow
                </div>
                <div 
                  onClick={() => setCurrentPage('capstones')}
                  className={`sidebar-item ${currentPage === 'capstones' ? 'active' : ''}`}
                >
                  Capstone Projects
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Main Workspace Frame */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto' }}>
        
        <div style={{ padding: '16px 40px', borderBottom: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-glass)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 100 }}>
          <button 
            className="secondary" 
            style={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={16} />
          </button>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <span className="badge blue" style={{ fontSize: '10px' }}>Release V1.0-Live</span>
            <button 
              className="secondary" 
              style={{ padding: '6px', borderRadius: '6px', background: 'transparent', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px' }}
              onClick={toggleTheme}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
            </button>
            <HelpCircle size={16} style={{ cursor: 'pointer' }} />
          </div>
        </div>

        {/* Workspace Display Area */}
        <div style={{ flexGrow: 1, padding: '40px 60px 80px 60px', maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
          
          {currentPage === 'lesson' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div className="glass-panel" style={{ padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                  <button 
                    className={completedLessons.includes(selectedLessonId) ? 'secondary' : 'primary'}
                    onClick={() => toggleLessonComplete(selectedLessonId)}
                    style={{ fontSize: '12px', padding: '6px 14px' }}
                  >
                    <CheckCircle size={14} />
                    {completedLessons.includes(selectedLessonId) ? 'Mark Incomplete' : 'Mark Lesson Complete'}
                  </button>
                </div>
                <MarkdownRenderer content={getLessonMarkdown()} />
              </div>
              
              {/* Embed laboratory playground dynamically under lab pages! */}
              {selectedLessonId === 'm0-lab' && (
                <div style={{ marginTop: '20px' }}>
                  <PromptPlayground />
                </div>
              )}
              {selectedLessonId === 'm1-lab' && (
                <div style={{ marginTop: '20px' }}>
                  <EvaluationDashboard />
                </div>
              )}
            </div>
          )}

          {(currentPage === 'overview' || currentPage === 'checklist' || currentPage === 'preview' || currentPage === 'ui_guide') && (
            <div className="glass-panel" style={{ padding: '40px' }}>
              <MarkdownRenderer content={getStartHereMarkdown(currentPage)} />
            </div>
          )}

          {currentPage === 'case_study' && (
            <div className="glass-panel" style={{ padding: '40px' }}>
              <MarkdownRenderer content={caseStudyMarkdown} />
            </div>
          )}

          {currentPage === 'ecosystem_proof' && <EcosystemProof />}
          {currentPage === 'websiteops_post' && <WebsiteOpsPost />}
          {currentPage === 'playground' && <PromptPlayground />}
          {currentPage === 'rag_visualizer' && <RagVisualizer />}
          {currentPage === 'evals' && <EvaluationDashboard />}
          {currentPage === 'threat_modeler' && <ThreatModeler />}
          {currentPage === 'slack' && <SlackApprovalGate />}
          {currentPage === 'capstones' && <CapstoneCatalog />}

        </div>

      </div>

    </div>
  );
}
