export type ProofClass = 
  | 'FOUNDATION' 
  | 'PROTOCOL' 
  | 'DOOR LANDING' 
  | 'REAL EXPERIENCE' 
  | 'REAL + SIMULATION' 
  | 'SIMULATION' 
  | 'SELF-DIRECTED' 
  | 'OPEN';

export interface DocItem {
  id: string;
  proofId: string;
  title: string;
  door: string;
  doorId: string;
  doorNumber: number;
  proofClass: ProofClass;
  fastTrack: boolean;
  path: string;
  summary: string;
}

export interface AuditCheck {
  category: string;
  name: string;
  status: 'PASS' | 'WARN' | 'FAIL';
  detail: string;
}

export interface AuditReport {
  timestamp: string;
  verdict: string;
  totalChecks: number;
  passedChecks: number;
  checks: AuditCheck[];
}

export interface DocPayload {
  meta: DocItem;
  markdown: string;
}
