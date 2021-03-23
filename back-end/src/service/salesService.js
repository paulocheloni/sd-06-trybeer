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
console.log('body', reqBody)
  console.log(result)

  return result;
};

const getSaleById = async (id, token) => {
  const validateToken = await Validations.tokenValidation(token);

  if (validateToken.payload) return validateToken;

  const preResult = await salesModel.getSaleById(id);

  const result = {
    userId: preResult[0].user_id,
    saleId: preResult[0].sale_id,
    createdAt: preResult[0].sale_date,
    address: preResult[0].delivery_address,
    saleNumber: preResult[0].delivery_number,
    status: preResult[0].status,
    totalPrice: preResult[0].total_price,
    products: preResult.map((product) => ({
      id: product.product_id,
      name: product.name,
      quantity: product.quantity,
      photo: product.url_image,
      price: product.price
    }))
  };

  console.log(result)

  return result;
};

module.exports = {
  createSale,
  getAll,
  getSalesByUserId,
  getSaleById
};
