const express = require('express');
const cors = require('cors');
const UserController = require('./src/controller/UsersControler');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use('/login', UserController);

app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json(err.message);
});

app.listen(PORT, console.log(`Experando Requisições na porta ${PORT}`));
