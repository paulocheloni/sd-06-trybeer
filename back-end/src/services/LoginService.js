const { getEmail } = require('../models/LoginModel');
const { ThrowError } = require('../middlewares/errorHandler/errorHandler');

const getEmailService = async (emailLogin) => {
  const resultService = await getEmail(emailLogin);
  return resultService;
};

module.exports = {
  getEmailService
}