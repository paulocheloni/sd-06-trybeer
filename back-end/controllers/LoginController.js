const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { getAll, getById, createOne, getByEmail } = require('../models/UsersService');
const validateLogin = require('../middlewares/validateLogin')
const routerLogin = Router();

const jwtConfig = {
  expiresIn: '3h',
  algorithm: 'HS256',
};

const SECRET = 'senha';

routerLogin.get('/', async (_req, res) => {
  const users = await getAll();
  res.send(users);
});

routerLogin.post('/', validateLogin,async (req, res) => {
  const { user } = req.body;
  const { password, ...userWithouPassword } = user;
  const payload = {
    iss: 'Trybeer',
    aud: 'indentity',
    userData: userWithouPassword,
  };
  const token = jwt.sign(payload, SECRET, jwtConfig);
  console.log(res.locals.user)
  const {name, email, role} = res.locals.user
  res.status(201).json({
    name, email, token , role    
    });
});

routerLogin.get('/:id', async (req, res) => {
  const { id } = req.params;
  
  const user = await getById(id);
  res.json(user);
  });

  

module.exports = routerLogin;
