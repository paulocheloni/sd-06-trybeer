const { Router } = require('express');
const rescue = require('express-rescue');
const ProductService = require('../service/ProductService');

const router = new Router();

const OK = 200;

router.get('/', rescue(async (req, res) => {
  const products = await ProductService.getAll();
  return res.status(OK).json(products);
}));

module.exports = router;
