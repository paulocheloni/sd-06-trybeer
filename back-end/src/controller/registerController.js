const { Router } = require('express');
const userService = require('../service/userService');

const controller = Router();

controller.post('/', async (req, res, next) => {
  const { name, email, password: userPass, role } = req.body;

  const result = await userService.createUser(name, email, userPass, role);

  if (result.payload) return next(result);

  return res.status(200).json(result);
});

module.exports = controller;