const registerRouter = require('express').Router();
const Service = require('../services/registerServices');
const httpStatusCode = require('../utils/httpStatusCode');

// Create a user
registerRouter.post('/', async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await registerService.create(name, email, password, role);
  if (user.code === 'httpStatusCode.CONFILCT') {
    return res.status(httpStatusCode.CONFILCT).json({ message: user.message });
  }
  res.status(httpStatusCode.CREATED).send({ name, email, role });
});

// Delete a user
registerRouter.delete('/delete-user/:id', async (req, res) => {
  const { id } = req.params;
  await registerService.exclude(id);
  res.status(httpStatusCode.OK).json('Response deleted successfully');
});

// Edit a user
registerRouter.put('/edit-user', async (req, res) => {
  const { prevName, nextName } = req.body;
  await registerService.edit(prevName, nextName);
  res.status(httpStatusCode.OK).send({ message: 'Atualização concluída com sucesso' });
});

module.exports = registerRouter;