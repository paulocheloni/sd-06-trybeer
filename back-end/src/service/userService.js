const userModel = require('../model/userModel');
const Validations = require('./validations');
const Utils = require('./utils');

const getAll = async () => {
  const result = await userModel.getAll();

  return result;
};

const loginUser = async (email, userPass) => {
  const result = await Validations.loginValidation(email, userPass);
  
  if (result.payload) return result;
  const token = Utils.generateToken(email, userPass);

  return token;
};

const createUser = async (name, email, userPass, role) => {
  const validation = await Validations.newUserValidation(email);

  if (validation.payload) return validation;

  const result = await userModel.createUser(name, email, userPass, role);
  return result;
};

const updateUser = async (name, email, token) => {
  const tokenStatus = Validations.tokenValidation(token);

  if (tokenStatus.payload) return tokenStatus;

  const result = await userModel.updateUser(name, email);
  return result;
};

module.exports = {
  getAll,
  loginUser,
  createUser,
  updateUser,
};
