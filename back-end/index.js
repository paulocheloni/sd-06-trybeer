const express = require('express');
const UserController = require('./src/controller/UsersControler');

const app = express();

const PORT = 3001;

app.use(express.json());

app.use('/login', UserController);

app.listen(PORT, console.log(`Experando Requisições na porta ${PORT}`));
