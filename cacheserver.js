// server.js
const express = require('express');
const path = require('path');
const serveIndex = require('serve-index');

const app = express();
const PORT = 3001;

// Cache klasör yolu
const CACHE_DIR = path.join(__dirname, '/');

// Klasör listesini göster (icons ile daha güzel)
app.use('/', express.static(CACHE_DIR)); // statik dosya sunmak opsiyonel
app.use('/', serveIndex(CACHE_DIR, { icons: true }));

app.listen(PORT, () => {
  console.log(`Cache dizini http://localhost:${PORT}/cache/ adresinde hostlanıyor.`);
});
