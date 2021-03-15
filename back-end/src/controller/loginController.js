const { Router } = require('express');
const userService = require('../service/usersService');

const controller = Router();

controller.post('/', async (req, res, next) => {
  const { email, password: userPass } = req.body;

  const result = await userService.loginUser(email, userPass);
  if (result.payload) return next(result);
  
  const { token, id, name, role } = result;
  return res.status(200).json({ token, id, name, role });
});

module.exports = controller;