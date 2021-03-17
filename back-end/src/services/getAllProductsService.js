const Products = require('../models/Products');

// Componente de repostas https
const { status, messages } = require('../util/dataStatus');

const { sucess, unauthorized } = status;
const { emailExistente } = messages;

const ZERO = 0;

const getAllProducts = async () => {
  const products = await Products.getAllProducts();

  return { status: sucess, message: products };
};

module.exports = getAllProducts;