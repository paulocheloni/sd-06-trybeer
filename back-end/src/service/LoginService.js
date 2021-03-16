const { LoginModel } = require('../model');
const { generateNewToken } = require('../utils');

const generateToken = (email) => generateNewToken(email);

const isUserAdmin = async (email) => LoginModel.isUserAdmin(email);

module.exports = {
  generateToken,
  isUserAdmin,
};
