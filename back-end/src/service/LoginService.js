const { generateNewToken } = require('../utils');

const generateToken = (email) => generateNewToken(email);

module.exports = {
  generateToken,
};
