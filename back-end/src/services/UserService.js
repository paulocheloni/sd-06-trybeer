const { getEmail, registerUser, updateName } = require('../models/UserModel');

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

const updateUserName = async (newUserName, email) => {
  const updatedUser = await updateName(newUserName, email)

  return updatedUser
}

module.exports = {
  getEmailService,
  registerUserService,
  updateUserName,
};
