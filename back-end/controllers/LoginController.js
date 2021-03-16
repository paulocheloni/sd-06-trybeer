const { Router } = require('express');
const userService = require('../services/UsersService');
const createToken = require('../auth/createToken');

const LoginController = new Router();

LoginController.post('/', async (req, res) => {
  const { email } = req.body;

  const [userTotal] = await userService.findByEmail(email);
  const { password, ...userWithoutPassword } = userTotal;

  const token = createToken(userWithoutPassword);
  const user = {
    name: userWithoutPassword.name,
    email: userWithoutPassword.email,
    role: userWithoutPassword.role,
    token,
  };

  res.status(200).json(user);
  res.status(200).end();
});

module.exports = LoginController;
