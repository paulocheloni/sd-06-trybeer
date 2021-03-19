const { Router } = require('express');
const jwt = require('jsonwebtoken');
const {
  getAll,
  verifyEmail,
  createNewUser,
  verifyId,
  findById,
  update,
  verifyAuth
} = require('../service/UserService');
const { OK, CREATED } = require('../schema/statusSchema');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

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

// Get Profile
UserController.get('/profile', verifyAuth, async (req, res) => {
  const { authorization } = req.headers;

  jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
    const dec = decoded.data[0];
    if (!decoded.data[0]) res.status(OK).json(decoded.data);
    res.status(OK).json(dec);
  });

});

// Update
UserController.put('/:id', verifyId, verifyAuth, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await update(id, name);
  const user = await findById(id);
  const token = jwt.sign({ data: user }, process.env.SECRET, jwtConfig);
  res.status(OK).json({ token });
});

module.exports = UserController;
