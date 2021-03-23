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

// Get All Sales by User
SalesController.get('/user/:userId', verifyLogin, async (req, res) => {
  const { userId } = req.params;
  const sales = await SalesService.getByUserId(userId);
  return res.status(OK).json(sales);
});

// Get All Sales Products by saleID
SalesController.get('/products/:saleId', verifyLogin, async (req, res) => {
  const { saleId } = req.params;
  const saleProducts = await SalesService.getSalesProductsBySaleId(saleId);
  return res.status(OK).json(saleProducts);
});

// Store request
SalesController.post('/checkout', verifyLogin, async (req, res) => {
  const { userId, totalPrice, address, number } = req.body;
  await SalesService.storeRequest(userId, totalPrice, address, number);
  res.status(OK).json({ message: 'Compra realizada com sucesso!' });
});

module.exports = SalesController;