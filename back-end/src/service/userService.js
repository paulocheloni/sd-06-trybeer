const userModel = require('../model/userModel');
const Validations = require('./validations');

const getAll = async () => {
  const result = await userModel.getAll();

  return result;
};

const getUserByEmail = async (email, userPass) => {
  const result = await Validations.loginValidation(email, userPass);
  
  if (result.payload) return result;
  return result;
};

module.exports = {
  getAll,
  getUserByEmail,
};
