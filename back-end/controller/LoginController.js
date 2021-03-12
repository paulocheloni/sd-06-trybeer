// const rescue = require('express-rescue');
const { LoginService } = require('../service');

const generateNewToken = async (req, res, _next) => {
  const { email } = req.body;
  console.log(email);
  const token = await LoginService.generateNewToken(email);
  console.log(token);
  return res.status(200).json({ token });
};

module.exports = {
  generateNewToken,
};