const { OrderModel } = require('../model');

const getAllOrders = async (id) => OrderModel.getAllOrders(id);

const getOrdersByDetails = async (id) => OrderModel.getOrdersByDetails(id);

module.exports = {
  getOrdersByDetails,
  getAllOrders,
};
