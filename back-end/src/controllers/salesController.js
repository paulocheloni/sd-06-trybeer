const { Router } = require('express');
const status = require('../utils/statusDictionary');

const salesService = require('../services/salesService');

const salesRouter = new Router();

salesRouter.get('/', async (req, res) => {
  const result = await salesService.getAllSales();
  res.status(status.SUCCESS).json(result);
});

salesRouter.get('/:id', async (req, res) => {
  const { id } = req.param;
  const result = salesService.getSalesById(id);
  res.status(status.SUCCESS).json(result);
});

module.exports = salesRouter;
