const { Router } = require('express');

const validateToken = require('../middlewares/validateToken');
const SalesProductsModel = require('../models/SalesProducts');
// const ProductModel = require('../models/ProductsModel');

const routerSalesDetails = Router();

routerSalesDetails.use(validateToken);

routerSalesDetails.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const sale = await SalesProductsModel.getOne(id);
    return res.status(200).json({ sale });
  } catch (err) {
    console.log(err);
    next({ status: 404, message: 'not Found' });
  }
});

module.exports = routerSalesDetails;
