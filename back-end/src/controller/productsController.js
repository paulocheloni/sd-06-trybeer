const { Router } = require('express');
const productsService = require('../service/productsService');

const controller = Router();

controller.get('/', async (req, res) => {
  const { limit, page, sort } = req.query;
  const q = req.query.q ? req.query.q : '';

  const result = await productsService.getAll({
    limit: parseInt(limit),
    page: parseInt(page),
    sort,
    q
  });
  
  console.log(result)

  return res.status(200).json(result);
});

module.exports = controller;