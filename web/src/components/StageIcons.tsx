import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
  size?: number;
}

// Stage 1: Troubleshooting & Fixes — Terminal Prompt (>_)
export const TerminalIcon: React.FC<IconProps> = ({
  className = 'door-icon',
  color = 'currentColor',
  size = 20
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2.5" y="3.5" width="15" height="13" rx="2" />
    <path d="M6 8l2.5 2-2.5 2" />
    <line x1="11.5" y1="12" x2="14" y2="12" />
  </svg>
);

// Stage 2: User Onboarding & Support — Chat Dialogue
export const ChatIcon: React.FC<IconProps> = ({
  className = 'door-icon',
  color = 'currentColor',
  size = 20
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3.5 4.5h13a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-6.5L6 17v-3H3.5a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1z" />
    <line x1="6.5" y1="8.5" x2="13.5" y2="8.5" />
    <line x1="6.5" y1="11.5" x2="10.5" y2="11.5" />
  </svg>
);

// Stage 3: Clear Guides & Runbooks — Technical Manual / Spec Sheet
export const ManualIcon: React.FC<IconProps> = ({
  className = 'door-icon',
  color = 'currentColor',
  size = 20
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4.5 2.5h7l4 4V16.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1z" />
    <polyline points="11.5 2.5 11.5 6.5 15.5 6.5" />
    <line x1="6.5" y1="10.5" x2="13.5" y2="10.5" />
    <line x1="6.5" y1="13.5" x2="10.5" y2="13.5" />
  </svg>
);

// Stage 4: Automated Quality Checks — Benchmark Gauge
export const GaugeIcon: React.FC<IconProps> = ({
  className = 'door-icon',
  color = 'currentColor',
  size = 20
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3.5 14a7 7 0 1 1 13 0" />
    <path d="M10 14l2.5-4.5" />
    <circle cx="10" cy="14" r="1.2" fill={color} />
    <line x1="10" y1="4" x2="10" y2="5.5" />
    <line x1="5" y1="7.5" x2="6.3" y2="8.7" />
    <line x1="15" y1="7.5" x2="13.7" y2="8.7" />
  </svg>
);

// Stage 5: Field Work — Planetary / Globe Coordinates
export const GlobeIcon: React.FC<IconProps> = ({
  className = 'door-icon',
  color = 'currentColor',
  size = 20
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="7.5" />
    <line x1="2.5" y1="10" x2="17.5" y2="10" />
    <ellipse cx="10" cy="10" rx="3.5" ry="7.5" />
  </svg>
);

// Dynamic Resolver by stage name or identifier
export const getStageIcon = (stage: string, className = 'door-icon', size = 20): JSX.Element => {
  const s = (stage || '').toLowerCase();
  if (s.includes('troubleshoot') || s.includes('01') || s.includes('support') || s.includes('fix')) {
    return <TerminalIcon className={className} color="var(--door-support)" size={size} />;
  }
  if (s.includes('onboard') || s.includes('02') || s.includes('customer') || s.includes('user')) {
    return <ChatIcon className={className} color="var(--door-cs)" size={size} />;
  }
  if (s.includes('guide') || s.includes('03') || s.includes('doc') || s.includes('runbook')) {
    return <ManualIcon className={className} color="var(--door-docs)" size={size} />;
  }
  if (s.includes('qual') || s.includes('04') || s.includes('check') || s.includes('ai')) {
    return <GaugeIcon className={className} color="var(--door-aiqa)" size={size} />;
  }
  if (s.includes('field') || s.includes('05') || s.includes('real')) {
    return <GlobeIcon className={className} color="var(--ink-soft)" size={size} />;
  }
  return <TerminalIcon className={className} size={size} />;
};
