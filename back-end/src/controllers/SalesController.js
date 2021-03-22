const { Router } = require('express');
const { getAllSales, createSale } = require('../services/SalesService');
const { TokenValidation } = require('../Auth/TokenValidation');

const SalesController = new Router();

SalesController.post('/', TokenValidation, createSale);

SalesController.get('/', TokenValidation, getAllSales);

module.exports = SalesController;