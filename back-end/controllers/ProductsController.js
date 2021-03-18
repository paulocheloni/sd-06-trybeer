const { Router } = require('express');
const productsModel = require('../models/ProductsModel');
const { isUserLoggedIn } = require('../middlewares/validations');

const ProductsRouter = new Router();

ProductsRouter.get('/', isUserLoggedIn, async (_req, res, next) => {
  try {
    const products = await productsModel.getAll();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = ProductsRouter;