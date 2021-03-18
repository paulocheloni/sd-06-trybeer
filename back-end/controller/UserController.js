const { Router } = require('express');
const { getAll, verifyEmail, createNewUser, verifyId, update, verifyAuth} = require('../service/UserService');
const { OK, CREATED } = require('../schema/statusSchema');

const UserController = new Router();

// Get All Users
UserController.get('/', async (_req, res) => {
  const users = await getAll();
  res.status(OK).json({ Users: users });
});

// Create New User
UserController.post('/', verifyEmail, async (req, res) => {
  const { name, email, password, role } = req.body;
  await createNewUser(name, email, password, role);

  res.status(CREATED).json({ message: 'OK' });
});

// Update Product
UserController.put('/:id', verifyId, verifyAuth, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await update(id, name);
  res.status(OK).json({ message: 'name updated!' });
});

module.exports = UserController;
