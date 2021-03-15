const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/connection');
const LoginController = require('./controllers/LoginController');
const RegisterController = require( './controllers/RegisterController' );

require("dotenv").config();

const app = express();

const PORT = 3000;

app.use((req, _res, next) => {
  console.log({
    data: new Date(),
    method: req.method,
    router: req.originalUrl,
  });
  next();
});


app.use(bodyParser.json());

app.use('/login', LoginController);

app.use('/register', RegisterController);

app.use((err, _req, res, _next) => {
  console.error({ err });
  res.status(500).json({ erro: 'erro interno' });
});

app.listen(PORT, () => console.log('running port', PORT));