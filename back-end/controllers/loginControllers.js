const { Router } = require('express');
const loginServices = require('../services/loginServices');

const loginRouter = Router();

// Get all users
loginRouter.get('/get-all', async (req, res) => {
    const users = await loginServices.getAll();
    res.status(200).json(users);
  });

// Create a user
loginRouter.get('/', async (req, res) => {
  const users = await loginServices.getAll();
  res.status(200).json(users);
});

module.exports = { loginRouter };