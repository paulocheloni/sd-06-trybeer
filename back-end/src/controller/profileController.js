const { Router } = require('express');
const userService = require('../service/userService');

const controller = Router();

controller.put('/', async (req, res, next) => {
  const { authorization: token } = req.headers;
  const { email, name } = req.body;

  const result = await userService.updateUser(name, email, token);
  if (result.payload) return next(result);

  return res.status(200).json(result);
});

module.exports = controller;