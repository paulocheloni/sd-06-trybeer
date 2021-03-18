const express = require('express');

const controllers = require('../controllers/sales');
const middlewares = require('../middlewares');

const sales = express.Router();

sales.get('/:saleId', middlewares.authToken, controllers.details);
sales.get('/', middlewares.authToken, controllers.sales);

module.exports = sales;
