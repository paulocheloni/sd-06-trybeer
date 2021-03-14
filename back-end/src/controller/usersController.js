const { Router } = require('express');
const usersService = require('../service/usersService');

const controller = Router();

controller.put('/', async (req, res, next) => {
  const { authorization: token } = req.headers;
  const { email, name } = req.body;

  const result = await usersService.updateUser(name, email, token);
  if (result.payload) return next(result);

  return res.status(200).json(result);
});

controller.post('/', async (req, res, next) => {
  const { name, email, password: userPass, role } = req.body;

  const result = await usersService.createUser(name, email, userPass, role);

  if (result.payload) return next(result);

  return res.status(200).json(result);
});

module.exports = controller;
