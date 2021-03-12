const { UserModel } = require('../model');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const [user] = await UserModel.getUser(email);

  if (user.length === 0 || user.password !== password) {
    return res
      .status(404)
      .json({ message: 'Invalid email or password' });
  }

  next();
};
