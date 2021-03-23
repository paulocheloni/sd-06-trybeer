const { Router } = require('express');
const Model = require('../models/orderModel');

const orderRouter = Router();

orderRouter.post('/', async (req, res) => {
  const { priceTotal, date, userID, address, number } = req.body;
 await Model.create({ priceTotal, date, userID, address, number });
 
  res.status(200).json({ message: 'ok' });
});

module.exports = orderRouter;