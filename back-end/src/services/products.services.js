const { products } = require('../models');

const getAll = async () => {
  const allProducts = await products.getAll();
  return allProducts; 
};

module.exports = {
  getAll,
};
