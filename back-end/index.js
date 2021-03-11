const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const log = require('./middlewares/log');
const UserController = require('./controller/UserController');
const LoginController = require('./controller/LoginController');

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3001;
const NOT_FOUND = 404;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(log);

app.use('/user', UserController);
app.use('/login', LoginController);

app.all('*', (req, res) => res.status(NOT_FOUND).json({ message: 'Route not found' }));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
