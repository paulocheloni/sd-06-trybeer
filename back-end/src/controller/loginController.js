const { Router } = require('express')
const userService = require('../service/userService');

const controller = Router()

controller.get('/', async (_req, res, next) => {
  const response = await userService.getAll();


  return next(response)
  // if (result.payload) return next(result);
  // return res.status(SUCCESS).send(result);

  // res.status(200).json(response)
});

controller

module.exports = controller;