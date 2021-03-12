const { Router } = require('express');
const { getAllUsers, findUserByEmail, registerUser } = require('../models/usersModel');

const usersRouter = new Router();

usersRouter.get('/', async (_req, res) => {
  const allUsers = await getAllUsers();

  res.status(200).json(allUsers);
});

usersRouter.post('/', async (req, res) => {
  const { email } = req.body;
  const userFound = await findUserByEmail(email);
  if (userFound) {
    return res.status(200).json(userFound);
  }
  return res.status(404).send({ message: 'E-mail not found.' });
});

usersRouter.post('/register', async (req, res) => {
  await registerUser(req.body);
  return res.status(201).send(req.body);
});

module.exports = usersRouter;
