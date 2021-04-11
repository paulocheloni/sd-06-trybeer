const { Router } = require('express');
const Service = require('../services/orderService');
const status = require('../utils/httpStatusCode');

const orderRouter = Router();

orderRouter.post('/', async (req, res) => {
  const { userID, value, street, number, date } = req.body;
  await Service.create({ userID, value, street, number, date });
  res.status(200).json(userID, value, street, number, date);
});

orderRouter.get('/', async (_req, res) => {
  try {
    const allSales = await Service.getAll();

    return res.status(status.OK).json(allSales);
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
});

orderRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const Sale = await Service.getBySalesId(id);

    return res.status(status.OK).json(Sale);
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
});

module.exports = orderRouter;
