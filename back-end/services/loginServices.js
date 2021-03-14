const loginModels = require('../models/loginModels');

const validateLogin = async (email, password) => {
  const user = await loginModels.validateLogin(email, password);
  const { password: _, ...userWithoutPassword } = user[0];
  return userWithoutPassword;
};

module.exports = {
  validateLogin,
};