const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js frontend!' });
});

app.listen(port, () => {
  console.log(`Frontend is listening on port ${port}`);
});
