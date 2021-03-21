const ordersModel = require('../model/ordersModel');

const createOrders = async (userId, objOrder) => {
  ordersModel.createOrders(userId, objOrder);
};

const getOrders = async (userId) => {
  const sales = ordersModel.getOrders(userId);
  return sales;
};

const getLastSaleId = async () => {
  const lastOrderId = ordersModel.getLastSaleId();
  return lastOrderId;
};

// const createProductsSales = async () => ordersModel.createProductsSales();

module.exports = {
  createOrders,
  getOrders,
  getLastSaleId,
  // createProductsSales,
};
