const { Router } = require('express');
const rescue = require('express-rescue');
const userService = require('../service/userService');
const { validatePassword, validateEmail } = require('../middlewares/userValidation');

const createToken = require('../auth/createToken');

const router = Router();

router.get('/', rescue(async (_req, res) => {
  const allUsers = await userService.getAllUsers();

  return res.status(200).json(allUsers);
}));

router.post('/', validatePassword, validateEmail, rescue(async (req, res) => {
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
  };

  const userToken = createToken(userDataForFront);
  console.log(userToken);

  return res.status(200).json([userDataForFront, userToken]);
}));

router.put('/', rescue(async (req, res) => {
  const { email, name } = req.body;

  await userService.updateUserNameByEmail(email, name);

  return res.status(201).json({ message: 'Name has been successfully updated.' });
}));

module.exports = router;
