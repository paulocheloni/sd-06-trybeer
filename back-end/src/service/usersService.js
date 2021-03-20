const usersModel = require('../model/usersModel');
const Validations = require('./validations');
const Utils = require('./utils');

const getAll = async () => {
  const result = await usersModel.getAll();

  return result;
};

const loginUser = async (email, userPass) => {
  const userInfo = await Validations.loginValidation(email, userPass);
  console.log(userInfo);
  if (userInfo.payload) return userInfo;
  const { id, name, role } = userInfo;
  const token = Utils.generateToken(id);
  const result = {
    token,
    id,
    name,
    role,
  };
  
  return result;
};

const createUser = async (name, email, userPass, role) => {
  const validation = await Validations.newUserValidation(email);

  if (validation.payload) return validation;

  const result = await usersModel.createUser(name, email, userPass, role);

  const token = Utils.generateToken(result.id);

  return ({ ...result, token });
};

const updateUser = async (name, email, token) => {
  const tokenStatus = await Validations.tokenValidation(token);

  if (tokenStatus.payload) return tokenStatus;

  const result = await usersModel.updateUser(name, email);
  return result;
};

module.exports = {
  getAll,
  loginUser,
  createUser,
  updateUser,
};
