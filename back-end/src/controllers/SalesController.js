const { Router } = require('express');

const SalesRouter = Router();

// services imports
const CreateSalesService = require('../services/CreateSalesService');

// middleware imports

const CreateSale = async (req, res) => {
  const { email, total_price, delivery_address, delivery_number, statusSale, cart } = req.body;
  const { status, message } = await CreateSalesService(email, total_price, delivery_address, delivery_number, statusSale, cart);

  return res.status(status).json(message);
};

SalesRouter.post('/', CreateSale);

module.exports = SalesRouter;
