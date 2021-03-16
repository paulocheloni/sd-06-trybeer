const { sales } = require('../models');

const getById = async (userId) => sales.getById(userId);

module.exports = {
  getById,
};
