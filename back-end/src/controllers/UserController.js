const { Router } = require('express');

const UserRouter = Router();

// services imports
const CreateUserService = require('../services/CreateUserService');

// middleware imports
const { validateLogin, loginValidationRules } = require('../middlewares/validateLogin');

const UserCreate = async (req, res) => {
  const { name, email, password, role } = req.body;
  const { status, message } = await CreateUserService(name, email, password, role);

  return res.status(status).json(message);
};

UserRouter.post('/register', UserCreate);

module.exports = UserRouter;