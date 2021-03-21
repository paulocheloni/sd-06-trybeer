const { ProductsModel } = require('../model');

const getAllProducts = async () => await ProductsModel.getAllProducts();

module.exports = {
  getAllProducts,
};
