const jwt = require('jsonwebtoken');
const { createSale } = require('../models/Sales');

const secret = 'T1f7C0e8E1p9I8h8M';
const STATUS_OK = 200;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const SalesService = async (req, res, _next) => {
  try { 
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secret);
    const { id } = decoded.data;
    const { total, deliveryAdress, deliveryNumber, saleDate } = req.body;
    const sale = await createSale(id, total, deliveryAdress, deliveryNumber, saleDate);
    res.status(STATUS_OK).json(sale);
  } catch (error) {
    console.log(error.message);
    return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  SalesService,
};