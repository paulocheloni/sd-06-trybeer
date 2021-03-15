const { Router } = require('express');

const createToken = require('../auth/createToken');
const { userLogin, userEditByEmail } = require('../service/userService');

const userController = Router();

userController.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const payload = { email, password };
  const token = await createToken(payload);
  const role = await userLogin(email, password);
  res.status(200).json({ userLogin: { role, token } });
});
userController.put('/profile', async (req, res) => {
  const { email, name } = req.body;
  await userEditByEmail(name, email);
  res.status(201).json('usuario editado!!');
});

module.exports = userController;