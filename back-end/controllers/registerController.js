const { Router } = require('express');
const registerService = require('../services/registerServices');
const { conflict } = require('../utilities/variables');

const registerRouter = Router();

// Get all users
registerRouter.get('/get-all', async (req, res) => {
    const users = await registerService.getAll();
    res.status(200).json(users);
});

// Create a user
registerRouter.post('/', async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await registerService.create(name, email, password, role);
  if (user.code === 'conflict') {
    return res.status(conflict).json({ message: user.message });
  }
  res.status(200).send(user);
});

// Delete a user
registerRouter.delete('/delete-user/:id', async (req, res) => {
  const { id } = req.params;
  await registerService.exclude(id);
  res.status(200).json('Response deleted successfully');
});

// Check if the email is in database
registerRouter.get('/check-email-registered/:email', async (req, res) => {
  const { email } = req.params;
  const users = await registerService.checkEmailRegistered(email);
  if (users.code === 'conflict') {
    return res.status(conflict).json({ message: users.message });
  }
  return res.status(200).json(users);
});

module.exports = registerRouter;