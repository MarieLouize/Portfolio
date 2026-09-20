import React from 'react';

interface ProfileHomeProps {
  onSelectDoc: (path: string) => void;
}

export const ProfileHome: React.FC<ProfileHomeProps> = ({ onSelectDoc }) => {
  return (
    <main className="main">
      {/* INTRO WINDOW */}
      <section>
        <div className="window-stack">
          <div className="sheet sheet-a"></div>
          <div className="sheet sheet-b"></div>
          <div className="window door-support">
            <div className="window-bar">
              <span>~/workos/profile.md</span>
              <span className="close" title="System profile">&times;</span>
            </div>
            <div className="window-body">
              <div className="avatar">ML</div>
              <div>
                <p className="hi">operator identifier:</p>
                <h2>Marie-Louize <span className="name-accent">— Technical Operator</span></h2>
                <p className="role">Troubleshooting &middot; User Support &middot; Clear Runbooks &middot; Quality Checks</p>
                <p className="quote">&ldquo;I make messy digital operations clearer and more repeatable.&rdquo;</p>
              </div>
            </div>
            <div className="window-fields">
              <div className="field">
                <span className="k">Currently</span>
                <span>B.Sc. in Computer Science &middot; Systems, SQL, and telemetry infrastructure</span>
              </div>
              <div className="field">
                <span className="k">Focus</span>
                <span>Troubleshooting, User Support, Living Runbooks, and Automated Quality Checks</span>
              </div>
              <div className="field">
                <span className="k">Architecture</span>
                <span>An evidence vault of verified operational artifacts, structured directly as a file tree</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATUS CARD */}
      <section>
        <div className="status-card">
          <div className="status-figure">
            <span className="big">9 / 9</span>
            <span className="sub">Proofs verified &amp; operational</span>
          </div>
          <div className="status-caption">
            100% automated test coverage across all five operational modules.
          </div>
          <div className="ring">
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

      {/* ABOUT SECTION */}
      <section>
        <div className="section-label">About</div>
        <div className="about-body">
          <p>
            I look at software systems the way an engineer looks at physical machinery under load. When a customer is stuck and an integration breaks, I do not guess, apologize, or hide behind corporate boilerplate. I separate human friction from technical state, find where the machine failed, and walk everyone through to a clean resolution.
          </p>
          <p>
            My work follows four practical steps across the lifecycle of a problem:
          </p>
          <div className="failure-planes-list">
            <div><strong>01. Troubleshooting &amp; Fixes:</strong> Catching live errors, tracing logs, and fixing the root cause.</div>
            <div><strong>02. User Onboarding &amp; Support:</strong> Guiding users through confusing breaks and keeping them steady.</div>
            <div><strong>03. Clear Guides &amp; Runbooks:</strong> Turning tribal knowledge into living, step-by-step instructions.</div>
            <div><strong>04. Automated Quality Checks:</strong> Writing automated tests and benchmarks so problems never recur.</div>
          </div>
          <p>
            A support ticket solved five times without an SOP is not support; it is an unlogged outage. Every proof in this vault resolves through a simple operational cycle:
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

      {/* NAV GUIDE */}
      <section>
        <div className="section-label">How this work connects</div>
        <div className="guide-card">
          <p>
            Every proof here is a verified artifact from a single operational habit: find what broke, help the people affected, write down how it works, and build automated checks so it stays fixed. Each stage carries a consistent color tag across the explorer and the individual runbooks.
          </p>
          <div className="key-row">
            <div className="key-item door-support">
              <svg className="key-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-support)" strokeWidth="2">
                <path d="M4 12l4-8 4 8M6.5 10h3M12 15l2.5-6 2.5 6M13.2 12.5h2.6"/>
              </svg>
              Troubleshooting &amp; Fixes
            </div>
            <div className="key-item door-cs">
              <svg className="key-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-cs)" strokeWidth="2">
                <path d="M3 5h14v8H8l-3 3v-3H3z"/>
                <path d="M6.5 8.5h7M6.5 10.8h4.5"/>
              </svg>
              User Onboarding &amp; Support
            </div>
            <div className="key-item door-docs">
              <svg className="key-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-docs)" strokeWidth="2">
                <path d="M4 4.5h6.5v11H4z"/>
                <path d="M10.5 4.5H16v11h-5.5"/>
                <path d="M6 7h3M6 9.3h3M11.5 7h3M11.5 9.3h3"/>
              </svg>
              Clear Guides &amp; Runbooks
            </div>
            <div className="key-item door-aiqa">
              <svg className="key-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-aiqa)" strokeWidth="2">
                <path d="M10 2.5l1.8 4.8 4.8 1.8-4.8 1.8L10 15.7l-1.8-4.8-4.8-1.8 4.8-1.8z"/>
              </svg>
              Automated Quality Checks
            </div>
          </div>
        </div>
      </section>

      {/* PROOF ROSTER */}
      <section>
        <div className="section-label">All nine proofs in sequence</div>
        <div className="data-list">
          <div 
            className="data-row door-support"
            onClick={() => onSelectDoc('01-support-technical-ops/queue/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-support)" strokeWidth="2">
              <path d="M4 12l4-8 4 8M6.5 10h3M12 15l2.5-6 2.5 6M13.2 12.5h2.6"/>
            </svg>
            <span className="name">Support Queue Triage &amp; Macros (AP-019 to TR-S02)</span>
            <div className="data-row-tags">
              <span className="door">FIXES</span>
              <span className="class-tag real">Real</span>
              <span className="class-tag sim">Sim</span>
            </div>
          </div>

          <div 
            className="data-row door-support"
            onClick={() => onSelectDoc('01-support-technical-ops/pipeline-diagnosis/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-support)" strokeWidth="2">
              <path d="M4 12l4-8 4 8M6.5 10h3M12 15l2.5-6 2.5 6M13.2 12.5h2.6"/>
            </svg>
            <span className="name">Edge-Cache Pipeline Diagnosis (3-Min Fast Track)</span>
            <div className="data-row-tags">
              <span className="door">FIXES</span>
              <span className="class-tag real">Real</span>
            </div>
          </div>

          <div 
            className="data-row door-support"
            onClick={() => onSelectDoc('01-support-technical-ops/incident-investigation/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-support)" strokeWidth="2">
              <path d="M4 12l4-8 4 8M6.5 10h3M12 15l2.5-6 2.5 6M13.2 12.5h2.6"/>
            </svg>
            <span className="name">Broken Webhook Incident Postmortem</span>
            <div className="data-row-tags">
              <span className="door">FIXES</span>
              <span className="class-tag sim">Simulation</span>
            </div>
          </div>

          <div 
            className="data-row door-cs"
            onClick={() => onSelectDoc('02-customer-success/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-cs)" strokeWidth="2">
              <path d="M3 5h14v8H8l-3 3v-3H3z"/>
              <path d="M6.5 8.5h7M6.5 10.8h4.5"/>
            </svg>
            <span className="name">AcePadi Beta User Onboarding &amp; Retention Program</span>
            <div className="data-row-tags">
              <span className="door">USER OPS</span>
              <span className="class-tag real">Real</span>
            </div>
          </div>

          <div 
            className="data-row door-docs"
            onClick={() => onSelectDoc('03-documentation-knowledge-ops/customize-store-kb/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-docs)" strokeWidth="2">
              <path d="M4 4.5h6.5v11H4z"/>
              <path d="M10.5 4.5H16v11h-5.5"/>
              <path d="M6 7h3M6 9.3h3M11.5 7h3M11.5 9.3h3"/>
            </svg>
            <span className="name">Trov&eacute;a Customize Store Step-by-Step Guide</span>
            <div className="data-row-tags">
              <span className="door">RUNBOOKS</span>
              <span className="class-tag self">Self-directed</span>
            </div>
          </div>

          <div 
            className="data-row door-docs"
            onClick={() => onSelectDoc('03-documentation-knowledge-ops/mindframe-docs/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-docs)" strokeWidth="2">
              <path d="M4 4.5h6.5v11H4z"/>
              <path d="M10.5 4.5H16v11h-5.5"/>
              <path d="M6 7h3M6 9.3h3M11.5 7h3M11.5 9.3h3"/>
            </svg>
            <span className="name">Mindframe Technical Architecture &amp; Runbook</span>
            <div className="data-row-tags">
              <span className="door">RUNBOOKS</span>
              <span className="class-tag real">Real</span>
            </div>
          </div>

          <div 
            className="data-row door-aiqa"
            onClick={() => onSelectDoc('04-ai-ops-qa/eval-framework/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-aiqa)" strokeWidth="2">
              <path d="M10 2.5l1.8 4.8 4.8 1.8-4.8 1.8L10 15.7l-1.8-4.8-4.8-1.8 4.8-1.8z"/>
            </svg>
            <span className="name">AcePadi Quality-Gate Eval Framework (3-Min Fast Track)</span>
            <div className="data-row-tags">
              <span className="door">QUALITY CHECKS</span>
              <span className="class-tag real">Real</span>
            </div>
          </div>

          <div 
            className="data-row door-aiqa"
            onClick={() => onSelectDoc('04-ai-ops-qa/model-benchmark/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="var(--door-aiqa)" strokeWidth="2">
              <path d="M10 2.5l1.8 4.8 4.8 1.8-4.8 1.8L10 15.7l-1.8-4.8-4.8-1.8 4.8-1.8z"/>
            </svg>
            <span className="name">Mindframe Multi-Provider Benchmark &amp; Router</span>
            <div className="data-row-tags">
              <span className="door">QUALITY CHECKS</span>
              <span className="class-tag real">Real</span>
            </div>
          </div>

          <div 
            className="data-row" 
            style={{ borderLeftColor: 'var(--line)' }}
            onClick={() => onSelectDoc('05-real-world/README.md')}
          >
            <svg className="door-icon" viewBox="0 0 20 20" fill="none" stroke="var(--ink-soft)" strokeWidth="2">
              <rect x="4.5" y="9" width="11" height="7.5" rx="1.5"/>
              <path d="M7 9V6.5a3 3 0 0 1 6 0V9"/>
            </svg>
            <span className="name">Real-World Experience Field Placement</span>
            <div className="data-row-tags">
              <span className="door">FIELD WORK</span>
              <span className="class-tag real">Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER LINKS */}
      <section id="contact">
        <div className="section-label">Elsewhere</div>
        <div className="tool-strip">
          <a className="tool-badge" href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
          <a className="tool-badge" href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">gh</a>
          <a className="tool-badge" href="#profile.md" onClick={() => onSelectDoc('profile.md')} title="Resume / Profile">cv</a>
          <a className="tool-badge" href="mailto:" title="Email Contact">@</a>
        </div>
      </section>

      <footer className="pagefoot">
        WorkOS &middot; profile.md &middot; Deterministic operations, living documentation, and verifiable code.
      </footer>
    </main>
  );
};
