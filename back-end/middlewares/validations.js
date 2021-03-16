const userService = require('../services/UsersService');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await userService.findByEmail(email);

  if (user.length > 0) return res.status(400).json({ message: 'User is already registered' });
  next();
};

const validEmail = (email) => /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
// const validEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
const validDatas = (email, password, user) => email && password && user;

// if (!email || !password || !user) {
//   return res.status(401).json({ message: 'Invalid entries. Try again.' });
// }

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const [user] = await userService.findByEmail(email);

  if (!validDatas(email, password, user)) {
    return res.status(401).json({ message: 'Invalid entries. Try again.' });
  }

  if (!validEmail(email) || password.length < 6 || user.password !== password) {
    return res.status(401).json({ message: 'Invalid entries. Try again.' });
  }

  next();
};

module.exports = {
  validateEmail,
  validateLogin,
};
