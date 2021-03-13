const jwt = require('jsonwebtoken');
const UserModel = require('../Model/userModel');

const secret = 'secretToken';

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.loginUser(email, password);

  if (!user) res.status(404).json({ message: 'User not found' });

  const token = jwt.sign({ user }, secret);
  user.token = token;

  return res.status(200).json({ user });
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await UserModel.findUserByEmail(email);

  if (user) res.status(409).json({ message: 'E-mail already in database.' });
  next();
};

const registerNewUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  await UserModel.registerNewUser(name, email, password, role);
  return res.status(201).json({ message: 'OK' });
};

module.exports = {
  loginUser,
  validateEmail,
  registerNewUser,
};
