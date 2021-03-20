const { Router } = require('express');
const { SalesService, getAllSales } = require('../services/SalesService');
const { TokenValidation } = require('../Auth/TokenValidation');

const SalesController = new Router();

SalesController.post('/', TokenValidation, SalesService);

SalesController.get('/', getAllSales);

module.exports = SalesController;