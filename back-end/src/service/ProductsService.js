const { ProductsModel } = require('../model');

const selectProducts = async () => {
const listProducts = await ProductsModel.selectProducts();
return listProducts;
};

module.exports = { selectProducts };
