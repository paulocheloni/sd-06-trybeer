const { Router } = require('express');
const ordersProductsService = require('../services/OrdersProductsService');
const { isUserLoggedIn } = require('../middlewares/validations');

const OrdersProductsRouter = new Router();

// OrdersRouter.get('/', isUserLoggedIn, async (_req, res, next) => {
//   try {
//     const orders = await ordersService.getAll();
//     res.status(200).json(orders);
//   } catch (err) {
//     next(err);
//   }
// });

OrdersProductsRouter.post('/', async (req, res, next) => {
  try {
    const {
      saleId,
      cart
    } = req.body;
    cart.forEach(async (item) => {
      await ordersProductsService.createOrderProductService({ saleId, item });
    });
    return res.status(201).json({ message: 'OK' });
  } catch (err) {
    next(err);
  }
});

module.exports = OrdersProductsRouter;