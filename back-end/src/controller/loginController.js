const { Router } = require('express');
const userService = require('../service/usersService');

const controller = Router();

controller.post('/', async (req, res, next) => {
  const { email, password: userPass } = req.body;

  const result = await userService.loginUser(email, userPass);

  if (result.payload) return next(result);

  return res.status(200).json(result);
});

module.exports = controller;