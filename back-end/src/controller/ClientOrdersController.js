const { Router } = require('express');
const rescue = require('express-rescue');
const LoginService = require('../service/LoginService');
const OrdersService = require('../service/OrdersService');

const router = new Router();

const OK = 200;
const BAD_REQUEST = 404;

router.post('/', rescue(async (req, res) => {
  try {
    const user = req.body;
    const { id: userId } = await LoginService.getByEmail(user.email);
    const orders = await OrdersService.getAll(userId);
    console.log(orders);

    return res.status(OK).json(orders);
  } catch (error) {
    return res.status(BAD_REQUEST).json({ message: 'No orders found' });
  }
}));

module.exports = router;
