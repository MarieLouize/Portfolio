import React from 'react';

interface TopbarProps {
  currentPath: string;
  onSelectDoc: (path: string) => void;
  onNavigateContact: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onToggleSidebar: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  currentPath,
  onSelectDoc,
  onNavigateContact,
  isDark,
  onToggleTheme,
  onToggleSidebar
}) => {
  return (
    <div className="topbar">
      <button 
        className="hamburger" 
        onClick={onToggleSidebar} 
        aria-label="Toggle navigation"
      >
        <span></span>
      </button>

      <a 
        className="brand" 
        href="#profile.md" 
        onClick={(e) => {
          e.preventDefault();
          onSelectDoc('profile.md');
        }}
      >
        work<span>OS</span>
      </a>

      <span className="crumb">~/workos/{currentPath}</span>

      <div className="topbar-links">
        <a 
          className="cta-btn" 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigateContact();
          }}
          title="Contact Marie-Louize"
        >
          Contact
        </a>

        {/* Temporarily commented out per user instruction:
        <a 
          className="icon-link" 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="GitHub"
          title="GitHub Profile"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 1a7 7 0 0 0-2.2 13.6c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.8-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.07 1.64.76 2.04.58.06-.46.24-.76.44-.94-1.56-.18-3.2-.78-3.2-3.47 0-.77.27-1.4.72-1.89-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.94.72a6.7 6.7 0 0 1 3.53 0c1.35-.91 1.94-.72 1.94-.72.38.97.14 1.69.07 1.87.45.49.72 1.12.72 1.89 0 2.7-1.64 3.29-3.21 3.46.25.22.48.64.48 1.3v1.93c0 .19.13.4.49.34A7 7 0 0 0 8 1z"/>
          </svg>
        </a>

        <a 
          className="icon-link" 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="LinkedIn"
          title="LinkedIn Profile"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2.7 5.5h2.1V13H2.7V5.5zM3.75 2.4a1.22 1.22 0 1 1 0 2.44 1.22 1.22 0 0 1 0-2.44zM6.6 5.5h2v1.02h.03c.28-.52 1-1.08 2.05-1.08 2.2 0 2.6 1.44 2.6 3.32V13h-2.1V9.2c0-.9-.02-2.06-1.26-2.06-1.26 0-1.45.98-1.45 2v3.87H6.6V5.5z"/>
          </svg>
        </a>
        */}

        <button 
          className="icon-link" 
          onClick={onToggleTheme} 
          title="Toggle Color Theme"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
};
