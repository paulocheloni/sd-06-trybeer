const jwt = require('jsonwebtoken');
require('dotenv/config');

const generateNewToken = (email) => {
  const secret = process.env.TOKEN_SECRET;

  const jwtConfig = {
    expiresIn: '10d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: email }, secret, jwtConfig);

  return token;
};

module.exports = {
  generateNewToken,
};
