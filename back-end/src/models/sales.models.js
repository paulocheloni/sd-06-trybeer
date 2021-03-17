const utils = require('./utils.models');

const getByUser = async (userId) => utils.getByFilter({
  table: 'sales',
  filter: 'user_id',
  value: userId,
});

const getById = async (saleId) => {
  const [result] = await utils.getByFilter({
    table: 'sales',
    filter: 'id',
    value: saleId,
  });
  return result;
};

module.exports = {
  getByUser,
  getById,
};
