import React from 'react';
import { TerminalIcon, ChatIcon, ManualIcon, GaugeIcon, GlobeIcon } from './StageIcons';

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
              <div className="avatar-header">
                <div className="avatar">
                  <img 
                    src="/profile-pic.jpg" 
                    alt="Marie-Louize" 
                    className="avatar-img"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="avatar-fallback">ML</span>
                </div>
                <div className="hi-greeting-mobile">
                  Hi <span className="wave-hand">👋🏼</span>
                </div>
              </div>
              <div className="window-intro">
                <div className="hi-greeting-desktop">
                  Hi <span className="wave-hand">👋🏼</span>
                </div>
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

      {/* SKILLS & TOOLS */}
      <section>
        <div className="section-label">Skills &amp; Tools</div>
        <div className="skills-card">
          <div className="skills-tools-strip">
            <div className="skills-subhead">Core Tooling &amp; Stack</div>
            <div className="skills-chip-row">
              <span className="skill-chip highlight">SQL (Postgres &middot; SQLite)</span>
              <span className="skill-chip highlight">Linux CLI &amp; Bash</span>
              <span className="skill-chip highlight">REST APIs &amp; cURL</span>
              <span className="skill-chip">Python</span>
              <span className="skill-chip">Node.js &amp; TypeScript</span>
              <span className="skill-chip">Git &amp; GitHub</span>
              <span className="skill-chip">JSON Schema &amp; Webhooks</span>
              <span className="skill-chip">Markdown &amp; Mermaid.js</span>
            </div>
          </div>

          <div className="skills-tools-strip" style={{ borderBottom: 'none', paddingBottom: 0 }}>
            <div className="skills-subhead">Operational Disciplines</div>
            <div className="skills-modules-grid">
              <div className="skill-module-box door-support">
                <div className="skill-module-title">
                  <TerminalIcon size={16} color="var(--door-support)" />
                  <span>Troubleshooting &amp; Fixes</span>
                </div>
                <p className="skill-module-desc">
                  Reproducible cURL triage, log investigation, edge-cache root-cause diagnosis, and blameless postmortems.
                </p>
              </div>

              <div className="skill-module-box door-cs">
                <div className="skill-module-title">
                  <ChatIcon size={16} color="var(--door-cs)" />
                  <span>User Onboarding &amp; Support</span>
                </div>
                <p className="skill-module-desc">
                  Time-to-value milestone checklists, cohort health scorecards (QBR), at-risk churn intervention, and SLA matrices.
                </p>
              </div>

              <div className="skill-module-box door-docs">
                <div className="skill-module-title">
                  <ManualIcon size={16} color="var(--door-docs)" />
                  <span>Clear Guides &amp; Runbooks</span>
                </div>
                <p className="skill-module-desc">
                  5-layer customer deflection architecture, step-by-step living runbooks, and operator onboarding documentation.
                </p>
              </div>

              <div className="skill-module-box door-aiqa">
                <div className="skill-module-title">
                  <GaugeIcon size={16} color="var(--door-aiqa)" />
                  <span>Automated Quality Checks</span>
                </div>
                <p className="skill-module-desc">
                  Multi-dimensional eval rubrics, deterministic quality gates, entropy thresholds, and multi-provider model benchmarking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section>
        <div className="section-label">About</div>
        <div className="about-body">
          <p>
            I work between the people using software and the technical systems running underneath. When an integration breaks or a customer gets stuck, I separate human confusion from actual system state, trace the failure to its source, and guide everyone toward a clean resolution.
          </p>
          <p>
            Every proof in this vault is a verified artifact from a single operational habit: find what broke, help the people affected, write down how it works, and build automated checks so it stays fixed. A support ticket solved five times without an SOP is not support; it is an unlogged outage.
          </p>
          
          <div className="cycle-strip">
            <span className="step">DIAGNOSE</span><span className="arrow">&rarr;</span>
            <span className="step">ISOLATE</span><span className="arrow">&rarr;</span>
            <span className="step">COMMUNICATE</span><span className="arrow">&rarr;</span>
            <span className="step">CODIFY</span><span className="arrow">&rarr;</span>
            <span className="step">PREVENT</span>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '10px' }}>
              Each operational stage carries a consistent color tag and icon across the explorer, the proof roster, and individual runbooks:
            </div>
            <div className="key-row">
              <div className="key-item door-support">
                <TerminalIcon className="key-icon" color="var(--door-support)" size={18} />
                Troubleshooting &amp; Fixes
              </div>
              <div className="key-item door-cs">
                <ChatIcon className="key-icon" color="var(--door-cs)" size={18} />
                User Onboarding &amp; Support
              </div>
              <div className="key-item door-docs">
                <ManualIcon className="key-icon" color="var(--door-docs)" size={18} />
                Clear Guides &amp; Runbooks
              </div>
              <div className="key-item door-aiqa">
                <GaugeIcon className="key-icon" color="var(--door-aiqa)" size={18} />
                Automated Quality Checks
              </div>
              <div className="key-item">
                <GlobeIcon className="key-icon" color="var(--ink-soft)" size={18} />
                Field Work
              </div>
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
            <TerminalIcon className="door-icon" color="var(--door-support)" />
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
            <TerminalIcon className="door-icon" color="var(--door-support)" />
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
            <TerminalIcon className="door-icon" color="var(--door-support)" />
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
            <ChatIcon className="door-icon" color="var(--door-cs)" />
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
            <ManualIcon className="door-icon" color="var(--door-docs)" />
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
            <ManualIcon className="door-icon" color="var(--door-docs)" />
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
            <GaugeIcon className="door-icon" color="var(--door-aiqa)" />
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
            <GaugeIcon className="door-icon" color="var(--door-aiqa)" />
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
            <GlobeIcon className="door-icon" color="var(--ink-soft)" />
            <span className="name">Real-World Experience Field Placement</span>
            <div className="data-row-tags">
              <span className="door">FIELD WORK</span>
              <span className="class-tag real">Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CHANNELS */}
      <section id="contact">
        <div className="section-label">Contact</div>
        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-tag">EMAIL</span>
            <a href="mailto:kennedymarielouize@gmail.com" className="contact-link">
              kennedymarielouize@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-tag">PHONE</span>
            <a href="tel:+23459146012" className="contact-link">
              +23459146012
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-tag">CV</span>
            <a 
              href="#profile.md" 
              onClick={(e) => {
                e.preventDefault();
                onSelectDoc('profile.md');
              }} 
              className="contact-link"
              title="Curriculum Vitae"
            >
              Curriculum Vitae (Profile View)
            </a>
          </div>
        </div>

        <div className="tool-strip" style={{ marginTop: '16px' }}>
          <a className="tool-badge" href="mailto:kennedymarielouize@gmail.com" title="Email: kennedymarielouize@gmail.com">@</a>
          <a className="tool-badge" href="tel:+23459146012" title="Phone: +23459146012">#</a>
          <a className="tool-badge" href="#profile.md" onClick={(e) => { e.preventDefault(); onSelectDoc('profile.md'); }} title="Curriculum Vitae / Profile">cv</a>
          {/* Temporarily commented out per user instruction:
          <a className="tool-badge" href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
          <a className="tool-badge" href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">gh</a>
          */}
        </div>
      </section>

      <footer className="pagefoot">
        WorkOS &middot; profile.md &middot; Deterministic operations, living documentation, and verifiable code.
      </footer>
    </main>
  );
};
