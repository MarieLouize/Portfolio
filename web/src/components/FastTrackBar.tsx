import React from 'react';

interface FastTrackBarProps {
  onSelectDoc: (path: string) => void;
}

export const FastTrackBar: React.FC<FastTrackBarProps> = ({ onSelectDoc }) => {
  return (
    <div className="fast-track-strip">
      <div className="fast-track-label">
        <span>⚡ 3-Minute Hiring Fast Track</span>
        <span style={{ color: 'var(--ink-soft)', fontWeight: 'normal', textTransform: 'none', marginLeft: '6px' }}>
          Short on time? Review these two flagship real experience proofs first:
        </span>
      </div>

      <div className="fast-track-actions">
        <button 
          className="btn btn--sm" 
          onClick={() => onSelectDoc('01-support-technical-ops/pipeline-diagnosis/README.md')}
        >
          <span>Proof 2: Pipeline Fix (Diagnose)</span>
        </button>
        <button 
          className="btn btn--sm" 
          onClick={() => onSelectDoc('05-real-world/README.md')}
        >
          <span>Proof 9: Enterprise IT Operations (Field Work)</span>
        </button>
        <button 
          className="btn btn--sm" 
          onClick={() => onSelectDoc('02-customer-success/README.md')}
        >
          <span>Proof 4: Beta CS Program (Operate)</span>
        </button>
      </div>
    </div>
  );
};
