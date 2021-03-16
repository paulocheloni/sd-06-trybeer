const { Router } = require('express');
const productsModel = require('../models/ProductsModel');

const ProductsRouter = new Router();

ProductsRouter.get('/', async (_req, res) => {
  const products = await productsModel.getAll();
  res.status(200).json(products);
});

module.exports = ProductsRouter;