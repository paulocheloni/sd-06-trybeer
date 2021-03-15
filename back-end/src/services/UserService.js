const { getEmail, registerUser } = require('../models/UserModel');

const getEmailService = async (emailLogin) => {
  const resultService = await getEmail(emailLogin);
  return resultService;
};

const registerUserService = async (body) => {
  const resultService = await registerUser(body);
  return resultService;
};

module.exports = {
  getEmailService,
  registerUserService,
};