const { Router } = require('express');
const getOrders = require('../service/orderService');

const orderController = Router();

const SUCCESS = 200;

orderController.post('/', async (req, res) => {
  const { user_id } = req.body;
  const userOrder = await getOrders(user_id);
  res.status(SUCCESS).json(userOrder[0]);
});

module.exports = orderController;