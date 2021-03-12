const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const { RegisterRoute } = require('./routes');

// app.use(bodyParser.json());

app.use('/login', (req, res) => {
  res.status(200).json('oi');
});

app.use('/register', RegisterRoute);

module.exports = app;