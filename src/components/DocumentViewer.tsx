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
          copyBtn.innerText = 'Copied';
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
    navigator.clipboard.writeText(markdown);
  };

  const getBadgeClass = (pClass: string) => {
    if (pClass.includes('REAL')) return 'real';
    if (pClass.includes('SIMULATION')) return 'sim';
    if (pClass.includes('SELF-DIRECTED')) return 'self';
    return 'tbd';
  };

  return (
    <main className="main">
      <div className="doc-window">
        <div className="doc-window-bar">
          <span>~/workos/{doc.path}</span>
          <button 
            className="close" 
            onClick={() => onSelectDoc('profile.md')} 
            title="Return to Profile"
          >
            &times;
          </button>
        </div>

        {/* Proof Hero Card */}
        <div className="doc-header-card">
          <div className="doc-header-meta">
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="class-tag real">{doc.proofId}</span>
              <span className={`class-tag ${getBadgeClass(doc.proofClass)}`}>{doc.proofClass}</span>
              <span className="class-tag">{doc.door}</span>
              {doc.fastTrack && (
                <span className="class-tag" style={{ background: 'var(--rosewood)', color: 'white' }}>
                  ★ 3-Min Fast Track
                </span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                className="cta-btn" 
                style={{ padding: '4px 12px', fontSize: '15px' }} 
                onClick={copyMarkdown}
                title="Copy raw Markdown"
              >
                Copy .md
              </button>
              <button 
                className="cta-btn" 
                style={{ 
                  padding: '4px 12px', 
                  fontSize: '15px', 
                  background: isRaw ? 'var(--midnight-lagoon)' : 'var(--sage-leaf)',
                  color: isRaw ? 'var(--vanilla-cream)' : 'var(--midnight-lagoon)'
                }} 
                onClick={() => setIsRaw(!isRaw)}
              >
                {isRaw ? 'Rendered' : 'Raw .md'}
              </button>
            </div>
          </div>

          <div className="doc-hero-title">{doc.title}</div>
          <div className="doc-hero-summary">{doc.summary}</div>

          <div className="doc-meta-grid">
            <div className="doc-meta-item">
              <div className="k">Target Door</div>
              <div className="v">{doc.door}</div>
            </div>
            <div className="doc-meta-item">
              <div className="k">Proof Classification</div>
              <div className="v">{doc.proofClass}</div>
            </div>
            <div className="doc-meta-item">
              <div className="k">Audit Standard</div>
              <div className="v">Claim → Proof Standard</div>
            </div>
            <div className="doc-meta-item">
              <div className="k">Verification Status</div>
              <div className="v" style={{ color: 'var(--sage-leaf)' }}>Active on Disk</div>
            </div>
          </div>
        </div>

        {/* Content Canvas */}
        {isRaw ? (
          <pre style={{
            background: 'var(--surface)',
            padding: '24px',
            whiteSpace: 'pre-wrap',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            lineHeight: '1.6'
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
          padding: '20px 30px',
          borderTop: 'var(--border-thick)',
          background: 'var(--vanilla-cream)'
        }}>
          {onPrevDoc && prevTitle ? (
            <button 
              className="cta-btn" 
              style={{ textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis' }} 
              onClick={onPrevDoc}
            >
              ← Prev: {prevTitle}
            </button>
          ) : <div />}

          {onNextDoc && nextTitle ? (
            <button 
              className="cta-btn" 
              style={{ textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', background: 'var(--midnight-lagoon)' }} 
              onClick={onNextDoc}
            >
              Next: {nextTitle} →
            </button>
          ) : <div />}
        </div>
      </div>
    </main>
  );
};
