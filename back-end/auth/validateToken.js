const jwt = require('jsonwebtoken');

const secret = 'secret';

const validateToken = (token) => {
  console.log(token);
  const check = jwt.decode(token, secret);
  return check;
};

module.exports = validateToken;