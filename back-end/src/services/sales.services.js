const { utils } = require('../models');

const getById = async (id) => utils.getByFilter('sales', 'user_id', id);

module.exports = {
  getById,
};
