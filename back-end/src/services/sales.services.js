const { sales } = require('../models');

const getByUser = async (userId) => sales.getByUser(userId);
const getById = async (saleId) => sales.getById(saleId);

module.exports = {
  getByUser,
  getById,
};
