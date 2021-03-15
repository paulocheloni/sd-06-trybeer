const { Router } = require('express');

const UserRouter = Router();

// services imports
const CreateUserService = require('../services/CreateUserService');

// middleware imports
const { validateRegistration, registrationValidationRules } = require('../middlewares/validateRegistration');

const UserCreate = async (req, res) => {
  const { name, email, password, role } = req.body;
  const { status, message } = await CreateUserService(name, email, password, role);

  return res.status(status).json(message);
};

UserRouter.post('/register', validateRegistration(), registrationValidationRules, UserCreate);

module.exports = UserRouter;