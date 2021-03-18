const { Router } = require('express');
// const jwt = require('jsonwebtoken');
// const { validateToken, SECRET } = require('../middlewares/helpers');
const { getAllProducts } = require('../models/productsModel');

const productsRouter = new Router();

productsRouter.get('/', async (req, res) => {
  const allProducts = await getAllProducts();

  res.status(200).json(allProducts);
});

module.exports = productsRouter;
