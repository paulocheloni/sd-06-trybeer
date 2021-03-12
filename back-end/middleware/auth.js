const { UserModel } = require('../model');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await UserModel.getUser(email);

  if (user.length === 0) return res.status(404).json({ message: 'User not found!' });

  next();
};
