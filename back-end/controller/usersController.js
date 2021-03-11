const { Router } = require('express');
const { getAllUsers, findUserByEmail } = require('../models/usersModel');

const usersRouter = new Router();

usersRouter.get('/', async (_req, res) => {
  const allUsers = await getAllUsers();

  res.status(200).json(allUsers);
});

usersRouter.post('/', async (req, res) => {
  const { email } = req.body;
  const userFound = await findUserByEmail(email);

  res.status(200).json(userFound);
});

module.exports = usersRouter;
