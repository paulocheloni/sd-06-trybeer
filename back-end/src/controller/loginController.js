const { Router } = require('express');
const userService = require('../service/userService');

const controller = Router();

controller.get('/', async (req, res, next) => {
  const { email, password: userPass } = req.body;

  const result = await userService.getUserByEmail(email, userPass);

  if (result.payload) return next(result);

  return res.status(200).json(result);
});

module.exports = controller;