const { Router } = require('express');
const jwt = require('jsonwebtoken');

const routerLogin = Router();

const jwtConfig = {
  expiresIn: '3h',
  algorithm: 'HS256',
};

const SECRET = 'senha';

routerLogin.get('/', (_req, res) => {
  res.send('Estou na pagina de login');
});

routerLogin.post('/', async (req, res) => {
  const { user } = req.body;
  const { password, ...userWithouPassword } = user;
  const payload = {
    iss: 'Trybeer',
    aud: 'indentity',
    userData: userWithouPassword,
  };
  const token = jwt.sign(payload, SECRET, jwtConfig);
  // console.log('usuario: ', user.email);
  // console.log('senha: ', user.password);
  // console.log('token: ', token);
  res.status(201).json({ token });
});

module.exports = routerLogin;
