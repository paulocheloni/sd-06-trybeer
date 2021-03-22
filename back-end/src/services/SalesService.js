const SalesModel = require('../models/SalesModel');

const getSaleById = async (saleId) => {
  const sale = await SalesModel.getSaleById(saleId);
  const saleProducts = await SalesModel.getSaleProducts(saleId)
  const responsePayload = {
    sale,
    saleProducts
  }
  return responsePayload;
};

module.exports = {
  getSaleById,
};