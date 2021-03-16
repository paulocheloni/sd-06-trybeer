const userService = require('../services/UsersService');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await userService.findByEmail(email);

  if (user.length > 0) return res.status(400).json({ message: 'User is already registered' });
  next();
};

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const [user] = await userService.findByEmail(email);

  const validEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

  if (!email || !password || !user) {
    return res.status(401).json({ message: 'Invalid entries. Try again.' });
  }

  if (!validEmail.test(email) || password.length < 6 || user.password !== password) {
    return res.status(401).json({ message: 'Invalid entries. Try again.' });
  }

  next();
};

module.exports = {
  validateEmail,
  validateLogin,
};
