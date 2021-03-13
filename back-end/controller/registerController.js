const { Router } = require('express');

const { userRegister } = require('../service/userService');

const registerController = Router();

registerController.post('/', async (req, res) => {
  const user = req.body;
  console.log('controller', user)
  const reg = await userRegister(user);
  console.log('controller', reg)
  res.status(200).json(reg);
});

module.exports = registerController;