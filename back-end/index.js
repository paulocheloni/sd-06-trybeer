const express = require('express');
const rescue = require('express-rescue');

const app = express();

const PORT = 3001;
const ERROR = 500;

const LoginController = require('./src/controllers/LoginController');

app.use(express.json());

app.use('/login', rescue(LoginController));


app.use((error, req, res, _next) => {
  console.log({ error });
  return res.status(ERROR).json({ message: 'Erro Interno!' });
});

app.listen(PORT, () => console.log('Example app listening on port:', PORT));
