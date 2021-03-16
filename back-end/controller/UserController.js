const { Router } = require('express');
const UserService = require('../service/UserService');
const { OK, CREATED } = require('../schema/statusSchema');

const UserController = new Router();

// Get All Users
UserController.get('/', async (req, res) => {
  const users = await UserService.getAll();
  res.status(OK).json({ Users: users });
});

// Create New User
UserController.post('/', UserService.verifyEmail, async (req, res) => {
  const { name, email, password, role } = req.body;
  await UserService.createNewUser(name, email, password, role);

  res.status(CREATED).json({ message: 'OK' });
});

// Update Product
UserController.put('/:id', UserService.verifyId, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await UserService.update(id, name);
  res.status(OK).json({ message: 'name updated!' });
});

module.exports = UserController;
