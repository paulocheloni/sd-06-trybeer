const models = require('../models/users');

const getUser = async (email, password) => models.getUser(email, password);

const updateUser = async (name, email) => models.updateUser(name, email);

module.exports = {
  getUser,
  updateUser,
};