const { Router } = require('express');
const services = require('../services/orders');
const validateToken = require('../auth/validateToken');

const ordersRouter = new Router();

ordersRouter.post('/', validateToken, async (req, res) => {
  const { totalPrice, streetInput, houseNumberInput, checkoutProducts } = req.body;
  const { id: userId } = req.user;
  
  const insertId = await services.createOrder(userId, totalPrice, streetInput, houseNumberInput);

  await services.updateSalesProduct(insertId, checkoutProducts);

  return res.status(200).json({ message: 'Order created!' });
});

ordersRouter.get('/', validateToken, async (req, res) => {
  const { id } = req.user;

  const orders = await services.getOrdersByUser(id);

  return res.status(200).json(orders);
});

ordersRouter.get('/:orderId', validateToken, async (req, res) => {
  const { orderId } = req.params;

  const order = await services.getOrderById(orderId);
  const orderProducts = await services.getProductsByOrderId(orderId);

  return res.status(200).json({ order, orderProducts });
});

ordersRouter.put('/:orderId', validateToken, async (req, res) => {
  const { orderId } = req.params;

  await services.markAsDelivered(orderId);

  return res.status(200).json({ message: 'order marked as delivered' });
});

module.exports = ordersRouter;