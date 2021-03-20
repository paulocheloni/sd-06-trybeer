const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const { UserRoute, LoginRoute, ProductsRoute, SalesRoute } = require('./routes');
const { error } = require('./middleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/login', LoginRoute);
app.use('/user', UserRoute);
app.use('/products', ProductsRoute);
app.use('/sales', SalesRoute);
app.use(error);

module.exports = app;
