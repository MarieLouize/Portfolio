import { DocItem, DocPayload, AuditReport } from '../types/portfolio';
import docsBundle from '../docs-bundle.json';

const BASE_URL = window.location.origin;

export async function fetchDocsCatalog(): Promise<DocItem[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/docs`);
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.warn('[client] API unavailable, using bundled catalog fallback');
  }

  // Fallback to static bundle
  if (docsBundle && docsBundle.catalog) {
    return docsBundle.catalog as DocItem[];
  }
  throw new Error('Failed to fetch catalog and bundled catalog unavailable');
}

export async function fetchDoc(path: string): Promise<DocPayload> {
  try {
    const res = await fetch(`${BASE_URL}/api/doc?path=${encodeURIComponent(path)}`);
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.warn(`[client] API unavailable for ${path}, using bundled doc fallback`);
  }

  // Fallback to static bundle
  if (docsBundle && docsBundle.docs && (docsBundle.docs as any)[path]) {
    return (docsBundle.docs as any)[path] as DocPayload;
  }
  throw new Error(`Failed to fetch doc at ${path} and not found in bundle`);
}

export async function fetchAuditReport(): Promise<AuditReport> {
  try {
    const res = await fetch(`${BASE_URL}/api/audit`);
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.warn('[client] API unavailable for audit, using bundled audit fallback');
  }

  // Fallback to static bundle
  if (docsBundle && docsBundle.audit) {
    return docsBundle.audit as AuditReport;
  }
  throw new Error('Failed to fetch audit report and not found in bundle');
}
