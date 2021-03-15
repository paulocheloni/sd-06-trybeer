const { Router } = require('express');

const { RegisterController } = require('../controller');
const { emailAlreadyExists } = require('../middleware');

const RegisterRoute = Router();

RegisterRoute.post('/',
  emailAlreadyExists,
  RegisterController.registerClient);

module.exports = RegisterRoute;