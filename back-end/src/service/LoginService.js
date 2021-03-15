const { LoginModel, UserModel } = require('../model');
const { generateNewToken } = require('../utils');

const generateToken = (email) => generateNewToken(email);

const userRole = async (email) => {
  UserModel.getUserByEmail
};

module.exports = {
  generateToken,
  userRole,
};
