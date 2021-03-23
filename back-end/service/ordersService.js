const ordersModel = require('../model/ordersModel');

const createOrders = async (userId, objOrder) => ordersModel.createOrders(userId, objOrder);

const getOrders = async (userId) => {
  const sales = ordersModel.getOrders(userId);
  return sales;
};

const getLastSaleId = async () => {
  const lastOrderId = ordersModel.getLastSaleId();
  return lastOrderId;
};

const createProductsSales = async (mySaleProducts) => {
    ordersModel.createProductsSales(mySaleProducts);
};

const getSaleDetail = async (saleId) => {
  const saleDetail = await ordersModel.getSaleDetail(saleId);
  // console.log('entrei no service', saleDetail);
  return saleDetail;
};

module.exports = {
  createOrders,
  getOrders,
  getLastSaleId,
  createProductsSales,
  getSaleDetail,
};
