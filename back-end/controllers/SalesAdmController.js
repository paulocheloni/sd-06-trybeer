const { Router } = require('express');

const validateToken = require('../middlewares/validateToken');
const { getAllOrders } = require('../models/SalesService');

const routerSalesAdm = Router();

routerSalesAdm.get('/', validateToken, async (req, res) => {
  const { role } = res.locals;
  if (role === 'administrator') {
    const [orders] = await getAllOrders();
    res.status(200).json({ orders });
  }
  res.status(404).json({ message: 'something went wrong' });
});

module.exports = routerSalesAdm;
