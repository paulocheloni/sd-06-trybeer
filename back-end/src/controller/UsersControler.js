const { Router } = require('express');
const UserService = require('../service/UserService');

const router = new Router();

const OK = 200;

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const user = await UserService.getByEmail(email);

  return res.status(OK).json(user);
});

module.exports = router;
