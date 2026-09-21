import { DocItem, DocPayload, AuditReport } from '../types/portfolio';

const BASE_URL = window.location.origin;

export async function fetchDocsCatalog(): Promise<DocItem[]> {
  const res = await fetch(`${BASE_URL}/api/docs`);
  if (!res.ok) throw new Error(`Failed to fetch catalog: ${res.statusText}`);
  return res.json();
}

export async function fetchDoc(path: string): Promise<DocPayload> {
  const res = await fetch(`${BASE_URL}/api/doc?path=${encodeURIComponent(path)}`);
  if (!res.ok) throw new Error(`Failed to fetch doc at ${path}: ${res.statusText}`);
  return res.json();
}

export async function fetchAuditReport(): Promise<AuditReport> {
  const res = await fetch(`${BASE_URL}/api/audit`);
  if (!res.ok) throw new Error(`Failed to fetch audit report: ${res.statusText}`);
  return res.json();
}
