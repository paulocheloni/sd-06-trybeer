const { Router } = require('express');
const { RegisterController } = require('../controller');

const RegisterRoute = Router();

RegisterRoute.post('/', RegisterController.registerClient);

module.exports = RegisterRoute;