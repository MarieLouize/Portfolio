import React from 'react';
import { AuditReport } from '../types/portfolio';

interface AuditModalProps {
  report: AuditReport | null;
  loading: boolean;
  onClose: () => void;
  onRerun: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  report,
  loading,
  onClose,
  onRerun
}) => {
  return (
    <div className="audit-backdrop" onClick={onClose}>
      <div className="audit-modal-window" onClick={e => e.stopPropagation()}>
        <div className="window-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>~/workos/audit-suite.log</span>
          </div>
          <button className="close" onClick={onClose} title="Close Audit">&times;</button>
        </div>

        <div className="audit-modal-body">
          {loading || !report ? (
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '22px', color: 'var(--ink)' }}>
                EXECUTING 21-POINT AUTOMATED COMPLIANCE AUDIT...
              </p>
            </div>
          ) : (
            <>
              {/* Verdict Summary Card */}
              <div className="audit-score-card">
                <div>
                  <div style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: report.verdict.includes('100%') ? 'var(--sage-leaf)' : 'var(--rosewood)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>✓</span>
                    <span>{report.verdict}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '16px', color: 'var(--ink-soft)', marginTop: '4px' }}>
                    {report.passedChecks} of {report.totalChecks} checks verified on disk • {new Date(report.timestamp).toLocaleTimeString()}
                  </div>
                </div>

                <button 
                  className="cta-btn" 
                  onClick={onRerun}
                  style={{ padding: '6px 14px', fontSize: '17px' }}
                >
                  ↻ Rerun
                </button>
              </div>

              {/* Checks Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '50vh', overflowY: 'auto' }}>
                {report.checks.map((c, i) => (
                  <div key={i} className="audit-check-row">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ 
                          fontFamily: 'var(--font-pixel)', 
                          fontSize: '14px', 
                          color: 'var(--ink-soft)',
                          textTransform: 'uppercase'
                        }}>
                          [{c.category}]
                        </span>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
                          {c.name}
                        </span>
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--ink-soft)', fontFamily: 'var(--font-mono)' }}>
                        {c.detail}
                      </div>
                    </div>

                    <span className={`class-tag ${c.status === 'PASS' ? 'real' : 'sim'}`} style={{ fontSize: '13px', padding: '2px 8px' }}>
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
