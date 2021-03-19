const { Router } = require('express');
const { OrdersDone, salesProduct } = require('../service/checkoutService');
const { checkAuthorization } = require('../middleware/checkAuthorization');

const checkoutController = Router();

const SUCCESS = 200;

checkoutController.post('/', async (req, res) => {
  const { sale, product_id, quantity } = req.body;
  const insertId = await OrdersDone(sale);
  console.log(insertId)
  await salesProduct(insertId, product_id, quantity)
  res.status(SUCCESS).json({ message: 'Compra realizado com sucesso!' });
});

module.exports = checkoutController;