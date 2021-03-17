const express = require('express');

const controllers = require('../controllers/sales');
const middlewares = require('../middlewares');

const sales = express.Router();

sales.post('/create', middlewares.authToken, controllers.create);

module.exports = sales;
