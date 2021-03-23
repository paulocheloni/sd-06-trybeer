const { Router } = require('express');
const orderServices = require('../services/ordersServices');
const { ok } = require('../utilities/variables');

const orderRouter = Router();

// Get all orders
orderRouter.get('/get-all', async (req, res) => {
  const users = await orderServices.getAll();
  res.status(ok).json(users);
});

// Create Order
orderRouter.post('/create', async (req, res) => {
  const { priceTotal, date, userID, address, number } = req.body;
  await orderServices.create({ priceTotal, date, userID, address, number });
  res.status(ok).json(priceTotal, date, userID, address, number);
});

module.exports = orderRouter;