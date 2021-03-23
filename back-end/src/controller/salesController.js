const { Router } = require('express');
const salesService = require('../service/salesService');

const controller = Router();

controller.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { authorization: token } = req.headers;

  const result = await salesService.getSaleById(id, token);

  if (result.payload) return next(result);
  return res.status(200).json(result);
});

controller.get('/', async (req, res, next) => {
  const { authorization: token } = req.headers;
  const { user_id } = req.body;

  const result = user_id
    ? await salesService.getSalesByUserId(id, token)
    : await salesService.getAll(token);
  
  if (result.payload) return next(result);
  return res.status(200).json(result);
});

controller.post('/', async (req, res, next) => {
  const reqBody = req.body;
  const { authorization: token } = req.headers;

  const result = await salesService.createSale(reqBody, token);
  
  if (result.payload) return next(result);
  return res.status(200).json({ message: 'Sale created.' });
});

module.exports = controller;