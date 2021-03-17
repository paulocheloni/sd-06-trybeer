const express = require('express');
const rescue = require('express-rescue');
const cors = require('cors');

// Componente de repostas https
const { status, messages } = require('./src/util/dataStatus');

const { erro } = status;
const { erroInterno } = messages;

const app = express();

const PORT = 3001;

const LoginController = require('./src/controllers/LoginController');
const UserController = require('./src/controllers/UserController');

app.use(express.json());
app.use(cors());

app.use('/login', rescue(LoginController));
app.use('/user', rescue(UserController));

app.use((error, req, res, _next) => {
  console.log({ error });
  return res.status(erro).json(erroInterno);
});

app.listen(PORT, () => console.log('Example app listening on port:', PORT));
