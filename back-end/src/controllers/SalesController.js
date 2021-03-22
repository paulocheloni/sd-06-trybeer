const { Router } = require('express');
const tokenValidator = require('../middlewares/tokenValidator');
const status = require('../utils/statusDictionary');
const SalesService = require('../services/SalesService');

const salesRouter = new Router();

salesRouter.post('/checkout', tokenValidator, async (req, res) => {
  const { payload, products } = req.body;
  // console.log(products)
  const response = await SalesService.createSaleService(payload, products);
  
  return res.status(status.SUCCESS).json(response);
});

salesRouter.get('/', async (_req, res) => {
  const sales = await SalesService.getAllSales();
  res.status(status.SUCCESS).json(sales);
});

salesRouter.get('/admin/details/:id', async (req, res) => {
  const {id: saleId} = req.params;
  const responsePayload = await SalesService.getSaleById(saleId);
  const {sale, saleProducts} = responsePayload
  res.status(status.SUCCESS).json({sale, saleProducts});
});

salesRouter.put('/admin/details/:id', async (req, res) => {
  const {id: saleId} = req.params;
  await SalesService.fullfilSale(saleId);
  res.status(status.SUCCESS).json({updated: true});
});

module.exports = salesRouter;
