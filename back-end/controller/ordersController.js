const { Router } = require('express');
const rescue = require('express-rescue');
const ordersService = require('../service/ordersService');
const { validateToken } = require('../middlewares/tokenValidation');

const router = Router();
const CREATED = 201;

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

  module.exports = router;