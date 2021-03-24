const ordersProductsModel = require('../models/OrdersProductsModel');

const createOrderProductService = async ({ item }) => {
  await ordersProductsModel
  .createOrderProduct({ item });
};

const getAll = async () => ordersProductsModel.getAll();

const getById = async (id) => ordersProductsModel.getById(id);

const getByIdAdmin = async (id) => ordersProductsModel.getByIdAdmin(id);

module.exports = {
  createOrderProductService,
  getAll,
  getById,
  getByIdAdmin,
};