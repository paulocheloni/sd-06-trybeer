const modelLogin = require('../models/modelLogin');

const validateLogin = (email, password) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const emailVerified = regex.test(email);

  const passwordVerified = password.length >= 6;

  return emailVerified && passwordVerified;
};

const findUserByEmail = (email) => modelLogin.findUserByEmail(email);

const validateFieldLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) return res.status(401).json({ message: 'All fields must be filled' });

  if (!password) return res.status(401).json({ message: 'All fields must be filled' });

  if (!validateLogin(email, password)) {
    return res.status(401).json({ message: 'incorrect' });
  }

  next();
};

module.exports = {
  validateFieldLogin,
  findUserByEmail,
};
