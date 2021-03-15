const { Router } = require('express');
const userService = require('../services/UsersService');
const { validateEmail } = require('../middlewares/validations');

const RegisterRouter = new Router();

RegisterRouter.post('/', validateEmail, async (req, res) => {
  const { email, name, password, role } = req.body;
  const newUser = await userService.createUserService({ email, name, password, role });
  return res.status(201).json({ newUser });
});

RegisterRouter.get('/', async (_req, res) => {
  const users = await userService.getAll();
  res.status(200).json(users);
});

module.exports = RegisterRouter;