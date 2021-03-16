const jwt = require('jsonwebtoken');
const productsModel = require('../model/Products');
const { UNAUTHORIZED } = require('../schema/statusSchema');

// Return all products
const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

// Verify Auth
const verifyAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) return res.status(UNAUTHORIZED).json({ message: 'jwt is missing' });

  jwt.verify(authorization, process.env.SECRET, (err) => {
    if (err) return res.status(UNAUTHORIZED).json({ message: 'failed to auth token' });
  });

  next();
};

module.exports = {
  getAll,
  verifyAuth,
};