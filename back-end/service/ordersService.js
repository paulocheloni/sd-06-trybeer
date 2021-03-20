const ordersModel = require('../model/ordersModel');

const createOrders = async (userId, objOrder) => {
  ordersModel.createOrders(userId, objOrder);
};

const getOrders = async (userId) => {
  const sales = ordersModel.getOrders(userId);
  return sales;
};

// const createProductsSales = async () => ordersModel.createProductsSales();

module.exports = {
  createOrders,
  getOrders,
  // createProductsSales,
};
