const { Router } = require('express');
const productsModel = require('../models/ProductsModel');

const ProductsRouter = new Router();

ProductsRouter.post('/', async (req, res) => {
  const { name, price, url_image: urlImage } = req.body;
  const newProduct = await productsModel.createProduct({ name, price, url_image: urlImage });
  return res.status(201).json({ newProduct });
});

ProductsRouter.get('/', async (_req, res) => {
  const products = await productsModel.getAll();
  res.status(200).json(products);
});

module.exports = ProductsRouter;