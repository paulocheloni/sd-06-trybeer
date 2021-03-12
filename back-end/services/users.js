const models = require('../models/users');

const getUser = async (email, password) => {
  return await models.getUser(email, password);
}

module.exports = {
  getUser,
}