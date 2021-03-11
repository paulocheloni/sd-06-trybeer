const { Router } = require('express');

const LoginRouter = Router();

// services imports
const LoginService = require('../services/LoginService');

// middleware imports

const LoginUsers = async (_req, res) => {

  const resp = await LoginService();

  return res.status(resp.status).json(resp.retorno);
};

LoginRouter.get('/', LoginUsers);

module.exports = LoginRouter;
