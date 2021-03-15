const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { getAllUsers, findUserByEmail,
  registerUser, editUser } = require('../models/usersModel');

const usersRouter = new Router();

const SECRET = 'grupo15';

usersRouter.get('/', async (_req, res) => {
  const allUsers = await getAllUsers();

  res.status(200).json(allUsers);
});

usersRouter.post('/', async (req, res) => {
  const { email } = req.body;
  const userFound = await findUserByEmail(email);
  if (userFound) {
    const { name, role } = userFound;
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const token = jwt.sign({ data: { email, role } }, SECRET, jwtConfig);
    return res.status(200).json({ name, role, token });
  }
  return res.status(404).send({ message: 'E-mail not found.' });
});

usersRouter.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  
  const obj = {
    name,
    email,
    password,
    role,
  };
  await registerUser(obj);

  const token = jwt.sign({ data: { email, role } }, SECRET, jwtConfig);

  return res.status(201).send({ token });
});

usersRouter.put('/edit', async (req, res) => {
  await editUser(req.body);
  return res.status(201).send(req.body);
});

module.exports = usersRouter;
