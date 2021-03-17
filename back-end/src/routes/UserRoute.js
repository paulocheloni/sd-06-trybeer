const { Router } = require('express');

const { emailAlreadyExists } = require('../middleware');
const { UserController } = require('../controller');

const UserRoute = Router();

UserRoute.post('/',
  emailAlreadyExists,
  UserController.registerUser);

module.exports = UserRoute;