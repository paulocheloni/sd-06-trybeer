const productsModels = require('../models/productsModels');

// Get all products
const getAll = async () => {
  const products = await productsModels.getAll();
  return products;
};

module.exports = { getAll };
