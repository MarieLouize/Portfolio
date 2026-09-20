import React from 'react';
import { DocItem } from '../types/portfolio';

interface TopbarProps {
  onSelectDoc: (path: string) => void;
  onOpenAudit: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  onSelectDoc,
  onOpenAudit,
  isDark,
  onToggleTheme
}) => {
  return (
    <header className="vault-topbar">
      <div 
        className="brand-block" 
        onClick={() => onSelectDoc('profile.md')} 
        style={{ cursor: 'pointer' }}
        title="Go to Marie-Louize Systems Profile (profile.md)"
      >
        <div className="brand-badge-box">ML</div>
        <div>
          <div className="brand-text-title">Marie-Louize</div>
          <div className="brand-text-subtitle">Technical Operations Evidence Vault</div>
        </div>
      </div>

      <div className="status-indicator">
        <span className="dot dot--pulse"></span>
        <span>SYSTEM HEALTHY: 9 PROOFS ACTIVE</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {/* Fast-Track Flagship Short-Cuts */}
        <button 
          className="btn btn--sm"
          style={{ borderColor: 'var(--sage)', color: 'var(--ink)' }}
          onClick={() => onSelectDoc('01-support-technical-ops/pipeline-diagnosis/README.md')}
          title="Jump to Proof 2 (Pipeline Root-Cause Fix)"
        >
          <span>⚡ Fast-Track: Proof 2</span>
        </button>

        <button 
          className="btn btn--sm"
          style={{ borderColor: 'var(--sage)', color: 'var(--ink)' }}
          onClick={() => onSelectDoc('04-ai-ops-qa/eval-framework/README.md')}
          title="Jump to Proof 7 (Quality-Gate Eval Framework)"
        >
          <span>⚡ Fast-Track: Proof 7</span>
        </button>

        <button className="btn btn--primary btn--sm" onClick={onOpenAudit}>
          <span>✓ Audit Suite</span>
        </button>

        <button className="btn btn--ghost btn--sm" onClick={onToggleTheme} title="Toggle Color Theme">
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
};
