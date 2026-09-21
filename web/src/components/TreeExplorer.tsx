import React from 'react';
import { DocItem } from '../types/portfolio';

interface TreeExplorerProps {
  docs: DocItem[];
  selectedDoc: DocItem;
  onSelectDoc: (path: string) => void;
  onNavigateContact?: () => void;
  isOpen: boolean;
  onCloseSidebar: () => void;
}

export const TreeExplorer: React.FC<TreeExplorerProps> = ({
  selectedDoc,
  onSelectDoc,
  onNavigateContact,
  isOpen,
  onCloseSidebar
}) => {
  const isPathActive = (p: string) => selectedDoc.path === p;

  const handleSelect = (p: string) => {
    onSelectDoc(p);
    onCloseSidebar();
  };

  return (
    <>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-root">~/workos</div>

        {/* Profile / Home */}
        <div 
          className={`tree-file ${isPathActive('profile.md') ? 'active' : ''}`}
          onClick={() => handleSelect('profile.md')}
        >
          <span className="dot-marker"></span>profile.md
        </div>

        <div className="tree-divider"></div>

        {/* Module 1: Troubleshooting & Fixes */}
        <div className="door-support">
          <div className="tree-folder-label">
            <span className="mini-folder"></span>01-troubleshooting/
          </div>
          <div 
            className={`tree-child ${isPathActive('01-support-technical-ops/queue/README.md') ? 'active' : ''}`}
            onClick={() => handleSelect('01-support-technical-ops/queue/README.md')}
          >
            <span>queue.md</span>
          </div>
          <div 
            className={`tree-child ${isPathActive('01-support-technical-ops/pipeline-diagnosis/README.md') ? 'active' : ''}`}
            onClick={() => handleSelect('01-support-technical-ops/pipeline-diagnosis/README.md')}
          >
            <span>pipeline-diagnosis.md</span>
            <span style={{ color: 'var(--rosewood)', fontWeight: 'bold', fontSize: '13px' }}>★</span>
          </div>
          <div 
            className={`tree-child ${isPathActive('01-support-technical-ops/incident-investigation/README.md') ? 'active' : ''}`}
            onClick={() => handleSelect('01-support-technical-ops/incident-investigation/README.md')}
          >
            <span>incident-investigation.md</span>
          </div>
        </div>

        {/* Module 2: User Onboarding & Support */}
        <div 
          className={`tree-folder-flat door-cs ${isPathActive('02-customer-success/README.md') ? 'active' : ''}`}
          onClick={() => handleSelect('02-customer-success/README.md')}
        >
          <span className="mini-folder"></span>02-user-support.md
        </div>

        {/* Module 3: Clear Guides & Runbooks */}
        <div className="door-docs">
          <div className="tree-folder-label">
            <span className="mini-folder"></span>03-guides-runbooks/
          </div>
          <div 
            className={`tree-child ${isPathActive('03-documentation-knowledge-ops/customize-store-kb/README.md') ? 'active' : ''}`}
            onClick={() => handleSelect('03-documentation-knowledge-ops/customize-store-kb/README.md')}
          >
            <span>customize-store-kb.md</span>
          </div>
          <div 
            className={`tree-child ${isPathActive('03-documentation-knowledge-ops/mindframe-docs/README.md') ? 'active' : ''}`}
            onClick={() => handleSelect('03-documentation-knowledge-ops/mindframe-docs/README.md')}
          >
            <span>mindframe-docs.md</span>
          </div>
        </div>

        {/* Module 4: Automated Quality Checks */}
        <div className="door-aiqa">
          <div className="tree-folder-label">
            <span className="mini-folder"></span>04-quality-checks/
          </div>
          <div 
            className={`tree-child ${isPathActive('04-ai-ops-qa/eval-framework/README.md') ? 'active' : ''}`}
            onClick={() => handleSelect('04-ai-ops-qa/eval-framework/README.md')}
          >
            <span>eval-framework.md</span>
            <span style={{ color: 'var(--sage-leaf)', fontWeight: 'bold', fontSize: '13px' }}>★</span>
          </div>
          <div 
            className={`tree-child ${isPathActive('04-ai-ops-qa/model-benchmark/README.md') ? 'active' : ''}`}
            onClick={() => handleSelect('04-ai-ops-qa/model-benchmark/README.md')}
          >
            <span>model-benchmark.md</span>
          </div>
        </div>

        {/* Module 5: Field Work */}
        <div 
          className={`tree-folder-flat ${isPathActive('05-real-world/README.md') ? 'active' : ''}`}
          onClick={() => handleSelect('05-real-world/README.md')}
        >
          <span className="mini-folder"></span>05-field-work/ <span className="lock-tag">verified</span>
        </div>

        <div className="tree-divider"></div>

        {/* Standards & Protocols */}
        <div 
          className={`tree-file ${isPathActive('README.md') ? 'active' : ''}`}
          onClick={() => handleSelect('README.md')}
        >
          readme.md
        </div>
        {onNavigateContact && (
          <div 
            className="tree-file"
            onClick={() => {
              onNavigateContact();
              onCloseSidebar();
            }}
          >
            contact.md
          </div>
        )}
      </nav>

      {/* Scrim overlay for mobile navigation drawer */}
      <div 
        className={`sidebar-scrim ${isOpen ? 'show' : ''}`} 
        id="scrim" 
        onClick={onCloseSidebar}
      />
    </>
  );
};
