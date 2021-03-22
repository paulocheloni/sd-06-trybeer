const jwt = require('jsonwebtoken');
const { createSale, getAll } = require('../models/Sales');

const secret = 'T1f7C0e8E1p9I8h8M';
const STATUS_OK = 200;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const SalesService = async (req, res, _next) => {
  try { 
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secret);
    const { id } = decoded.data;
    const { total, deliveryAddress, deliveryNumber } = req.body;
    const sale = await createSale(id, total, deliveryAddress, deliveryNumber);
    res.status(STATUS_OK).json(sale);
  } catch (error) {
    console.log(error.message);
    return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

const getAllSales = async (req, res, _next) => {
  const sales = await getAll();
  const formatedSales = sales.map((sale) => ({
    id: sale.id,
    deliveryAddress: sale.delivery_address,
    deliveryNumber: sale.delivery_number,
    totalPrice: sale.total_price,
    saleDate: sale.sale_date,
    status: sale.status,
}));
  return res.status(STATUS_OK).json(formatedSales);
};

module.exports = {
  SalesService,
  getAllSales,
};