const { Router } = require('express');

const LoginRouter = Router();

// services imports
const LoginService = require('../services/LoginService');

// middleware imports

const LoginUsers = async (req, res) => {
  const { email, password } = req.body;
  const resp = await LoginService(email, password);

  return res.status(resp.status).json(resp.message);
};

LoginRouter.post('/', LoginUsers);

module.exports = LoginRouter;
