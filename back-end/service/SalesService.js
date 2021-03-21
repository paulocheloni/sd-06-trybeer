const salesModel = require('../model/Sales');

// Return all sales
const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

// store request
const storeRequest = async (userId, totalPrice, address, number) => {
  const sales = await salesModel.storeRequest(userId, totalPrice, address, number);
  return sales;
};

module.exports = {
  getAll,
  storeRequest,
};
