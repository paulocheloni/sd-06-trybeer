const { Router } = require('express');
const tokenValidator = require('../middlewares/tokenValidator');
const status = require('../utils/statusDictionary');
const messages = require('../utils/messageDictionary');
const { ThrowError } = require('../middlewares/errorHandler/errorHandler');

const salesRouter = new Router();

salesRouter.post('/checkout', async(req, res, next) => {
  console.log(req.body)
  console.log(req.headers)
  
  return res.status(200).json({ message: 'ok' });
})

// FAZENDO AS REQUISIÇÕES
// COMEÇAR A FAZER OS TESTES PRA FAZER AS REQUISIÇÕES
// ABRE O INSOMNIA E TESTA O BACK
// MAS AGORA VOU DORMIR...
