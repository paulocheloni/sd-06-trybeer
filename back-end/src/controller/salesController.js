const { Router } = require('express');
const rescue = require('express-rescue');
const SalesService = require('../service/SalesService');

const router = new Router();

const OK = 200;

router.get('/', rescue(async (req, res) => {
  const sales = await SalesService.getAll();
  return res.status(OK).json(sales);
}));

module.exports = router;
