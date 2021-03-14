const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/connection');
const LoginController = require('./controllers/LoginController');

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

// console.log('VARIAVEIS DE AMBIENTE', {
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   host: process.env.HOSTNAME,
//   database: 'Trybeer'
// });

// app.get('/ola', async (_req, res) => {
//   console.log('antes db')
//   const [response] = await connection.execute('SELECT * FROM users');
//   console.log('depois db')
//   console.log('response', response)
//   res.json(response);
// })



app.use(bodyParser.json());

//app.use('/users', UsersController);

app.use('/login', LoginController);



app.use((err, _req, res, _next) => {
  console.error({ err });
  res.status(500).json({ erro: 'erro interno' });
});

app.listen(PORT, () => console.log('running port', PORT));