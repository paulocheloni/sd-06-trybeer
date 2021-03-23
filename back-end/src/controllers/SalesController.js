const { Router } = require('express');
const { createSale, getAllSales } = require('../services/SalesService');
const { TokenValidation } = require('../Auth/TokenValidation');

const SalesController = new Router();

SalesController.post('/', TokenValidation, createSale);

SalesController.get('/', getAllSales);

module.exports = SalesController;