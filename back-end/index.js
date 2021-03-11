const express = require('express');

const app = express();

const PORT = 3000;

const bodyParser = require('body-parser');
const UserService = require('./Services/userService');

app.use(bodyParser.json());

app.post('/login', UserService.loginUser);

app.listen(PORT);
