import React, { useState } from 'react';
import { DocItem } from '../types/portfolio';

interface TreeExplorerProps {
  docs: DocItem[];
  selectedDoc: DocItem;
  onSelectDoc: (path: string) => void;
}

export const TreeExplorer: React.FC<TreeExplorerProps> = ({
  docs,
  selectedDoc,
  onSelectDoc
}) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'FAST' | 'REAL' | 'SIM' | 'SELF'>('ALL');
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (doorName: string) => {
    setCollapsedGroups(prev => ({ ...prev, [doorName]: !prev[doorName] }));
  };

  // Filter docs
  const filteredDocs = docs.filter(d => {
    // Search match
    if (search.trim()) {
      const q = search.toLowerCase();
      const match = d.title.toLowerCase().includes(q) ||
                    d.summary.toLowerCase().includes(q) ||
                    d.proofId.toLowerCase().includes(q) ||
                    d.door.toLowerCase().includes(q);
      if (!match) return false;
    }

    if (filter === 'FAST') return d.fastTrack;
    if (filter === 'REAL') return d.proofClass.includes('REAL');
    if (filter === 'SIM') return d.proofClass.includes('SIMULATION');
    if (filter === 'SELF') return d.proofClass.includes('SELF-DIRECTED');
    return true;
  });

  // Group by door
  const groups: Record<string, DocItem[]> = {};
  filteredDocs.forEach(d => {
    if (!groups[d.door]) groups[d.door] = [];
    groups[d.door].push(d);
  });

  const getBadgeClass = (pClass: string) => {
    if (pClass.includes('REAL')) return 'badge--real';
    if (pClass.includes('SIMULATION')) return 'badge--sim';
    if (pClass.includes('SELF-DIRECTED')) return 'badge--self';
    if (pClass.includes('OPEN')) return 'badge--open';
    return '';
  };

  return (
    <aside className="tree-sidebar">
      {/* Sidebar Header */}
      <div className="tree-sidebar-header">
        <span>EXPLORER / EVIDENCE VAULT</span>
        <span className="count-pill">{filteredDocs.length} DOCS</span>
      </div>

      {/* Search Input */}
      <div style={{ padding: '0 4px' }}>
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter proofs, tools, keywords..."
          style={{
            width: '100%',
            padding: '6px 10px',
            border: '1.5px solid var(--line-soft)',
            borderRadius: 'var(--radius-xs)',
            background: 'var(--surface)',
            color: 'var(--ink)',
            fontFamily: 'var(--font-display)',
            fontSize: '12px',
            outline: 'none'
          }}
        />
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', padding: '4px 0' }}>
        <button 
          className={`btn btn--sm ${filter === 'ALL' ? 'btn--primary' : 'btn--ghost'}`}
          onClick={() => setFilter('ALL')}
        >
          All
        </button>
        <button 
          className={`btn btn--sm ${filter === 'FAST' ? 'btn--primary' : 'btn--ghost'}`}
          onClick={() => setFilter('FAST')}
        >
          ⚡ Fast Track
        </button>
        <button 
          className={`btn btn--sm ${filter === 'REAL' ? 'btn--primary' : 'btn--ghost'}`}
          onClick={() => setFilter('REAL')}
        >
          Real
        </button>
        <button 
          className={`btn btn--sm ${filter === 'SIM' ? 'btn--primary' : 'btn--ghost'}`}
          onClick={() => setFilter('SIM')}
        >
          Sim
        </button>
      </div>

      {/* Grouped Tree Nodes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
        {Object.entries(groups).map(([doorName, items]) => {
          const isCollapsed = collapsedGroups[doorName];
          return (
            <div key={doorName} className="tree-node-group">
              <div className="tree-group-title" onClick={() => toggleGroup(doorName)}>
                <span>{doorName}</span>
                <span>{isCollapsed ? '+' : '−'}</span>
              </div>

              {!isCollapsed && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingLeft: '6px' }}>
                  {items.map(item => {
                    const isActive = selectedDoc.path === item.path;
                    return (
                      <div 
                        key={item.path}
                        className={`tree-node ${isActive ? 'is-active' : ''}`}
                        onClick={() => onSelectDoc(item.path)}
                      >
                        <span className="tree-node-icon">📄</span>
                        <span className="tree-node-title" title={item.title}>{item.title}</span>
                        {item.fastTrack && <span style={{ color: '#10b981', fontSize: '10px' }}>⚡</span>}
                        <span className={`badge ${getBadgeClass(item.proofClass)}`} style={{ fontSize: '8px', padding: '1px 4px' }}>
                          {item.proofClass.split(' ')[0]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
