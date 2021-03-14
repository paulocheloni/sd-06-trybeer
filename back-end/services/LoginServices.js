const status = require('../utils/allStatusCode');
const { getUserByEmail } = require('../models/UsersModel');
const { createToken } = require('../utils/createToken');
const validateEmail = require('../utils/validateEmail');
const validatePassword = require('../utils/validatePassword');

const LoginServices = async (req, res) => {
const { email, password } = req.body;

if (!email || !password) {
 return res.status(status.UNAUTHORIZED).json({ message: 'All fields must be filled' }); 
} 

if (!validateEmail(email)){
  return res.status(status.UNAUTHORIZED).json({ message: 'Incorrect username or password'}); 
} 

if (!validatePassword(password)){
  return res.status(status.UNAUTHORIZED).json({ message: 'Incorrect username or password' }); 
} 

const [user] = await getUserByEmail(email);
// [user] checar se volta vazio


if (!user || email !== user.email || password !== user.password) {
   return res.status(status.UNAUTHORIZED).json({ message: 'Incorrect username or password' }); 
  }
  const token = createToken(user);
  return res.status(status.OK).json({ token });
};

module.exports = LoginServices;