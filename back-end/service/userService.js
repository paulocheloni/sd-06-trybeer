const useModel = require('../models/useModel');

const userLogin = async (userEmail, userPassword) => {
  const useLogin = await useModel.userLogin(userEmail, userPassword);
  return useLogin;
};

const userRegister = async (user) => {
  const userCreate = await useModel.userRegister(user);
  return userCreate;
};

module.exports = {
  userLogin,
  userRegister,
};
