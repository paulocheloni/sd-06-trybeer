const express = require('express');

const controllers = require('../controllers/products');

const products = express.Router();

products.get('/', controllers.products);

module.exports = products;
