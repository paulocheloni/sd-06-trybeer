const express = require('express');

const controllers = require('../controllers/sales');
const { authToken } = require('../middlewares');

const sales = express.Router();

sales.get('/:id', authToken, controllers.sales);

module.exports = sales;
