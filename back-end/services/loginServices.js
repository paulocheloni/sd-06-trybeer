const loginModels = require('../models/loginModels');

const validateLogin = async (email, password) => {
  const result = await loginModels.validateLogin(email, password);
  return result;
};

module.exports = {
  validateLogin,
};