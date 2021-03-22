const { Router } = require('express');
const services = require('../services/orders');

const ordersRouter = new Router();

ordersRouter.post('/', async (req, res) => {
  const { email, totalPrice, street, checkoutProducts } = req.body;
  
  const result = await services.createOrder(email, totalPrice, street, checkoutProducts);

  return res.status(200).json(result.id);
});

module.exports = ordersRouter;