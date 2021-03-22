const SalesModel = require('../models/SalesModel');

const getSaleById = async (saleId) => {
  const sale = await SalesModel.getSaleById(saleId);
  const saleProducts = await SalesModel.getSaleProducts(saleId)
  const responsePayload = {
    sale: sale[0],
    saleProducts
  }
  return responsePayload;
};

const fullfilSale = async (saleId) => {
  const sale = await SalesModel.fullfilSale(saleId);
  return sale;
};

module.exports = {
  getSaleById,
  fullfilSale
};