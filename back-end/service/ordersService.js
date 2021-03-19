const ordersModel = require('../model/ordersModel');

const createOrders = async () => ordersModel.createOrders();
const createProductsSales = async () => ordersModel.createProductsSales();

module.exports = {
  createOrders,
  createProductsSales,
};
