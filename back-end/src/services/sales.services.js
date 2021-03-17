const { utils, sales } = require('../models');
const { authNewSale } = require('../schemas');

const validateTotalPrice = async (sale, salePrice) => {
  const promise = sale.map(async (prod) => utils.queryById('products', prod.productId));
  const products = await Promise.all(promise);

  const totalPrice = Number(sale.reduce((acc, { productId, quantity }) =>
    acc + Number(products.find((el) => el.id === productId).price) * quantity, 0).toFixed(2));

  if (salePrice !== totalPrice) throw new Error('C_ERR_PRICE');
};

const create = async (body, userId) => {
  const { sale, salePrice } = body;
  authNewSale(body, userId);
  await validateTotalPrice(sale, salePrice);
  await sales.insertNewSale(body, userId);
};

module.exports = {
  create,
};
