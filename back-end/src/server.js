const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const { RegisterRoute, LoginRoute } = require('./routes');
const { error } = require('./middleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/login', LoginRoute);
app.use('/register', RegisterRoute);
app.use(error);

module.exports = app;
