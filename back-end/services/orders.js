const models = require('../models/orders');

const createOrder = async (id, totalPrice, streetInput, houseNumberInput) => {
  const { insertId } = await models.createOrder(id, totalPrice, streetInput, houseNumberInput);
  
  return insertId;
};

const updateSalesProduct = async (insertId, checkoutProducts) => {
  models.updateSalesProduct(insertId, checkoutProducts);
};

const getOrdersByUser = async (id) => models.getOrdersByUser(id);

const getOrderById = async (orderId) => models.getOrderById(orderId);

const getProductsByOrderId = async (orderId) => models.getProductsByOrderId(orderId);

const markAsDelivered = async (orderId) => models.markAsDelivered(orderId);

const getOrderDetailsById = async (id) => models.getOrderDetailsById(id);

module.exports = {
  createOrder,
  updateSalesProduct,
  getOrdersByUser,
  getOrderById,
  getProductsByOrderId,
  markAsDelivered,
  getOrderDetailsById,
};
