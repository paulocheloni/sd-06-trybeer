const utils = require('./utils.models');

const getAll = async () => {
  const results = await utils.getAll('products');
  return results;
};

module.exports = {
  getAll,
};
