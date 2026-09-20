import React from 'react';
import '../styles/home.css';

interface ProfileHomeProps {
  onSelectDoc: (path: string) => void;
}

export const ProfileHome: React.FC<ProfileHomeProps> = ({ onSelectDoc }) => {
  return (
    <main className="home-main">
      {/* INTRO WINDOW COMPONENT */}
      <section className="home-section">
        <div className="window-stack">
          <div className="sheet sheet-a"></div>
          <div className="sheet sheet-b"></div>
          <div className="window door-support">
            <div className="window-bar">
              <span>~/workos/profile.md</span>
              <span className="window-close" title="System profile">&times;</span>
            </div>
            <div className="window-body">
              <div className="window-avatar">ML</div>
              <div>
                <p className="hi">operator identifier:</p>
                <h2>Marie-Louize <span className="name-accent">— Technical Operator</span></h2>
                <p className="role">Support Engineering &middot; Customer Success &middot; Living Documentation &middot; AI Ops/QA</p>
                <p className="quote">&ldquo;I make messy digital operations clearer and more repeatable.&rdquo;</p>
              </div>
            </div>
            <div className="window-fields">
              <div className="window-field">
                <span className="field-key">Currently</span>
                <span className="field-val">B.Sc. in Computer Science &middot; Systems, SQL, and telemetry infrastructure</span>
              </div>
              <div className="window-field">
                <span className="field-key">Looking for</span>
                <span className="field-val">Technical Operations, Support Engineering, Customer Success, or AI Output QA</span>
              </div>
              <div className="window-field">
                <span className="field-key">Architecture</span>
                <span className="field-val">An evidence vault of verified operational artifacts, structured directly as a file tree</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATUS METRIC CARD */}
      <section className="home-section">
        <div className="status-card">
          <div className="status-figure">
            <span className="big">9 / 9</span>
            <span className="sub">Proofs verified &amp; operational</span>
          </div>
          <div className="status-caption">
            100% automated audit pass (20/20 checks) across all four operational doors and external placement.
          </div>
          <div className="status-ring">
            <svg viewBox="0 0 80 80">
              <circle className="track" cx="40" cy="40" r="34"></circle>
              <circle 
                className="fill" 
                cx="40" 
                cy="40" 
                r="34" 
                strokeDasharray="213.6" 
                strokeDashoffset="0"
              ></circle>
            </svg>
            <span>100%</span>
          </div>
        </div>
      </section>

      {/* ABOUT OPERATING PHILOSOPHY & LOOP */}
      <section className="home-section">
        <div className="home-section-label">About</div>
        <div className="about-body">
          <p>
            I treat software operations like physical machinery under load. When a customer is panicked and an integration breaks, I do not guess, apologize, or hide behind corporate boilerplate. I separate human friction from technical state, isolate where the system diverged, and guide everyone toward deterministic alignment.
          </p>
          <p>
            My work bridges four technical failure planes, organized directly by folder in the repository tree:
          </p>
          <div style={{ marginBottom: '20px', fontSize: '15px', lineHeight: '1.8', paddingLeft: '6px' }}>
            <div><strong>01. Support &amp; Technical Operations:</strong> Reproducible triage, edge-cache invalidation, and incident command.</div>
            <div><strong>02. Customer Success:</strong> Behavioral choice architecture, micro-commitment ladders, and churn defense.</div>
            <div><strong>03. Documentation &amp; Knowledge:</strong> Converting tribal panic into living evacuation-map runbooks.</div>
            <div><strong>04. AI Operations / Output QA:</strong> Heuristic quality gates, entropy thresholds, and multi-provider benchmarks.</div>
          </div>
          <p>
            A support ticket solved five times without an SOP is not support; it is an unlogged system outage. Every proof in this vault resolves through a 5-step operational loop:
          </p>
          <div className="cycle-strip">
            <span className="step">DIAGNOSE</span><span className="arrow">&rarr;</span>
            <span className="step">ISOLATE</span><span className="arrow">&rarr;</span>
            <span className="step">COMMUNICATE</span><span className="arrow">&rarr;</span>
            <span className="step">CODIFY</span><span className="arrow">&rarr;</span>
            <span className="step">PREVENT</span>
          </div>
        </div>
      </section>

      {/* HOW THIS SITE IS ORGANIZED */}
      <section className="home-section">
        <div className="home-section-label">How this site is organized</div>
        <div className="guide-card">
          <p>
            This site is an unvarnished projection of the underlying Git repository &mdash; identical folder boundaries, Markdown schemas, and test assertions. Every operational door carries a persistent telemetry color and icon across the explorer, the proof roster, and individual runbooks.
          </p>
          <div className="key-row">
            <div className="key-item door-support">
              <svg className="key-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12l4-8 4 8M6.5 10h3M12 15l2.5-6 2.5 6M13.2 12.5h2.6"/>
              </svg>
              Support &amp; Tech Ops
            </div>
            <div className="key-item door-cs">
              <svg className="key-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5h14v8H8l-3 3v-3H3z"/>
                <path d="M6.5 8.5h7M6.5 10.8h4.5"/>
              </svg>
              Customer Success
            </div>
            <div className="key-item door-docs">
              <svg className="key-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4.5h6.5v11H4z"/>
                <path d="M10.5 4.5H16v11h-5.5"/>
                <path d="M6 7h3M6 9.3h3M11.5 7h3M11.5 9.3h3"/>
              </svg>
              Documentation
            </div>
            <div className="key-item door-aiqa">
              <svg className="key-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 2.5l1.8 4.8 4.8 1.8-4.8 1.8L10 15.7l-1.8-4.8-4.8-1.8 4.8-1.8z"/>
              </svg>
              AI Ops / QA
            </div>
          </div>
        </div>
      </section>

      {/* ALL NINE PROOFS ROSTER */}
      <section className="home-section">
        <div className="home-section-label">All nine proofs</div>
        <div className="data-list">
          <div 
            className="data-row door-support" 
            onClick={() => onSelectDoc('01-support-technical-ops/queue/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12l4-8 4 8M6.5 10h3M12 15l2.5-6 2.5 6M13.2 12.5h2.6"/>
            </svg>
            <span className="name">Support &amp; Tech Ops Queue (AP-019 to TR-S02)</span>
            <span className="door-tag">SUPPORT</span>
            <span className="class-tag real">Real</span>
            <span className="class-tag sim">Sim</span>
          </div>

          <div 
            className="data-row door-support" 
            onClick={() => onSelectDoc('01-support-technical-ops/pipeline-diagnosis/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12l4-8 4 8M6.5 10h3M12 15l2.5-6 2.5 6M13.2 12.5h2.6"/>
            </svg>
            <span className="name">Edge-Cache Pipeline Diagnosis (3-Min Fast Track)</span>
            <span className="door-tag">SUPPORT</span>
            <span className="class-tag real">Real ★</span>
          </div>

          <div 
            className="data-row door-support" 
            onClick={() => onSelectDoc('01-support-technical-ops/incident-investigation/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12l4-8 4 8M6.5 10h3M12 15l2.5-6 2.5 6M13.2 12.5h2.6"/>
            </svg>
            <span className="name">Broken Webhook Incident Postmortem</span>
            <span className="door-tag">SUPPORT</span>
            <span className="class-tag sim">Simulation</span>
          </div>

          <div 
            className="data-row door-cs" 
            onClick={() => onSelectDoc('02-customer-success/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 5h14v8H8l-3 3v-3H3z"/>
              <path d="M6.5 8.5h7M6.5 10.8h4.5"/>
            </svg>
            <span className="name">AcePadi Beta CS Onboarding Program</span>
            <span className="door-tag">CS</span>
            <span className="class-tag real">Real</span>
          </div>

          <div 
            className="data-row door-docs" 
            onClick={() => onSelectDoc('03-documentation-knowledge-ops/customize-store-kb/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4.5h6.5v11H4z"/>
              <path d="M10.5 4.5H16v11h-5.5"/>
              <path d="M6 7h3M6 9.3h3M11.5 7h3M11.5 9.3h3"/>
            </svg>
            <span className="name">Trov&eacute;a Customize Store 5-Layer Deflection KB</span>
            <span className="door-tag">DOCS</span>
            <span className="class-tag self">Self-directed</span>
          </div>

          <div 
            className="data-row door-docs" 
            onClick={() => onSelectDoc('03-documentation-knowledge-ops/mindframe-docs/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4.5h6.5v11H4z"/>
              <path d="M10.5 4.5H16v11h-5.5"/>
              <path d="M6 7h3M6 9.3h3M11.5 7h3M11.5 9.3h3"/>
            </svg>
            <span className="name">Mindframe Technical Architecture &amp; Runbook</span>
            <span className="door-tag">DOCS</span>
            <span className="class-tag real">Real</span>
          </div>

          <div 
            className="data-row door-aiqa" 
            onClick={() => onSelectDoc('04-ai-ops-qa/eval-framework/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 2.5l1.8 4.8 4.8 1.8-4.8 1.8L10 15.7l-1.8-4.8-4.8-1.8 4.8-1.8z"/>
            </svg>
            <span className="name">AcePadi Quality-Gate Eval Framework (3-Min Fast Track)</span>
            <span className="door-tag">AI QA</span>
            <span className="class-tag real">Real ★</span>
          </div>

          <div 
            className="data-row door-aiqa" 
            onClick={() => onSelectDoc('04-ai-ops-qa/model-benchmark/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 2.5l1.8 4.8 4.8 1.8-4.8 1.8L10 15.7l-1.8-4.8-4.8-1.8 4.8-1.8z"/>
            </svg>
            <span className="name">Mindframe Multi-Provider Benchmark &amp; Hybrid Router</span>
            <span className="door-tag">AI QA</span>
            <span className="class-tag real">Real</span>
          </div>

          <div 
            className="data-row" 
            style={{ borderLeftColor: 'var(--ink, #2D3A47)' }}
            onClick={() => onSelectDoc('05-real-world/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4.5" y="9" width="11" height="7.5" rx="1.5"/>
              <path d="M7 9V6.5a3 3 0 0 1 6 0V9"/>
            </svg>
            <span className="name">Real-World Experience Placement Pipeline</span>
            <span className="door-tag">EXTERNAL</span>
            <span className="class-tag real">Verified</span>
          </div>
        </div>
      </section>

      {/* ELSEWHERE TOOLSTRIP */}
      <section className="home-section" id="contact">
        <div className="home-section-label">Elsewhere</div>
        <div className="tool-strip">
          <a className="tool-badge" href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
          <a className="tool-badge" href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">gh</a>
          <a className="tool-badge" href="#profile.md" onClick={() => onSelectDoc('profile.md')} title="Resume / Profile">cv</a>
          <a className="tool-badge" href="mailto:" title="Contact via Email">@</a>
        </div>
      </section>

      <footer className="home-foot">
        WorkOS &middot; profile.md &middot; Deterministic operations, living documentation, and verifiable code.
      </footer>
    </main>
  );
};
