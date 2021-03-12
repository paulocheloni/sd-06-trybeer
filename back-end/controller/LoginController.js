const { Router } = require('express');
const jwt = require('jsonwebtoken');

// const { validateUserLogin } = require('../middlewares/LoginMiddleware'); 

const secret = 'senhaSuperSecreta.com';

const userService = require('../service/UserService');
// const jwtConfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };

const LoginController = new Router();
const OK = 200;

LoginController.get('/', async (req, res) => {
  res.status(OK).json({ Login: 'Teste OK' });
});

// // Post Login
LoginController.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.verifyUser(email, password);
  const { role } = user[0];
  const token = jwt.sign({ data: user }, secret);

  res.status(OK).json({ token, role });
});

module.exports = LoginController;
