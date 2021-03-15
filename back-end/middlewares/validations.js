const userService = require('../services/UsersService');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await userService.findByEmail(email);

  if (user.length > 0) return res.status(400).json({ message: 'User is already registered' });
  next();
};

module.exports = {
  validateEmail,
};
