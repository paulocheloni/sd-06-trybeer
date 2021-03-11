const { Router } = require('express');
const LoginServices = require('../services/LoginServices');

const LoginController = new Router();

LoginController.post('/', LoginServices);
LoginController.post('/:id', VerifyAutho, LoginServices);

module.exports = LoginController;
