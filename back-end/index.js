const express = require('express');

const app = express();

const PORT = 3000;

const cors = require('cors');
const bodyParser = require('body-parser');
const UserService = require('./Services/userService');

app.use(bodyParser.json());
app.use(cors());

app.post('/login', UserService.loginUser);

app.listen(PORT);
