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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px' }}>🛡️</span>
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Automated Portfolio Audit Suite</span>
          </div>
          <button className="btn btn--ghost btn--sm" onClick={onClose}>✕ Close</button>
        </div>

        <div className="modal-body">
          {loading || !report ? (
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <span className="dot dot--pulse"></span>
              <p style={{ marginTop: '10px', color: 'var(--ink-soft)' }}>Executing automated compliance assertions...</p>
            </div>
          ) : (
            <>
              {/* Verdict Summary Card */}
              <div style={{
                background: 'var(--surface)',
                border: '1.5px solid var(--line)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: report.verdict.includes('100%') ? 'var(--success)' : 'var(--warning)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span>✓</span>
                    <span>{report.verdict}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--ink-soft)', marginTop: '4px' }}>
                    Verified {report.passedChecks} of {report.totalChecks} standards at {new Date(report.timestamp).toLocaleTimeString()}
                  </div>
                </div>

                <button className="btn btn--sm" onClick={onRerun}>🔄 Re-Run Checks</button>
              </div>

              {/* Table of assertions */}
              <div style={{ overflowX: 'auto', border: '1.5px solid var(--line)', borderRadius: 'var(--radius-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', background: 'var(--surface)' }}>
                  <thead>
                    <tr style={{ background: 'var(--panel)', borderBottom: '1.5px solid var(--line)' }}>
                      <th style={{ padding: '8px 12px', textAlign: 'left', fontFamily: 'var(--font-mono)' }}>Standard</th>
                      <th style={{ padding: '8px 12px', textAlign: 'left', fontFamily: 'var(--font-mono)' }}>Assertion Target</th>
                      <th style={{ padding: '8px 12px', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>Status</th>
                      <th style={{ padding: '8px 12px', textAlign: 'left', fontFamily: 'var(--font-mono)' }}>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.checks.map((check, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--line-soft)' }}>
                        <td style={{ padding: '8px 12px', fontWeight: 'bold' }}>{check.category}</td>
                        <td style={{ padding: '8px 12px' }}>{check.name}</td>
                        <td style={{ padding: '8px 12px', textAlign: 'center' }}>
                          <span className={`badge ${check.status === 'PASS' ? 'badge--real' : 'badge--sim'}`} style={{ fontSize: '9px' }}>
                            {check.status}
                          </span>
                        </td>
                        <td style={{ padding: '8px 12px', color: 'var(--ink-soft)' }}>{check.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
