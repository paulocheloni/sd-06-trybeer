const { Router } = require('express');
const getAllOrders = require('../service/adminOrderService');

const adminOrdersController = Router();

const SUCCESS = 200;

adminOrdersController.get('/', async (_req, res) => {
  const allOrders = await getAllOrders();
  res.status(SUCCESS).send(allOrders);
});

module.exports = adminOrdersController;
