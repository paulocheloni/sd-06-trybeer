const products = require('../models/Products');

const getAll = async () => {
  const productsArray = await products.getAll();

  return productsArray;
};

module.exports = {
  getAll,
};