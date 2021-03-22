const ordersProductsModel = require('../models/OrdersProductsModel');

const createOrderProductService = async ({ item }) => {
  await ordersProductsModel
  .createOrderProduct({ item });
};

const getAll = async () => ordersProductsModel.getAll();

module.exports = {
  createOrderProductService,
  getAll,
};