const { Router } = require('express');
const status = require('../utils/statusDictionary');
const SalesService = require('../services/SalesService');

const salesRouter = new Router();

salesRouter.get('/admin/details/:id', async (req, res) => {
  const {id: saleId} = req.params;
  const responsePayload = await SalesService.getSaleById(saleId);
  res.status(status.SUCCESS).json({responsePayload});
});

module.exports = salesRouter;
