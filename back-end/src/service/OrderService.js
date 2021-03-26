const { OrderModel } = require('../model');

const getAllOrders = async (id) => OrderModel.getAllOrders(id);

const getOrdersByDetails = async (id) => OrderModel.getOrdersByDetails(id);

const updateStatusOrder = async (status, id) => OrderModel.updateStatusOrder(status, id);

module.exports = {
  getOrdersByDetails,
  getAllOrders,
  updateStatusOrder,
};
