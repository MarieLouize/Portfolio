const fs = require('fs');
const path = require('path');
const url = require('url');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const docPath = parsedUrl.query.path;

  if (!docPath) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Missing path query parameter' }));
    return;
  }

  // 1. Try serving from in-memory pre-generated bundle
  try {
    const bundlePath = path.join(__dirname, 'docs-data.json');
    if (fs.existsSync(bundlePath)) {
      const bundle = JSON.parse(fs.readFileSync(bundlePath, 'utf8'));
      if (bundle.docs && bundle.docs[docPath]) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(bundle.docs[docPath]));
        return;
      }
    }
  } catch (err) {
    console.error('Error reading bundle:', err);
  }

  // 2. Fallback to direct disk read
  try {
    const safePath = path.normalize(docPath).replace(/^(\.\.[\/\\])+/, '');
    const fullPath = path.join(process.cwd(), safePath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({
        meta: {
          path: safePath,
          title: path.basename(safePath),
          proofClass: 'DOCUMENT'
        },
        markdown: content
      }));
      return;
    }
  } catch (err) {
    console.error('Error reading file from disk:', err);
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: `Document not found: ${docPath}` }));
};
