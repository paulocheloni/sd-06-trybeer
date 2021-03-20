const { createSale } = require('../models/SalesModel');
const status = require('../utils/statusDictionary');
const messages = require('../utils/messageDictionary');
const { ThrowError } = require('../middlewares/errorHandler/errorHandler');
const SalesModel = require('../models/SalesModel');

const createSaleService = async (payload) => {
  if (!payload) throw new ThrowError(status.BAD_REQUEST, messages.NO_EMPTY_FIELDS);
  return createSale(payload);
};

const getAllSales = async () => {
  const sales = await SalesModel.getAllSales();
  return sales;
};

module.exports = {
  getAllSales,
  createSaleService,
};
