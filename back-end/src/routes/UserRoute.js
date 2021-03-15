const { Router } = require('express');

const { UserController } = require('../controller');
const { emailAlreadyExists } = require('../middleware');

const RegisterRoute = Router();

RegisterRoute.post('/',
  emailAlreadyExists,
  UserController.registerUser);

module.exports = RegisterRoute;