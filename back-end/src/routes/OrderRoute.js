const { Router } = require('express');

const { OrderController } = require('../controller');
const { authorization } = require('../middleware');

const OrderRoute = Router();

OrderRoute.get('/:id',
  authorization,
  OrderController.getOrdersByDetails);

OrderRoute.put('/:id',
  OrderController.updateStatusOrder);

OrderRoute.get('/',
  authorization,
  OrderController.getAllOrders);

module.exports = OrderRoute;