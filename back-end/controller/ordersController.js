const { Router } = require('express');
const rescue = require('express-rescue');
const ordersService = require('../service/ordersService');
const { validateToken } = require('../middlewares/tokenValidation');

const router = Router();
const CREATED = 201;
const OK = 200;

router.post('/orders', validateToken, rescue(async (req, res) => {
    const { totalPrice, address, number, date, orderStatus } = req.body.objOrder;
    const userId = req.user.id;
    const orderData = {
      totalPrice,
      address,
      number,
      date,
      orderStatus,
    };
    await ordersService.createOrders(userId, orderData);

    res.status(CREATED).json({ message: 'Compra realizada com sucesso!' });
  }));

  router.get('/orders', validateToken, rescue(async (req, res) => {
    const userId = req.user.id;
    const sales = await ordersService.getOrders(userId);
    res.status(OK).json(sales);
  }));

  router.get('/lastorderid', validateToken, rescue(async (req, res) => {
    const lastSaleId = await ordersService.getLastSaleId();
    // console.log('última id', lastSaleId);
    res.status(OK).json(lastSaleId);
  }));

  module.exports = router;