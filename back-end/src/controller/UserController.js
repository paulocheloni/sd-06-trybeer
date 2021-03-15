const rescue = require('express-rescue');

const { UserService } = require('../service');

const registerUser = rescue(async (req, res) => {
  const { name, email, password, role } = req.body;

  await UserService.registerUser(name, email, password, role);

  return res
    .status(201)
    .json({ message: 'deu certo' });
});

module.exports = {
  registerUser,
};
