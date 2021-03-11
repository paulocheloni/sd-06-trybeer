const Login = require('../models/Login');

const SUCESS = 200;

const loginUsers = async () => {
  const allUser = await Login.getAllUser();

  return {
    status: SUCESS,
    retorno: allUser,
  };
};

module.exports = loginUsers;
