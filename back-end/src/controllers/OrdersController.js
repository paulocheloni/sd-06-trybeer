const { Router } = require('express');

const OrdersRouter = Router();

// services imports
const ListAllOrdersService = require('../services/ListAllOrdersService');
const GetByIdDetailsService = require('../services/GetByIdDetailsService');

// middleware imports

const ListAllOrders = async (req, res) => {
  const { email } = req.headers;

  const { status, message } = await ListAllOrdersService(email);

  return res.status(status).json(message);
};

const GetByIdDetails = async (req, res) => {
  const { id } = req.params;

  const { status, message } = await GetByIdDetailsService(id);

  return res.status(status).json(message);
}

OrdersRouter.get('/', ListAllOrders);
OrdersRouter.get('/:id', GetByIdDetails);

module.exports = OrdersRouter;