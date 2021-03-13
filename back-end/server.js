const bodyParser = require('body-parser');
const express = require('express');

const { RegisterRoute, LoginRoute } = require('./routes');
const { error } = require('./middleware');

const app = express();

app.use(bodyParser.json());
app.use('/login', LoginRoute);
app.use('/register', RegisterRoute);
app.use(error);

module.exports = app;
