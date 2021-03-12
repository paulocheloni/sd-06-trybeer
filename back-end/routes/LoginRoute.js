const { Router } = require('express');
const { LoginController } = require('../controller');
const { auth } = require('../middleware');

const LoginRouter = Router();

LoginRouter.post('/', auth, LoginController.generateNewToken);

module.exports = LoginRouter;
