const { Router } = require('express');
const userService = require('../service/userService');
const { validateUserInputs, userExist } = require('../middlewares/userValidation');

const createToken = require('../auth/createToken');

const router = Router();
const rescue = require('express-rescue');

/* router.get('/', rescue(async (req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
})); */

router.post('/', validateUserInputs, rescue(async (req, res) => {
  const { email, password } = req.body;
  // console.log(email);
  const getUser = await userService.findUserByEmail(email, password);
  if (getUser.isError) {
    return res.status(getUser.status).json({ message: getUser.message });
  }

  const userDataForFront = {
    name: getUser.name,
    email: getUser.email,
    role: getUser.role,
  }
  // console.log(userDataForFront);

  const userToken = createToken(userDataForFront);
  console.log(userToken);

  return res.status(200).json([userDataForFront, userToken]);
  // return res.status(200).json(getUser);
}));

module.exports = router;
