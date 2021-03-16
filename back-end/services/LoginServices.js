const status = require('../utils/allStatusCode');
const { getUserByEmail } = require('../models/RegisterModel');
const { createToken } = require('../utils/createToken');
const {
  validateEmail,
  validatePassword
} = require('../utils/funcValidations');

const LoginServices = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(status.UNAUTHORIZED).json({ err: 'All fields must be filled' }); 
  }

  if (!validateEmail(email)){
    return res.status(status.UNAUTHORIZED).json({ err: 'Incorrect username or password'}); 
  }

  if (!validatePassword(password)){
    return res.status(status.UNAUTHORIZED).json({ err: 'Incorrect username or password' }); 
  }

  const [[user]] = await getUserByEmail(email);

  if (!user || email !== user.email || password !== user.password) {
    return res.status(status.UNAUTHORIZED).json({ err: 'Incorrect username or password' }); 
  }
  const { password: _password, ...userWithoutPassword } = user;
  const { id: _id, ...userWithoutId} = userWithoutPassword;
  const token = createToken(userWithoutPassword);
  return res.status(status.OK).json({ ...userWithoutId, token });
};

module.exports = LoginServices;