const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    const bundlePath = path.join(__dirname, 'docs-data.json');
    if (fs.existsSync(bundlePath)) {
      const bundle = JSON.parse(fs.readFileSync(bundlePath, 'utf8'));
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(bundle.catalog));
      return;
    }
  } catch (err) {
    console.error('Error serving catalog:', err);
  }

  res.writeHead(500, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Catalog bundle unavailable' }));
};
