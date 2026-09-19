import React, { useState, useEffect } from 'react';
import { DocItem, AuditReport } from './types/portfolio';
import { fetchDocsCatalog, fetchDoc, fetchAuditReport } from './api/client';
import { Topbar } from './components/Topbar';
import { FastTrackBar } from './components/FastTrackBar';
import { TreeExplorer } from './components/TreeExplorer';
import { DocumentViewer } from './components/DocumentViewer';
import { AuditModal } from './components/AuditModal';
import './styles/design-tokens.css';

export const App: React.FC = () => {
  const [docs, setDocs] = useState<DocItem[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DocItem | null>(null);
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

        // Check hash or load README.md
        const hash = window.location.hash ? window.location.hash.substring(1) : 'README.md';
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
      <div className="app-shell" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <span className="dot dot--pulse"></span>
          <p style={{ marginTop: '12px', fontFamily: 'var(--font-mono)' }}>Initializing Evidence Vault...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-shell" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'var(--danger)', textAlign: 'center' }}>
          <h2>Connection Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      {/* Topbar with Brand & Actions */}
      <Topbar 
        onSelectDoc={(p) => loadDocument(p)}
        onOpenAudit={handleOpenAudit}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* 3-Minute Fast Track Callout */}
      <FastTrackBar onSelectDoc={(p) => loadDocument(p)} />

      {/* OS-Inspired 2-Pane Tree Explorer Shell */}
      {selectedDoc && (
        <div className="tree-shell">
          <TreeExplorer 
            docs={docs}
            selectedDoc={selectedDoc}
            onSelectDoc={(p) => loadDocument(p)}
          />

          <DocumentViewer 
            doc={selectedDoc}
            markdown={markdown}
            onSelectDoc={(p) => loadDocument(p)}
            onPrevDoc={prevDoc ? () => loadDocument(prevDoc.path) : undefined}
            onNextDoc={nextDoc ? () => loadDocument(nextDoc.path) : undefined}
            prevTitle={prevDoc?.title}
            nextTitle={nextDoc?.title}
          />
        </div>
      )}

      {/* Audit Modal */}
      {isAuditOpen && (
        <AuditModal 
          report={auditReport}
          loading={auditLoading}
          onClose={() => setIsAuditOpen(false)}
          onRerun={runAuditCheck}
        />
      )}
    </div>
  );
};
