import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import { DocItem } from '../types/portfolio';

declare global {
  interface Window {
    katex?: {
      renderToString: (tex: string, options?: { displayMode?: boolean }) => string;
    };
    mermaid?: {
      run: (options?: { nodes?: NodeList | Element[] }) => void;
    };
  }
}

interface DocumentViewerProps {
  doc: DocItem;
  markdown: string;
  onSelectDoc: (path: string) => void;
  onPrevDoc?: () => void;
  onNextDoc?: () => void;
  prevTitle?: string;
  nextTitle?: string;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  doc,
  markdown,
  onSelectDoc,
  onPrevDoc,
  onNextDoc,
  prevTitle,
  nextTitle
}) => {
  const [isRaw, setIsRaw] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  // Setup marked renderer
  const renderer = new marked.Renderer();

  // Helper for unpacking link args across marked versions
  renderer.link = function(arg1: any, arg2?: any, arg3?: any) {
    let href = '';
    let title = '';
    let text = '';

    if (typeof arg1 === 'object' && arg1 !== null) {
      href = String(arg1.href || '');
      title = String(arg1.title || '');
      text = String(arg1.text || '');
    } else {
      href = String(arg1 || '');
      title = String(arg2 || '');
      text = String(arg3 || '');
    }

    if (!href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('mailto:') && !href.startsWith('#')) {
      const safeHref = href.replace(/'/g, "\\'");
      return `<a href="#" data-doc-link="${safeHref}" title="${title}">${text || href}</a>`;
    }
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" title="${title}">${text || href}</a>`;
  };

  renderer.code = function(arg1: any, arg2?: any) {
    let code = '';
    let lang = 'plaintext';

    if (typeof arg1 === 'object' && arg1 !== null) {
      code = String(arg1.text || '');
      lang = String(arg1.lang || 'plaintext');
    } else {
      code = String(arg1 || '');
      lang = String(arg2 || 'plaintext');
    }

    if (lang === 'mermaid') {
      return `<div class="mermaid-wrapper"><div class="mermaid">${code}</div></div>`;
    }

    const safeCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `
      <div class="code-card">
        <div class="code-header">
          <span>${lang.toUpperCase()}</span>
          <button class="btn btn--ghost btn--sm" data-code-copy="${encodeURIComponent(code)}">Copy</button>
        </div>
        <pre><code class="language-${lang}">${safeCode}</code></pre>
      </div>
    `;
  };

  marked.setOptions({
    renderer,
    gfm: true,
    breaks: false
  });

  // Render markdown with KaTeX pre-processing
  const getRenderedHtml = () => {
    let content = markdown;
    if (window.katex) {
      content = content.replace(/\$\$([\s\S]+?)\$\$/g, (_, eq) => {
        try {
          return `<div style="text-align: center; margin: 16px 0;">${window.katex!.renderToString(eq.trim(), { displayMode: true })}</div>`;
        } catch {
          return `$$${eq}$$`;
        }
      });
    }
    return marked.parse(content) as string;
  };

  // Run Mermaid after DOM update & attach click delegates
  useEffect(() => {
    if (articleRef.current && window.mermaid) {
      try {
        const nodes = articleRef.current.querySelectorAll('.mermaid');
        if (nodes.length > 0) {
          window.mermaid.run({ nodes: Array.from(nodes) });
        }
      } catch (err) {
        console.warn('Mermaid render notice:', err);
      }
    }

    // Intercept clicks on internal doc links and copy buttons
    const container = articleRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Internal link click
      const link = target.closest('[data-doc-link]') as HTMLElement;
      if (link) {
        e.preventDefault();
        const relHref = link.getAttribute('data-doc-link');
        if (relHref) {
          handleRelativeLink(relHref);
        }
        return;
      }

      // Code copy button click
      const copyBtn = target.closest('[data-code-copy]') as HTMLElement;
      if (copyBtn) {
        e.preventDefault();
        const rawCode = decodeURIComponent(copyBtn.getAttribute('data-code-copy') || '');
        navigator.clipboard.writeText(rawCode).then(() => {
          const original = copyBtn.innerText;
          copyBtn.innerText = 'Copied!';
          setTimeout(() => { copyBtn.innerText = original; }, 1500);
        });
      }
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, [markdown, isRaw]);

  // Relative path resolver
  const handleRelativeLink = (relHref: string) => {
    const currentDir = doc.path.substring(0, doc.path.lastIndexOf('/'));
    const parts = relHref.split('#');
    const targetPath = parts[0];
    const anchor = parts[1];

    let resolved = targetPath;
    if (targetPath) {
      const stack = currentDir ? currentDir.split('/') : [];
      const steps = targetPath.split('/');
      for (const step of steps) {
        if (step === '.' || step === '') continue;
        if (step === '..') {
          if (stack.length > 0) stack.pop();
        } else {
          stack.push(step);
        }
      }
      resolved = stack.join('/');
    } else {
      resolved = doc.path;
    }

    if (!resolved.endsWith('.md')) {
      if (!resolved.endsWith('/')) resolved += '/';
      resolved += 'README.md';
    }

    onSelectDoc(resolved);

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor) || document.getElementById(anchor.toLowerCase());
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const copyMarkdown = () => {
    navigator.clipboard.writeText(markdown).then(() => {
      alert('Markdown copied to clipboard!');
    });
  };

  const getBadgeClass = (pClass: string) => {
    if (pClass.includes('REAL')) return 'badge--real';
    if (pClass.includes('SIMULATION')) return 'badge--sim';
    if (pClass.includes('SELF-DIRECTED')) return 'badge--self';
    if (pClass.includes('OPEN')) return 'badge--open';
    return '';
  };

  return (
    <div className="tree-preview">
      {/* Breadcrumb path */}
      <div className="tree-preview-header">
        <div className="tree-preview-path">
          <span>vault</span>
          <span className="sep">/</span>
          <span>{doc.doorId}</span>
          <span className="sep">/</span>
          <span className="current">{doc.path}</span>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn--sm" onClick={copyMarkdown}>📋 Copy .md</button>
          <button className="btn btn--sm" onClick={() => setIsRaw(!isRaw)}>
            {isRaw ? '📖 Rendered' : '👁️ Raw Markdown'}
          </button>
        </div>
      </div>

      {/* Proof Hero Card */}
      <div className="proof-hero-card">
        <div className="hero-top-meta">
          <div className="hero-badges-strip">
            <span className="proof-id-badge">{doc.proofId}</span>
            <span className={`badge ${getBadgeClass(doc.proofClass)}`}>{doc.proofClass}</span>
            <span className="badge" style={{ background: 'var(--panel)', borderColor: 'var(--line-soft)' }}>
              {doc.door}
            </span>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-soft)' }}>
            Door #{doc.doorNumber} • {doc.fastTrack ? '⚡ 3-Min Fast Track' : 'Standard Case Study'}
          </div>
        </div>

        {doc.fastTrack && (
          <div className="fast-track-callout">
            <span>⚡</span>
            <span>
              <strong>3-Minute Flagship Proof:</strong> Recommended primary evaluation piece for technical operating depth and root-cause systems diagnosis.
            </span>
          </div>
        )}

        <div className="hero-title">{doc.title}</div>
        <div className="hero-summary">{doc.summary}</div>

        <div className="hero-meta-grid">
          <div className="meta-item">
            <div className="k">Target Door</div>
            <div className="v">{doc.door}</div>
          </div>
          <div className="meta-item">
            <div className="k">Proof Classification</div>
            <div className="v">{doc.proofClass}</div>
          </div>
          <div className="meta-item">
            <div className="k">Audit Standard</div>
            <div className="v">Claim → Proof Standard</div>
          </div>
          <div className="meta-item">
            <div className="k">Verification Status</div>
            <div className="v" style={{ color: 'var(--success)' }}>Active on Disk</div>
          </div>
        </div>
      </div>

      {/* Content Canvas */}
      {isRaw ? (
        <pre style={{
          background: 'var(--surface)',
          padding: '24px',
          borderRadius: 'var(--radius-md)',
          border: '1.5px solid var(--line)',
          whiteSpace: 'pre-wrap',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px'
        }}>
          {markdown}
        </pre>
      ) : (
        <div 
          ref={articleRef}
          className="markdown-article"
          dangerouslySetInnerHTML={{ __html: getRenderedHtml() }}
        />
      )}

      {/* Prev / Next Pagination */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginTop: '24px',
        paddingTop: '20px',
        borderTop: '1.5px dashed var(--line-soft)'
      }}>
        {onPrevDoc && prevTitle ? (
          <button className="btn" style={{ justifyContent: 'flex-start' }} onClick={onPrevDoc}>
            ← Prev: {prevTitle}
          </button>
        ) : <div />}

        {onNextDoc && nextTitle ? (
          <button className="btn btn--primary" style={{ justifyContent: 'flex-end' }} onClick={onNextDoc}>
            Next: {nextTitle} →
          </button>
        ) : <div />}
      </div>
    </div>
  );
};
