const { Router } = require('express');
const validateToken = require('../middlewares/validateToken');
const { createOne } = require('../models/SalesService');

const routerSales = Router();

routerSales.post('/', validateToken, async (req, res) => {
  const { price, address, number, status } = req.body;
  const { userId } = res.locals;
  console.log(userId, price, address, number, status);
  const { insertId } = await createOne({ userId, price, address, number, status });
  res.status(201).json({ sale: {
    saleId: insertId, userId, price, address, number, status, 
  } });
});

module.exports = routerSales;

// {price: 2.2, address: "asd", number: "12", status: "Pendente"}