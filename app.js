const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ message: 'Hello, World!' });
});

app.get('/echo', (req, res) => {
  res.send({ message: 'Hello, World Echo!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
