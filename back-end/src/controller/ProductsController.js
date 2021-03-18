const rescue = require('express-rescue');

const { ProductsService } = require('../service');

const listProducts = rescue(async (_req, res) => {
  const getProducts = await ProductsService.selectProducts();

  return res
    .status(201)
    .json(getProducts);
});

module.exports = { listProducts };
