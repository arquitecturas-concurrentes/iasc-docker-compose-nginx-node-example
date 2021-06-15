'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

let count = 0;

// App
const app = express();
app.get('/', (req, res) => {
  count++;
  res.send(`${count}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);