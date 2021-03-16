const { UserModel } = require('../model');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const [user] = await UserModel.getUserByEmail(email);
  // console.log(user);
  // console.log(email, password);

  if (!user || user.password !== password) {
    console.log('entrou no if')
    return res
      .status(404)
      .json({ message: 'Invalid email or password' });
  }

  next();
};
