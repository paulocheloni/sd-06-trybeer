const ordersProductsModel = require('../models/OrdersProductsModel');

const createOrderProductService = async ({ item }) => {
  await ordersProductsModel
  .createOrderProduct({ item });
};

const getAll = async () => ordersProductsModel.getAll();

const getById = async (id) => ordersProductsModel.getById(id);

module.exports = {
  createOrderProductService,
  getAll,
  getById,
};