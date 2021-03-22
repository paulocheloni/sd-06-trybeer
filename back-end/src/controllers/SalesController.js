const { Router } = require('express');
const status = require('../utils/statusDictionary');
const SalesService = require('../services/SalesService');

const salesRouter = new Router();

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
