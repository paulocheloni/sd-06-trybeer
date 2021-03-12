const { Router } = require('express');
const jwt = require('jsonwebtoken');

const loginServices = require('../services/loginServices');

const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await loginServices.validateLogin(email, password);
  
  res.status(200).json(user);
});

module.exports = loginRouter;