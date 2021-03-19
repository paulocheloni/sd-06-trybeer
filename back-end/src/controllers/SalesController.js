const { Router } = require('express');
const { SalesService } = require('../services/SalesService');
const { TokenValidation } = require('../Auth/TokenValidation');

const SalesController = new Router();

SalesController.post('/', TokenValidation, SalesService);

module.exports = SalesController;