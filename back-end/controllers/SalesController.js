const { Router } = require('express');

const validateToken = require('../middlewares/validateToken');
const { createOne, getAllByUserId } = require('../models/SalesService');

const routerSales = Router();

routerSales.post('/', validateToken, async (req, res) => {
  const { price, address, number, status } = req.body.order;
  const { userId } = res.locals;
  console.log(userId, price, address, number, status);
  const { insertId, date } = await createOne({ userId, price, address, number, status });
  res.status(201).json({ order: {
    saleId: insertId, userId, price, address, number, status, date,
  } });
});

routerSales.get('/', validateToken, async (req, res) => {
  console.log(res.locals);
  const { userId } = res.locals;
  const [orders] = await getAllByUserId(userId);
  console.log(orders, 'orders');
  res.status(200).json({ orders });
});

module.exports = routerSales;

// {price: 2.2, address: "asd", number: "12", status: "Pendente"}
