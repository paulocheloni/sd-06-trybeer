const { Router } = require('express');
const loginServices = require('../services/loginServices');

const loginRouter = Router();

// Get all users
loginRouter.get('/get-all', async (req, res) => {
    const users = await loginServices.getAll();
    res.status(200).json(users);
});

// Create a user
loginRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const result = await loginServices.validateLogin(email, password);
  console.log(result);
  res.status(200).send('ok');
});

module.exports = loginRouter;