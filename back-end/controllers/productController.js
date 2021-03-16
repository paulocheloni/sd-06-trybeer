const { Router } = require('express');
const productService = require('../services/productService');

const router = Router();

router.get('/products', productService.allProducts)

module.exports = router;
