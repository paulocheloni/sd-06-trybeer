const productsModel = require('../model/productsModel');

const getAllProducts = async () => productsModel.getAllProducts();

// const getProductById = async (productId) => {
//   // console.log('entrei no meu service', saleId);
//   const productById = await productsModel.getProductById(productId);
//   return productById;
// };

module.exports = {
  getAllProducts,
  // getProductById,
};
