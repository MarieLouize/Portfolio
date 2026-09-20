import React, { useState, useEffect } from 'react';
import { DocItem, AuditReport } from './types/portfolio';
import { fetchDocsCatalog, fetchDoc, fetchAuditReport } from './api/client';
import { Topbar } from './components/Topbar';
import { TreeExplorer } from './components/TreeExplorer';
import { DocumentViewer } from './components/DocumentViewer';
import { ProfileHome } from './components/ProfileHome';
import { AuditModal } from './components/AuditModal';
import './styles/design-tokens.css';

export const App: React.FC = () => {
  const [docs, setDocs] = useState<DocItem[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DocItem | null>(null);
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Mobile drawer state
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Audit Suite State
  const [isAuditOpen, setIsAuditOpen] = useState<boolean>(false);
  const [auditReport, setAuditReport] = useState<AuditReport | null>(null);
  const [auditLoading, setAuditLoading] = useState<boolean>(false);

  // Theme State
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
  };

  // Initial load
  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        const catalog = await fetchDocsCatalog();
        setDocs(catalog);

        // Check hash or load profile.md
        const hash = window.location.hash ? window.location.hash.substring(1) : 'profile.md';
        const initial = catalog.find(d => d.path === hash) || catalog[0];
        if (initial) {
          await loadDocument(initial.path, catalog);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to initialize portfolio vault');
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const loadDocument = async (path: string, catalogList?: DocItem[]) => {
    const list = catalogList || docs;
    const target = list.find(d => d.path === path) || list[0];
    if (!target) return;

    setSelectedDoc(target);
    window.location.hash = target.path;

    // Scroll to top when changing document
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const payload = await fetchDoc(target.path);
      setMarkdown(payload.markdown);
    } catch (err: any) {
      setMarkdown(`## Error Loading Document\n\n${err.message}`);
    }
  };

  const handleOpenAudit = async () => {
    setIsAuditOpen(true);
    if (!auditReport) {
      await runAuditCheck();
    }
  };

  const runAuditCheck = async () => {
    try {
      setAuditLoading(true);
      const rep = await fetchAuditReport();
      setAuditReport(rep);
    } catch (err) {
      console.error('Failed to run audit:', err);
    } finally {
      setAuditLoading(false);
    }
  };

  // Pager helpers
  const currentIndex = docs.findIndex(d => d.id === selectedDoc?.id);
  const prevDoc = currentIndex > 0 ? docs[currentIndex - 1] : null;
  const nextDoc = currentIndex < docs.length - 1 ? docs[currentIndex + 1] : null;

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'var(--bg)',
        fontFamily: 'var(--font-pixel)',
        fontSize: '24px',
        color: 'var(--ink)'
      }}>
        <div>INITIALIZING WORKOS EVIDENCE VAULT...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'var(--bg)',
        fontFamily: 'var(--font-pixel)',
        color: 'var(--rosewood)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>SYSTEM CONNECTION ERROR</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Topbar matching design.html */}
      <Topbar 
        currentPath={selectedDoc ? selectedDoc.path : 'profile.md'}
        onSelectDoc={(p) => loadDocument(p)}
        onOpenAudit={handleOpenAudit}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Shell Layout */}
      <div className="shell">
        {selectedDoc && (
          <TreeExplorer 
            docs={docs}
            selectedDoc={selectedDoc}
            onSelectDoc={(p) => loadDocument(p)}
            isOpen={isSidebarOpen}
            onCloseSidebar={() => setIsSidebarOpen(false)}
          />
        )}

        {selectedDoc && selectedDoc.path === 'profile.md' ? (
          <ProfileHome onSelectDoc={(p) => loadDocument(p)} />
        ) : selectedDoc ? (
          <DocumentViewer 
            doc={selectedDoc}
            markdown={markdown}
            onSelectDoc={(p) => loadDocument(p)}
            onPrevDoc={prevDoc ? () => loadDocument(prevDoc.path) : undefined}
            onNextDoc={nextDoc ? () => loadDocument(nextDoc.path) : undefined}
            prevTitle={prevDoc?.title}
            nextTitle={nextDoc?.title}
          />
        ) : null}
      </div>

      {/* Audit Modal */}
      {isAuditOpen && (
        <AuditModal 
          report={auditReport}
          loading={auditLoading}
          onClose={() => setIsAuditOpen(false)}
          onRerun={runAuditCheck}
        />
      )}
    </>
  );
};
