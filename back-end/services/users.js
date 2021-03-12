const models = require('../models/users');

const getUser = async (email, password) => models.getUser(email, password);

module.exports = {
  getUser,
};