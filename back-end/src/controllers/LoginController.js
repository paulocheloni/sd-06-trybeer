const { Router } = require('express');

const LoginRouter = Router();

// services imports
const LoginService = require('../services/LoginService');

// middleware imports

const LoginUsers = async (req, res) => {
  const { email, password } = req.body;
  const { status, message } = await LoginService(email, password);

  return res.status(status).json(message);
};

LoginRouter.post('/', LoginUsers);

module.exports = LoginRouter;
