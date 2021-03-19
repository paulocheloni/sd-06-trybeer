const jwt = require('jsonwebtoken');
const salesModel = require('../model/Sales');
const { UNAUTHORIZED } = require('../schema/statusSchema');

const SECRET = 'senhaSuperSecreta.com';

// Return all sales
const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

// store request
const storeRequest = async (userId, totalPrice, address, number) => {
  const sales = await salesModel.storeRequest(userId, totalPrice, address, number);
  return sales;
};

// Verify Auth
const verifyAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) return res.status(UNAUTHORIZED).json({ message: 'jwt is missing' });

  jwt.verify(authorization, SECRET, (err) => {
    if (err) return res.status(UNAUTHORIZED).json({ message: 'failed to auth token' });
  });

  next();
};

module.exports = {
  getAll,
  storeRequest,
  verifyAuth,
};
