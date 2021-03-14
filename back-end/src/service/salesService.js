const salesModel = require('../model/salesModel');
const Validations = require('./validations');

const getAll = async (token) => {
  const validateToken = await Validations.tokenValidation(token);
  
  if (validateToken.payload) return validateToken;
  
  const result = await salesModel.getAll();
  return result;
};

const getSalesByUserId = async (id, token) => {
  const validateToken = await Validations.tokenValidation(token);

  if (validateToken.payload) return validateToken;

  const result = await salesModel.getSalesByUserId(id);
  return result;
};

const createSale = async (reqBody, token) => {
  const validateToken = await Validations.tokenValidation(token);
  const validateSale = await Validations.saleValidation(reqBody);
  const validateAddress = Validations.addressValidation(reqBody);

  if (validateToken.payload) return validateToken;
  if (validateSale.payload) return validateSale;
  if (validateAddress.payload) return validateAddress;

  const result = await salesModel.createSale(reqBody);

  return result;
};

module.exports = {
  createSale,
  getAll,
  getSalesByUserId,
};
