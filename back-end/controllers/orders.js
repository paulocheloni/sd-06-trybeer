const { Router } = require('express');
const services = require('../services/orders');
const validateToken = require('../auth/validateToken');

const ordersRouter = new Router();

ordersRouter.post('/', validateToken, async (req, res) => {
  const { totalPrice, streetInput, houseNumberInput, checkoutProducts } = req.body;
  const { id: userId } = req.user;
  
  const insertId = await services.createOrder(userId, totalPrice, streetInput, houseNumberInput);
  const productsToAdd = checkoutProducts.map(
    ({ id: productId, productQuantity }) => [insertId, productId, productQuantity],
  );

  await services.updateSalesProduct(productsToAdd);

  return res.status(200).json({ message: 'Order created!' });
});

ordersRouter.get('/', validateToken, async (req, res) => {
  const { id } = req.user;

  const orders = await services.getOrdersByUser(id);

  return res.status(200).json(orders);
});

module.exports = ordersRouter;