const { Router } = require('express');
const productsModel = require('../models/ProductsModel');

const ProductsRouter = new Router();

ProductsRouter.get('/', async (_req, res, next) => {
  try {
    const products = await productsModel.getAll();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = ProductsRouter;