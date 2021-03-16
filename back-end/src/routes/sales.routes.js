const express = require('express');

const controllers = require('../controllers/sales');

const sales = express.Router();

sales.get('/:id', controllers.sales);

module.exports = sales;
