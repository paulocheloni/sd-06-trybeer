const jwt = require('jsonwebtoken');
const { create, getAll } = require('../models/Sales');

const secret = 'T1f7C0e8E1p9I8h8M';
const STATUS_OK = 200;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const createSale = async (req, res, _next) => {
  try { 
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secret);
    const { id } = decoded.data;
    const { total, deliveryAddress, deliveryNumber, saleDate } = req.body;
    const sale = await create(id, total, deliveryAddress, deliveryNumber, saleDate);
    res.status(STATUS_OK).json(sale);
  } catch (error) {
    console.log(error.message);
    return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

const getAllSales = async () => {
  const salesArray = await getAll();
  // const formatedProducts = productsArray.map((product) => ({
  //     id: product.id,
  //     name: product.name,
  //     price: product.price,
  //     quantity: 0,
  //     urlImage: formatUrl(product.url_image),
  // }));

  return salesArray;
};

module.exports = {
  createSale,
  getAllSales
};