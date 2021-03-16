const { Router } = require('express');
const rescue = require('express-rescue');
const UserService = require('../service/UserService');
const createToken = require('../authentication/createToken');

const router = new Router();

const OK = 200;

router.post('/', rescue(async (req, res) => {
  const { email: requestEmail } = req.body;

  const { role, email, name } = await UserService.getByEmail(requestEmail);
  const token = await createToken({ requestEmail, role });

  return res.status(OK).json({ token, role, name, email });
}));

module.exports = router;
