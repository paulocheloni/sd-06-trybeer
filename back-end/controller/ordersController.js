const { Router } = require('express');
const rescue = require('express-rescue');
const ordersService = require('../service/ordersService');
const { validateToken } = require('../middlewares/tokenValidation');

const router = Router();
const CREATED = 201;
const OK = 200;

router.post('/orders', validateToken, rescue(async (req, res) => {
    const { totalPrice, address, number, date, orderStatus } = req.body.objOrder;
    const userId = req.user.id;
    const orderData = {
      totalPrice,
      address,
      number,
      date,
      orderStatus,
    };
    await ordersService.createOrders(userId, orderData);

    res.status(CREATED).json({ message: 'Compra realizada com sucesso!' });
  }));

  router.get('/orders', validateToken, rescue(async (req, res) => {
    const userId = req.user.id;
    const sales = await ordersService.getOrders(userId);
    res.status(OK).json(sales);
  }));

  router.post('/checkout', validateToken, rescue(async (req, _res) => {
    const { mySaleProducts } = req.body;
    // console.log('meu body', mySaleProducts.productId, mySaleProducts.quantity);
    const saleId = await ordersService.getLastSaleId();
    const productData = {
      saleId: saleId.lastSaleId + 1,
      productId: mySaleProducts.productId,
      quantity: mySaleProducts.quantity,
    };
    // console.log('meu product data', productData);
    await ordersService.createProductsSales(productData);
  }));

  router.get('/orders/:id', validateToken, rescue(async (req, res) => {
    const saleId = req.params.id;
    // console.log('entrei no meu controller 1', saleId);
    const mySale = await ordersService.getSaleById(saleId);
    // console.log('entrei no meu controller 2', mySale);
    res.status(200).json(mySale);
  }));

  router.get('/ordersproducts/:id', validateToken, rescue(async (req, res) => {
    const saleId = req.params.id;
    // console.log('entrei no meu controller 1', saleId);
    const myProductSale = await ordersService.getSaleProductById(saleId);
    // console.log('entrei no meu controller 2', mySale);
    res.status(200).json(myProductSale);
  }));

  module.exports = router;