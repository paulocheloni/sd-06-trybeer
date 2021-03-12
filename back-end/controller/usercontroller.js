const { Router } = require('express');

const createToken = require('../auth/createToken');
const User = require('../service/userService');

const userController = Router();

userController.post('/', async (req, res) => {
  const { email, password } = req.body;
  const payload = { email, password };
  const token = await createToken(payload);
  const role = await User.userLogin(email, password);
  res.status(200).json({ userLogin: { role, token } });
});

module.exports = userController;