const { Router } = require('express');
const rescue = require('express-rescue');
const LoginService = require('../service/LoginService');
const ProductService = require('../service/ProductService');
const CheckoutService = require('../service/CheckoutService');

const router = new Router();

router.post('/', rescue(async (req, res) => {
  const { cart, userEmail, totalPrice, status, rua, numero } = req.body;

  const { id: userId } = await LoginService.getByEmail(userEmail);
  const products = await ProductService.getAll();

  const newCart = cart.map((product) => {
    const newProduct = products.find((newP) => product.name === newP.name);

    return { ...newProduct, quantity: product.quantity };
  });

  const newSale = await CheckoutService.create({
    userId, totalPrice: totalPrice.replace(',','.'), rua, numero, status,
  });

  // salvar a venda
  // salvar os produtos de cada venda;

 console.log(newSale);
}));

module.exports = router;