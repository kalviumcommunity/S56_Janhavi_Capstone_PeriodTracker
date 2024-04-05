const express = require('express');
// const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the backend server!');
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });