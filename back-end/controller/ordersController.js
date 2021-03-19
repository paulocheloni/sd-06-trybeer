/* const { Router } = require('express');
const rescue = require('express-rescue');
const ordersService = require('../service/ordersService');
const userServive = require('../service/userService');

const router = Router();

router.post('/orders', rescue(async (req, res) => {
    const userFound = await userServive.findUserByEmail(email)
    const { userId, totalPrice, address, number, date, status } = req.body;
  })); */