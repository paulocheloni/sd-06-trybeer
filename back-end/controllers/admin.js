const { Router } = require('express');
const services = require('../services/admin');

const adminRouter = new Router();

adminRouter.get('/orders', async (req, res) => {
  const orderSales = await services.getAllOrders();

  return res.status(200).json(orderSales);
});

module.exports = adminRouter;