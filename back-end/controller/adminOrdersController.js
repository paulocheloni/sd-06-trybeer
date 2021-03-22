const { Router } = require('express');
const getAllOrders = require('../service/adminOrderService');

const adminOrdersController = Router();

const SUCCESS = 200;

adminOrdersController.get('/', async (_req, res) => {
  const allOrders = getAllOrders();
  res.status(SUCCESS).json(allOrders);
});

module.exports = adminOrdersController;
