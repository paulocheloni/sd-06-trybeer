const jwt = require('jsonwebtoken');
const loginModels = require('../models/loginModels');

const secret = 'minhasenhasecreta';

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, secret, { expiresIn: '7d', algorithm: 'HS256' });
  return token;
};

const validateLogin = async (email, password) => {
  const [user] = await loginModels.validateLogin(email, password);
  
  if (user.length === 0) throw Error('Usuário não cadastrado');

  const token = generateToken(email);
  const loggedInUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };

  return loggedInUser;
};

module.exports = {
  validateLogin,
  generateToken,
};