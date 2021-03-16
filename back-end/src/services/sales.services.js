const { utils } = require('../models');

const getById = async (userId) => utils.getByFilter({
  table: 'sales',
  filter: 'user_id',
  value: userId,
});

module.exports = {
  getById,
};
