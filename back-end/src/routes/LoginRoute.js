const { Router } = require('express');

const { LoginController } = require('../controller');
const { auth } = require('../middleware');

const LoginRouter = Router();

LoginRouter.post('/',
  auth,
  LoginController.generateToken);

module.exports = LoginRouter;
