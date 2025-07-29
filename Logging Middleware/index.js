// index.js
const express = require('express');
const logger = require('./logger');

const app = express();
const port = 3001;

// Use the custom logger middleware
app.use(logger);

// Example endpoint
app.get('/', (req, res) => {
  res.send('Logging Middleware Active!');
});

// Example endpoint that might be called by frontend
app.get('/log', (req, res) => {
  res.send('Logged a GET request from frontend');
});

// Start the server
app.listen(port, () => {
  console.log(`Logging server running at http://localhost:${port}`);
});
