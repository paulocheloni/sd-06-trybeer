const jwt = require('jsonwebtoken');
const UserModel = require('../Model/userModel');

const secret = 'secretToken';

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.loginUser(email, password);
  console.log(user);
  // if (!user) throw new Error;
  const token = jwt.sign({ user }, secret);
  user.token = token;
  return res.status(200).json({ user });
};

module.exports = { loginUser };
