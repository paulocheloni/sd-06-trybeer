const { Router } = require('express');
const salesService = require('../service/salesService');

const controller = Router();

controller.get('/', async (_req, res) => {
  const result = await salesService.getAll();

  return res.status(200).json(result);
});

controller.post('/', async (req, res, next) => {
  const reqBody = req.body;
  const { authorization: token } = req.headers;

  const result = await salesService.createSale(reqBody, token);
  
  if (result.payload) return next(result);
  return res.status(200).json(result);
});

module.exports = controller;