const models = require('../models/orders');

const createOrder = async (id, totalPrice, streetInput, houseNumberInput) => {
  const { insertId } = await models.createOrder(id, totalPrice, streetInput, houseNumberInput);
  
  return insertId;
};

const updateSalesProduct = async (productsToAdd) => {
  models.updateSalesProduct(productsToAdd);
};

const getOrdersByUser = async (id) => models.getOrdersByUser(id);

module.exports = {
  createOrder,
  updateSalesProduct,
  getOrdersByUser,
};