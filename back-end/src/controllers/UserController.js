const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { getAll } = require('../models/UserModel');
const { getEmailService, registerUserService } = require('../services/UserService');
const status = require('../utils/statusDictionary');
const messages = require('../utils/messageDictionary');
const { ThrowError } = require('../middlewares/errorHandler/errorHandler');

const userRouter = new Router();
const secret = 'Secret token';

const jwtConfig = {
  expiresIn: '150m',
  algorithm: 'HS256',
};

userRouter.get('/', async (req, res) => {
  const allUsers = await getAll();
  return res.status(status.SUCCESS).json(allUsers);
});

userRouter.post('/login', async (req, res, next) => {
  const user = await getEmailService(req.body.email);
  try {
    if (!user.length) throw new ThrowError(status.NOT_FOUND, messages.USER_NOT_FOUND);
    const payload = {
      iss: 'Trybeer',
      aud: 'indentity',
      userData: user,
    };
    const token = jwt.sign(payload, secret, jwtConfig);
    return res.status(status.SUCCESS)
      .json({ token, name: user[0].name, email: user[0].email, role: user[0].role });
  } catch (error) {
    next(error);
  }
});

userRouter.post('/register', async (req, res, next) => {
  const { body: user, body: { name, email, role } } = req;
  const resultRegister = await registerUserService(user);
  console.log(resultRegister);
  try {
    if (!resultRegister.affectedRows) {
      throw new ThrowError(status.INTERNAL_ERROR, messages.DEFAULT_ERROR);
    }
    const payload = {
      iss: 'Trybeer',
      aud: 'indentity',
      userData: user,
    };
    const token = jwt.sign(payload, secret, jwtConfig);
    return res.status(status.CREATED)
      .json({ token, name, email, role });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
