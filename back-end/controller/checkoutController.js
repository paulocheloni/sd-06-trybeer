const { Router } = require('express');
const OrdersDone = require('../service/checkoutService');
const { checkAuthorization } = require('../middleware/checkAuthorization');

const checkoutController = Router();

const SUCCESS = 200;

checkoutController.put('/', checkAuthorization, async (req, res) => {
  const sale = req.body;
  await OrdersDone(sale);
  res.status(SUCCESS).json({ checkout: { sale, message: 'Compra realizado com sucesso!' } });
});

module.exports = checkoutController;