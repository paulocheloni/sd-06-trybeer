const { UserModel } = require('../model');
const { generateNewToken } = require('../utils');

const generateToken = async (email) => generateNewToken(email);

// const isUserAdmin = async (email) => LoginModel.isUserAdmin(email);
const userRole = async (email) => {
  await UserModel.getUserByEmail(email);
};

module.exports = {
  generateToken,
  // isUserAdmin,
  userRole,
};
