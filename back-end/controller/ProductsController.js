const { Router } = require('express');
const ProductsService = require('../service/ProductsService');
const { OK } = require('../schema/statusSchema');

const ProductsController = new Router();

// Get All products
ProductsController.get('/', async (req, res) => {
  const products = await ProductsService.getAll();
  res.status(OK).json(products);
});

module.exports = ProductsController;
