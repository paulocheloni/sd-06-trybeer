const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.TOKEN_SECRET;

const generateNewToken = async (email) => {
  const jwtConfig = {
    expiresIn: '10d',
    algorithm: 'HS256',
  };

  const token = await jwt.sign({ email, secret, jwtConfig });

  return token;
};

module.exports = {
  generateNewToken,
};
