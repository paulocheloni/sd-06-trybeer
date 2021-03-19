const { Router } = require('express');

const SalesRouter = Router();

// services imports
const CreateSalesService = require('../services/CreateSalesService');

// middleware imports

const CreateSale = async (req, res) => {
  const { emailState, price, street, numberHouse, saleStatus, cart } = req.body.dataSale;
  const { status, message } = await CreateSalesService(emailState, price, street, numberHouse, saleStatus, cart);

  return res.status(status).json(message);
};

SalesRouter.post('/', CreateSale);

module.exports = SalesRouter;
