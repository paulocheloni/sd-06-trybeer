const { sales, utils } = require('../models');
const { authDetailsSale } = require('../schemas');

const getByUser = async (userId) => sales.getByUser(userId);

const getById = async (saleId, userId) => {
  const [result] = await utils.getByFilter({
    table: 'sales',
    filter: 'id',
    value: saleId,
  });
  authDetailsSale(result, userId);
  return result;
};

module.exports = {
  getByUser,
  getById,
};
