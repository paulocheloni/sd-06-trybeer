const { Router } = require('express');
const rescue = require('express-rescue');
const userService = require('../service/userService');
const { validatePassword, validateEmail } = require('../middlewares/userValidation');

const createToken = require('../auth/createToken');

const router = Router();

router.get('/', rescue(async (_req, res) => {
  const allUsers = await userService.getAllUsers();
  
  // allUsers.map((user) => {
  //   const allUsersForFront = {
  //     name: user.name,
  //     email: user.email,
  //     role: user.role,
  //   };
  //   return allUsersForFront;
  // });

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
  // console.log(userDataForFront);

  const userToken = createToken(userDataForFront);
  console.log(userToken);

  return res.status(200).json([userDataForFront, userToken]);
  // return res.status(200).json(getUser);
}));

module.exports = router;
