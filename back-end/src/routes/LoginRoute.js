const { Router } = require('express');

const { LoginController } = require('../controller');
const { auth } = require('../middleware');

const LoginRouter = Router();

LoginRouter.post('/',
  auth,
  LoginController.generateToken);

LoginRouter.post('/role',
  // auth,
  LoginController.isUserAdmin);

module.exports = LoginRouter;
