const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('../schema/statusSchema');

const SECRET = 'senhaSuperSecreta.com';

const verifyLogin = async (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) return res.status(UNAUTHORIZED).json({ message: 'jwt is missing' });

  jwt.verify(authorization, SECRET, (err) => {
    if (err) return res.status(UNAUTHORIZED).json({ message: 'failed to auth token' });
  });

  next();
};

module.exports = {
  SECRET,
  verifyLogin,
};
