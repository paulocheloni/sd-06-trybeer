const { Router } = require('express');
const { getAll } = require('../models/SalesModel');

const routerSales = Router();

routerSales.get('/', async (_req, res) => {
  const sales = await getAll();
  res.status(200).json(sales);
});

// routerSales.post('/', async (req, res) => {
//   console.log(req, res);
//   try {    
//     const [sales] = await createProduct(res.sales);
//     return res.status(200).json(sales);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

module.exports = routerSales;
