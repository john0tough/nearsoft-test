const express = require('express');

const app = express();

const api = app.use('/api', (req, res, next) => {
  const apiKey = req.get('api_key');

  if (!apiKey) {
    res.status(400).json({ error: 'api_key header must be provided' });
    return;
  }

  if (apiKey !== 'v1Vld/Dr34m5') {
    res.status(400).json({ error: 'invalid api_key' });
    return;
  }

  req.apiKey = apiKey;
  req.apiVersionCode = 1;
  next();
});

api.use('/api/dogs', require('./dogs'));

module.exports = app;
