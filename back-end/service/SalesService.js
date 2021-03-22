const salesModel = require('../model/Sales');

// Return all sales
const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

// Return Sale by UserID
const getByUserId = async (userId) => {
  const sales = await salesModel.getByUserId(userId);
  return sales;
};

// Return Sale Products by SaleID
const getSalesProductsBySaleId = async (saleId) => {
  const saleProducts = await salesModel.getSalesProductsBySaleId(saleId);
  return saleProducts;
};

// store request
const storeRequest = async (userId, totalPrice, address, number) => {
  const sales = await salesModel.storeRequest(userId, totalPrice, address, number);
  return sales;
};

module.exports = {
  getAll,
  getByUserId,
  getSalesProductsBySaleId,
  storeRequest,
};
