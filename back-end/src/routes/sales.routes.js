const express = require('express');

const controllers = require('../controllers/sales');
const { authToken } = require('../middlewares');

const sales = express.Router();

sales.get('/:saleId', authToken, controllers.sales.getSaleById);
sales.get('/', authToken, controllers.sales.getSalesByUser);

module.exports = sales;
