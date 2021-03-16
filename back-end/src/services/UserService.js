const { verify } = require('jsonwebtoken');
const { getEmail, registerUser } = require('../models/UserModel');

const getEmailService = async (emailLogin) => {
  const resultService = await getEmail(emailLogin);
  return resultService;
};

const registerUserService = async (body) => {
  const verifyEmail = await getEmail(body.email);
  if (verifyEmail.length) return false;
  
  const resultService = await registerUser(body);
  return resultService;
};

module.exports = {
  getEmailService,
  registerUserService,
};
