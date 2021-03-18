const { Router } = require('express');
const { findAllProducts, addSaleProducts } = require('../service/productService');
const { checkAuthorization } = require('../middleware/checkAuthorization')

const productsController = Router();

const SUCCESS = 200;

productsController.get('/', async (_req, res) => {
  const allproducts = await findAllProducts();
  return res.status(SUCCESS).json(allproducts[0]);
});
productsController.put('/checkout', checkAuthorization, async (req, res) => {
  const sale = req.body;
  await addSaleProducts(sale);
  res.status(SUCCESS).json({ checkout: { sale, message: 'Compra realizado com sucesso!' } });
});

module.exports = productsController;
