const { Router } = require('express');
const userService = require('../service/userService');
const { validateUserInputs, userExist } = require('../middlewares/userValidation');

const router = Router();
const rescue = require('express-rescue');

/* router.get('/', rescue(async (req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
})); */

router.get('/', rescue(async (req, res) => {
  const { email } = req.body;
  // console.log(email);
  const getUser = await userService.findUserByEmail(email);

  return res.status(200).json(getUser);
}));

module.exports = router;
