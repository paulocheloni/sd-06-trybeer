const { Router } = require('express');
const userService = require('../service/userService');

const controller = Router();

controller.get('/', async (_req, res) => {
  const response = await userService.getAll();

 return res.status(200).json(response);
});

module.exports = controller;