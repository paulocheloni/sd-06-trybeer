const jwt = require('jsonwebtoken');

const secret = 'secretToken';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (id) => {
  const token = jwt.sign({ id }, secret, jwtConfig);
  return token;
};

module.exports = {
  generateToken,
};
