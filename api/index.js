const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/docs', express.static(path.join(__dirname, 'docs')));
app.use('/data', express.static(path.join(__dirname, 'data')));
app.use(require('./controllers'));

// handle 404
app.use((req, res) => {
  res.status(404);
  res.json({ error: 'route not found' });
});

// handle 500
app.use((error, req, res, next) => {
  res.status(500);
  res.json({ error: error });
});

const URL = `http://localhost:3333`;
app.listen(3333, () => console.log(`Doggify API is running on ${URL}`));
