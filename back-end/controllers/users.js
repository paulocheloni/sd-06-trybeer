const { Router } = require('express');
const services = require('../services/users');
const createToken = require('../auth/createToken');

const usersRouter = new Router();

usersRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const [user] = await services.getUser(email, password);
  
  if (user) {
    const token = createToken({ email });
    const { name, email: userEmail, role } = user;

    return res.status(200).json({ name, email: userEmail, token, role });
  }

  return res.status(404).json({ message: 'user not found' });
});

usersRouter.put('/profile', async (req, res) => {
  const { name, email } = req.body;

  await services.updateUser(name, email);

  return res.status(200).json({ message: 'Atualização concluída com sucesso' });
});

module.exports = {
  usersRouter,
};