const { Router } = require('express');
const ordersService = require('../services/OrdersService');
const ordersProductsService = require('../services/OrdersProductsService');

const AdminRouter = new Router();

AdminRouter.get('/orders', async (_req, res, next) => {
  try {
    const orders = await ordersService.getAll();
    console.log(orders);
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

AdminRouter.get('/orders/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await ordersProductsService.getByIdAdmin(id);
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
});

AdminRouter.put('/orders/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await ordersService.alter({ id, status });
    res.status(200).json({ message: 'OK' });
  } catch (err) {
    next(err);
  }
});

module.exports = AdminRouter;
