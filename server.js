const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3333;
const REPO_ROOT = __dirname;

// The canonical documents catalog
const DOCS_CATALOG = [
  {
    id: 'ROOT',
    proofId: 'VAULT-000',
    title: 'Evidence Vault Overview & Fast Track',
    door: 'Overview',
    doorId: '00-overview',
    doorNumber: 0,
    proofClass: 'FOUNDATION',
    fastTrack: false,
    path: 'README.md',
    summary: 'Candidate bio, 3-minute hiring fast track, 4-door 9-proof matrix, and systems philosophy.'
  },
  {
    id: 'TICKET-TEMPLATE',
    proofId: 'STD-000',
    title: 'Unified Ticket Standard Template',
    door: 'Standards & Protocols',
    doorId: '00-standards',
    doorNumber: 0,
    proofClass: 'PROTOCOL',
    fastTrack: false,
    path: 'ticket-template.md',
    summary: 'Shared ticket standard template enforcing Claim -> Artifact -> Process -> Result -> Reflection.'
  },
  {
    id: 'DOOR-01',
    proofId: 'DOOR-01-INDEX',
    title: 'Door 1: Support & Technical Operations',
    door: 'Support & Technical Ops',
    doorId: '01-support-technical-ops',
    doorNumber: 1,
    proofClass: 'DOOR LANDING',
    fastTrack: false,
    path: '01-support-technical-ops/README.md',
    summary: 'Support operations index, capability mapping, and operational philosophies.'
  },
  {
    id: 'PROOF-01',
    proofId: 'WOS-SUP-001',
    title: 'Proof 1: Support Queue (AcePadi + Trovéa)',
    door: 'Support & Technical Ops',
    doorId: '01-support-technical-ops',
    doorNumber: 1,
    proofClass: 'REAL + SIMULATION',
    fastTrack: false,
    path: '01-support-technical-ops/queue/README.md',
    summary: '6 full tickets (AP-019 to TR-S02), macro response library, escalation matrix, and automation roadmap.'
  },
  {
    id: 'PROOF-02',
    proofId: 'WOS-SUP-002',
    title: 'Proof 2: Pipeline Root-Cause Fix (AcePadi)',
    door: 'Support & Technical Ops',
    doorId: '01-support-technical-ops',
    doorNumber: 1,
    proofClass: 'REAL EXPERIENCE',
    fastTrack: true,
    path: '01-support-technical-ops/pipeline-diagnosis/README.md',
    summary: 'Diagnosed session repetition root cause; designed Concept Ledger, Recent Block Log, and Phrase Ledger.'
  },
  {
    id: 'PROOF-03',
    proofId: 'WOS-SUP-003',
    title: 'Proof 3: Deliberately Broken Integration (Trovéa)',
    door: 'Support & Technical Ops',
    doorId: '01-support-technical-ops',
    doorNumber: 1,
    proofClass: 'SIMULATION',
    fastTrack: false,
    path: '01-support-technical-ops/incident-investigation/README.md',
    summary: 'cURL reproduction, cache TTL race condition log trace, and sanitized engineering handoff ticket.'
  },
  {
    id: 'PROOF-04',
    proofId: 'WOS-CS-004',
    title: 'Proof 4: Beta Customer Success Program (AcePadi)',
    door: 'Customer Success & Ops',
    doorId: '02-customer-success',
    doorNumber: 2,
    proofClass: 'REAL EXPERIENCE',
    fastTrack: true,
    path: '02-customer-success/README.md',
    summary: 'Onboarding Checklist, QBR Health Check Scorecard, At-Risk Escalation SOP, and A/B Tone Test.'
  },
  {
    id: 'DOOR-03',
    proofId: 'DOOR-03-INDEX',
    title: 'Door 3: Documentation & Knowledge Operations',
    door: 'Documentation & Knowledge',
    doorId: '03-documentation-knowledge-ops',
    doorNumber: 3,
    proofClass: 'DOOR LANDING',
    fastTrack: false,
    path: '03-documentation-knowledge-ops/README.md',
    summary: 'Living documentation index, deflection architecture, and runbook standards.'
  },
  {
    id: 'PROOF-05',
    proofId: 'WOS-DOC-005',
    title: 'Proof 5: Customize Store KB (Trovéa)',
    door: 'Documentation & Knowledge',
    doorId: '03-documentation-knowledge-ops',
    doorNumber: 3,
    proofClass: 'SELF-DIRECTED',
    fastTrack: false,
    path: '03-documentation-knowledge-ops/customize-store-kb/README.md',
    summary: '5-layer customization troubleshooting guide, FAQs, flowchart, and Tier-2 escalation contract.'
  },
  {
    id: 'PROOF-06',
    proofId: 'WOS-DOC-006',
    title: 'Proof 6: Mindframe Technical Architecture & Runbook',
    door: 'Documentation & Knowledge',
    doorId: '03-documentation-knowledge-ops',
    doorNumber: 3,
    proofClass: 'REAL EXPERIENCE',
    fastTrack: false,
    path: '03-documentation-knowledge-ops/mindframe-docs/README.md',
    summary: '9-stage curriculum synthesis architecture, automated 8-point test suite, and cold-onboarding runbook.'
  },
  {
    id: 'DOOR-04',
    proofId: 'DOOR-04-INDEX',
    title: 'Door 4: AI Operations & Output QA',
    door: 'AI Operations & Output QA',
    doorId: '04-ai-ops-qa',
    doorNumber: 4,
    proofClass: 'DOOR LANDING',
    fastTrack: false,
    path: '04-ai-ops-qa/README.md',
    summary: 'AI output quality assurance, evaluation rubrics, and model benchmarking index.'
  },
  {
    id: 'PROOF-07',
    proofId: 'WOS-AI-007',
    title: 'Proof 7: Quality-Gate Evaluation Framework (AcePadi)',
    door: 'AI Operations & Output QA',
    doorId: '04-ai-ops-qa',
    doorNumber: 4,
    proofClass: 'REAL EXPERIENCE',
    fastTrack: true,
    path: '04-ai-ops-qa/eval-framework/README.md',
    summary: 'Multi-dimensional rubric, entropy formulas, before/after samples, and error taxonomy.'
  },
  {
    id: 'PROOF-08',
    proofId: 'WOS-AI-008',
    title: 'Proof 8: Multi-Provider Benchmark (Mindframe)',
    door: 'AI Operations & Output QA',
    doorId: '04-ai-ops-qa',
    doorNumber: 4,
    proofClass: 'REAL EXPERIENCE',
    fastTrack: false,
    path: '04-ai-ops-qa/model-benchmark/README.md',
    summary: 'Empirical benchmark comparing Gemini Flash vs. DeepSeek Reasoner, quantitative metrics, and hybrid router.'
  },
  {
    id: 'PROOF-09',
    proofId: 'WOS-EXT-009',
    title: 'Proof 9: Real-World Experience Placement',
    door: 'Cross-Cutting / External',
    doorId: '05-real-world',
    doorNumber: 5,
    proofClass: 'OPEN',
    fastTrack: false,
    path: '05-real-world/README.md',
    summary: 'Honest pipeline tracker for external client/open-source contract and conversion template.'
  }
];

// Automated Audit Logic
function runAudit() {
  const results = [];

  // Check 1: All documents in catalog exist and are non-empty
  DOCS_CATALOG.forEach(doc => {
    const fullPath = path.join(REPO_ROOT, doc.path);
    const exists = fs.existsSync(fullPath);
    const size = exists ? fs.statSync(fullPath).size : 0;
    results.push({
      category: 'Document Presence',
      name: `${doc.proofId} - ${doc.path}`,
      status: exists && size > 100 ? 'PASS' : 'FAIL',
      detail: exists ? `Present (${size} bytes)` : 'File not found on disk'
    });
  });

  // Check 2: Fast-track links (Proof 2 and Proof 7)
  const p2 = DOCS_CATALOG.find(d => d.id === 'PROOF-02');
  const p7 = DOCS_CATALOG.find(d => d.id === 'PROOF-07');
  results.push({
    category: 'Fast Track',
    name: '3-Minute Fast-Track Flagship Proofs',
    status: (p2 && p2.fastTrack && p7 && p7.fastTrack) ? 'PASS' : 'FAIL',
    detail: 'Proof 2 (Pipeline Fix) & Proof 7 (Quality-Gate Eval) flagged for 3-minute review.'
  });

  // Check 3: Proof Class integrity
  const proofClassCounts = {};
  DOCS_CATALOG.forEach(doc => {
    proofClassCounts[doc.proofClass] = (proofClassCounts[doc.proofClass] || 0) + 1;
  });
  results.push({
    category: 'Proof Class Standard',
    name: 'Honest Proof Class Badges',
    status: proofClassCounts['REAL EXPERIENCE'] >= 4 && proofClassCounts['SIMULATION'] >= 1 ? 'PASS' : 'FAIL',
    detail: `Distribution: ${Object.entries(proofClassCounts).map(([k,v]) => `${k}: ${v}`).join(', ')}`
  });

  // Check 4: Cross-links resolution
  let deadLinks = 0;
  DOCS_CATALOG.forEach(doc => {
    const fullPath = path.join(REPO_ROOT, doc.path);
    if (!fs.existsSync(fullPath)) return;
    const content = fs.readFileSync(fullPath, 'utf8');
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      const linkTarget = match[2];
      // Check relative file links (.md or paths without http)
      if (!linkTarget.startsWith('http') && !linkTarget.startsWith('#') && !linkTarget.startsWith('mailto:')) {
        const cleanTarget = linkTarget.split('#')[0];
        if (cleanTarget) {
          const resolved = path.resolve(path.dirname(fullPath), cleanTarget);
          if (!fs.existsSync(resolved)) {
            deadLinks++;
          }
        }
      }
    }
  });

  results.push({
    category: 'Link Integrity',
    name: 'Relative Cross-Reference Links',
    status: deadLinks === 0 ? 'PASS' : 'WARN',
    detail: deadLinks === 0 ? 'All inter-document relative links resolve to existing files.' : `${deadLinks} broken relative links detected.`
  });

  const allPassed = results.every(r => r.status === 'PASS');
  return {
    timestamp: new Date().toISOString(),
    verdict: allPassed ? '100% AUDIT PASS' : 'AUDIT WARNINGS FOUND',
    totalChecks: results.length,
    passedChecks: results.filter(r => r.status === 'PASS').length,
    checks: results
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API 1: List all documents catalog
  if (pathname === '/api/docs') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(DOCS_CATALOG));
    return;
  }

  // API 2: Fetch specific document content
  if (pathname === '/api/doc') {
    const docPath = parsedUrl.query.path;
    if (!docPath) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing path query parameter' }));
      return;
    }

    // Sanitize path against directory traversal
    const safePath = path.normalize(docPath).replace(/^(\.\.[\/\\])+/, '');
    const fullPath = path.join(REPO_ROOT, safePath);

    if (!fullPath.startsWith(REPO_ROOT) || !fs.existsSync(fullPath)) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Document not found' }));
      return;
    }

    try {
      const content = fs.readFileSync(fullPath, 'utf8');
      const docMeta = DOCS_CATALOG.find(d => d.path === safePath) || {
        path: safePath,
        title: path.basename(safePath),
        proofClass: 'DOCUMENT'
      };
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({
        meta: docMeta,
        markdown: content
      }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // API 3: Audit test report
  if (pathname === '/api/audit') {
    const report = runAudit();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(report));
    return;
  }

  // Serve Single-Page Auditing UI
  if (pathname === '/' || pathname === '/index.html') {
    const viewerHtmlPath = path.join(REPO_ROOT, 'viewer', 'index.html');
    if (fs.existsSync(viewerHtmlPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(viewerHtmlPath).pipe(res);
      return;
    }
  }

  // Serve static assets from viewer/ or assets/
  if (pathname.startsWith('/viewer/') || pathname.startsWith('/assets/')) {
    const filePath = path.join(REPO_ROOT, pathname);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      const mimeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml'
      };
      res.writeHead(200, { 'Content-Type': mimeMap[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
  }

  // Fallback 404
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[WorkOS Portfolio Web Viewer] running at http://localhost:${PORT}`);
  console.log(`Auditing endpoints:`);
  console.log(`  - Web UI:    http://localhost:${PORT}/`);
  console.log(`  - Audit API: http://localhost:${PORT}/api/audit`);
  console.log(`  - Docs API:  http://localhost:${PORT}/api/docs`);
});
