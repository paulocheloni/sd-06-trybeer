const { getEmail } = require('../models/LoginModel');

const getEmailService = async (emailLogin) => {
  const resultService = await getEmail(emailLogin);
  return resultService;
};

module.exports = {
  getEmailService,
};