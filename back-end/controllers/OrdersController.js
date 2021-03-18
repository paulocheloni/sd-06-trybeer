const { Router } = require('express');
const ordersService = require('../services/OrdersService');
const { isUserLoggedIn } = require('../middlewares/validations');

const OrdersRouter = new Router();

OrdersRouter.get('/', isUserLoggedIn, async (_req, res, next) => {
  try {
    const orders = await ordersService.getAll();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

OrdersRouter.post('/', async (req, res, next) => {
  try {
    const {
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
    } = req.body;
    const newOrder = await ordersService
    .createOrderService({ userId, totalPrice, deliveryAddress, deliveryNumber });
    return res.status(201).json({ newOrder });
  } catch (err) {
    next(err);
  }
});

module.exports = OrdersRouter;