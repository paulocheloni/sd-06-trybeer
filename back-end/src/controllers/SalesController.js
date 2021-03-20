const { Router } = require('express');
const tokenValidator = require('../middlewares/tokenValidator');
const status = require('../utils/statusDictionary');
const { createSaleService } = require('../services/SalesService');

const salesRouter = new Router();

salesRouter.post('/checkout', tokenValidator, async (req, res) => {
  const payload = req.body;
  const response = await createSaleService(payload);
  
  return res.status(status.SUCCESS).json(response);
});

salesRouter.get('/', async (_req, res) => {
  const sales = await SalesService.getAllSales();
  res.status(status.SUCCESS).json(sales);
});

module.exports = salesRouter;
