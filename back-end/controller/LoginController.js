const rescue = require('express-rescue');

const { LoginService } = require('../service');

const generateNewToken = rescue(async (req, res) => {
  const { email } = req.body;

  const token = await LoginService.generateNewToken(email);

  return res.status(200).json({ token });
});

module.exports = {
  generateNewToken,
};