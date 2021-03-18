const { Router } = require('express');

const { ProductsController } = require('../controller');

const ProductsRoute = Router();

ProductsRoute.get('/', ProductsController.listProducts);

module.exports = ProductsRoute;