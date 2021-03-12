const { Router } = require('express');
const rescue = require('express-rescue');
const UserService = require('../service/UserService');
const createToken = require('../authentication/createToken');

const router = new Router();

const OK = 200;

router.post('/', rescue(async (req, res) => {
  const { email } = req.body;

  const { role } = await UserService.getByEmail(email);
  const token = await createToken({ email, role });

  return res.status(OK).json({ token, role });
}));

module.exports = router;
