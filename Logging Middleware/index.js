// index.js (inside logging-middleware)
const express = require('express');
const axios = require('axios');
const logger = require('./logger');

const app = express();
app.use(express.json());
app.use(logger);

app.post('/shorten', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'No URL provided' });
  }

  try {
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error shortening URL:', error.message);
    res.status(500).json({ error: 'Failed to shorten URL' });
  }
});

app.listen(3001, () => {
  console.log('Logging middleware server running on http://localhost:3001');
});
