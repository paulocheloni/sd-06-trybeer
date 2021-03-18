const utils = require('./utils.models');

const getByUser = async (userId) => utils.getByFilter({
  table: 'sales',
  filter: 'user_id',
  value: userId,
});

module.exports = {
  getByUser,
};
