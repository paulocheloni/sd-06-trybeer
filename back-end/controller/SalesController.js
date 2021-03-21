const { Router } = require('express');
const { verifyLogin } = require('../middlewares/authToken');
const SalesService = require('../service/SalesService');
const { OK } = require('../schema/statusSchema');

const SalesController = new Router();

// Get All Sales
SalesController.get('/', verifyLogin, async (req, res) => {
  const sales = await SalesService.getAll();
  res.status(OK).json(sales);
});

// Store request
SalesController.post('/checkout', verifyLogin, async (req, res) => {
  const { userId, totalPrice, address, number } = req.body;
  await SalesService.storeRequest(userId, totalPrice, address, number);
  res.status(OK).json({ message: 'Compra realizada com sucesso!' });
});

module.exports = SalesController;