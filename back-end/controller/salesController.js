const { Router } = require('express');
const { getAllSales, createSale, createSaleProduct } = require('../models/salesModel');

const salesRouter = new Router();

salesRouter.get('/', async (req, res) => {
  const allSales = await getAllSales();

  res.status(200).json(allSales);
});

salesRouter.post('/', async (req, res) => {
  const { userId, totalPrice, deliveryAddress, deliveryNumber } = req.body;
  
  const obj = {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  };
  const [{ insertId }] = await createSale(obj);

  return res.status(201).json(insertId);
});

salesRouter.post('/:id', async (req, res) => {
  const { saleId, productId, quantity } = req.body;
  
  const obj = {
    saleId,
    productId,
    quantity,
  };
  await createSaleProduct(obj);

  return res.status(201).json(obj);
});

module.exports = salesRouter;
