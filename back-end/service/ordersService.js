const ordersModel = require('../model/ordersModel');

const createOrders = async (userId, objOrder) => {
  ordersModel.createOrders(userId, objOrder);
};

const getOrders = async (userId) => {
  const sales = ordersModel.getOrders(userId);
  return sales;
};

const getLastSaleId = async () => {
  const lastOrderId = ordersModel.getLastSaleId();
  return lastOrderId;
};

const createProductsSales = async (productData) => {
    ordersModel.createProductsSales(productData);
};

const getSaleById = async (saleId) => {
  // console.log('entrei no meu service', saleId);
  const saleById = await ordersModel.getSaleById(saleId);
  return saleById;
};

const getSaleProductById = async (saleId) => {
  // console.log('entrei no meu service', saleId);
  const saleProductById = await ordersModel.getSaleProductById(saleId);
  return saleProductById;
};

module.exports = {
  createOrders,
  getOrders,
  getLastSaleId,
  createProductsSales,
  getSaleById,
  getSaleProductById,
};
