const { Router } = require('express');

const createToken = require('../auth/createToken');
const User = require('../service/userService');

const userController = Router();

userController.post('/', async (req, res) => {
  const body = req.body;
  console.log('body', body);
  const token = await createToken(body);
  const role = await User.userLogin(body.email, body.password);
  res.status(200).json({ userLogin: { role, token } });
});

module.exports = userController;