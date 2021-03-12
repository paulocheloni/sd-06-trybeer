const salesModel = require('../model/salesModel');
const Validations = require('./validations');

const getAll = async () => {
  const result = await salesModel.getAll();

  return result;
};

const createSale = async (reqBody, token) => {
  const validateToken = await Validations.tokenValidation(token);
  const validateSale = await Validations.saleValidation(reqBody);
  const validateAddress = Validations.addressValidation(reqBody);

  if (validateToken.payload) return validateToken;
  if (validateSale.payload) return validateSale;
  if (validateAddress.payload) return validateAddress;

  await salesModel.createSale(reqBody);
  const result = await salesModel.getSaleByUserId(reqBody);
  return result;
};

module.exports = {
  createSale,
  getAll,
};
