const { utils } = require('../models');

const getAll = async () => utils.getAll('sales');

module.exports = {
  getAll,
};
