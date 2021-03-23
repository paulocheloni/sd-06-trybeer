const { Router } = require('express');
const ordersProductsService = require('../services/OrdersProductsService');
// const { isUserLoggedIn } = require('../middlewares/validations');

const OrdersProductsRouter = new Router();

OrdersProductsRouter.post('/', async (req, res, next) => {
  try {
    const {
      cart,
    } = req.body;

    cart.forEach(async (item) => {
      await ordersProductsService.createOrderProductService({ item });
    });
    return res.status(201).json({ message: 'OK' });
  } catch (err) {
    next(err);
  }
});

OrdersProductsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const order = await ordersProductsService.getById(id);
  res.status(200).json(order);
});

module.exports = OrdersProductsRouter;