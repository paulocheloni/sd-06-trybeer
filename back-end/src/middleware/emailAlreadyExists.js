const { UserModel } = require('../model');

module.exports = async (req, res, next) => {
  const { email } = req.body;

  const [emailAlreadyExists] = await UserModel.getUserByEmail(email);

  if (emailAlreadyExists === undefined) {
    return next();
  } else {
    return res
    .status(409)
    .json({ message: 'Email Already Exists' });
  }
};
