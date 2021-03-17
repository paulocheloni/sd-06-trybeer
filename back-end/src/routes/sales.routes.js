const express = require('express');

const controllers = require('../controllers/sales');
const middlewares = require('../middlewares');

const sales = express.Router();

sales.get('/', middlewares.authToken, controllers.sales);

module.exports = sales;
