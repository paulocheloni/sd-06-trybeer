const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { getAll } = require('../models/LoginModel');
const { getEmailService } = require('../services/LoginService');
const status = require('../utils/statusDictionary');
const messages = require('../utils/messageDictionary');
const { ThrowError } = require('../middlewares/errorHandler/errorHandler');

const routerLogin = new Router();
const secret = 'Secret token';

const jwtConfig = {
  expiresIn: '150m',
  algorithm: 'HS256',
};

routerLogin.get('/', async (req, res) => {
  const allUsers = await getAll();
  return res.status(status.SUCCESS).json(allUsers);
});

routerLogin.post('/', async (req, res, next) => {
  const { email } = req.body;
  const user = await getEmailService(email);
  console.log(user);
  try {
    if (!user.length) {
      throw new ThrowError(status.NOT_FOUND, messages.USER_NOT_FOUND);
    }
    const payload = {
      iss: 'Trybeer',
      aud: 'indentity',
      userData: user,
    };
    const token = jwt.sign(payload, secret, jwtConfig);
    return res.status(status.SUCCESS)
      .json({ 
        token,
        name: user[0].name,
        email: user[0].email,
        role: user[0].role,
      });
  } catch (error) {
    next(error);
  }
});

module.exports = routerLogin;
