const { getAllProducts, saleProducts } = require('../models/productModel');

const findAllProducts = async () => getAllProducts();
const addSaleProducts = async (sale) => await saleProducts(sale);

module.exports = {
  findAllProducts,
  addSaleProducts
};
