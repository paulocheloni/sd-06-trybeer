const ordersProductsModel = require('../models/OrdersProductsModel');

const createOrderProductService = async ({saleId, item}) => {
  console.log(saleId, item);
  await ordersProductsModel
  .createOrderProduct({ saleId, item });
}

const getAll = async () => await ordersModel.getAll();

module.exports = {
  createOrderProductService,
  getAll,
};