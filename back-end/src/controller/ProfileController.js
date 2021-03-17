const { Router } = require('express');
const rescue = require('express-rescue');
const UserService = require('../service/UserService');

const ProfileController = new Router();

const OK = 200;

ProfileController.post('/', rescue(async(req, res) => {
  const { email: requestEmail } = req.body;
  const { name } = await UserService.getByEmail(requestEmail);
  // const profiles = await UserService.getAll();

  res.status(OK).json(name);
}));

ProfileController.put('/', rescue(async(req, res) => {
  console.log('req.headers', req.headers.authorization)
  console.log('req.body', req.body)
  return res.end();
}));

module.exports = ProfileController;
