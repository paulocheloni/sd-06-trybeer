const useModel = require('../models/useModel');

const userLogin = async (userEmail, userPassword) => {
  const useLogin = await useModel.userLogin(userEmail, userPassword);
  return useLogin;
};

module.exports = {
  userLogin,
}