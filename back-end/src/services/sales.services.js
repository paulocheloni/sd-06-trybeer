const { utils, sales } = require('../models');
const { authNewSale, authDetailsSale } = require('../schemas');

const getById = async (userId) => utils.getByFilter({
  table: 'sales',
  filter: 'user_id',
  value: userId,
});

const updateById = async (saleId, userRole) => {
  const error = {
    invalidCredentials: 'C_ERR_INVALID_CRED',
  };
  if (userRole !== 'administrator') throw new Error(error);
  const [result] = await utils.getByFilter({
    table: 'sales',
    filter: 'id',
    value: saleId,
  });
  if (result.status && result.status !== 'Entregue') {
    await sales.updateSaleStatus(saleId);
    return { status: 'OK', message: 'Success. Status changed to \'Entregue\'' };
  }
};

const validateTotalPrice = async (sale, salePrice) => {
  const promise = sale.map(async (prod) => utils.queryById('products', prod.productId));
  const products = await Promise.all(promise);

  const totalPrice = Number(sale.reduce((acc, { productId, quantity }) =>
    acc + Number(products.find((el) => el.id === productId).price) * quantity, 0).toFixed(2));

  if (Number(salePrice) !== totalPrice) throw new Error('C_ERR_PRICE');
};

const create = async (body, userId) => {
  const { sale, salePrice } = body;
  authNewSale(body, userId);
  await validateTotalPrice(sale, salePrice);
  await sales.insertNewSale(body, userId);
};

const filterByUserId = async (saleId, userId, userRole) => {
  const [result] = await utils.getByFilter({
    table: 'sales',
    filter: 'id',
    value: saleId,
  });
  authDetailsSale(result, userId, userRole);
  const addSaleDetails = await utils.getByFilter({
    table: 'sales_products',
    filter: 'sale_id',
    value: saleId,
  });
  result.sale = addSaleDetails;
  return result;
};

module.exports = {
  create,
  updateById,
  filterByUserId,
  getById,
};
