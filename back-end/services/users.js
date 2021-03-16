const models = require('../models/users');

const getUser = async (email, password) => models.getUser(email, password);

const addUser = async (name, email, password, role) => models.addUser(name, email, password, role);

const updateUser = async (name, email) => models.updateUser(name, email);

module.exports = {
  getUser,
  addUser,
  updateUser,
};
