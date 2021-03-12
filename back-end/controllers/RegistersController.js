const { createUserService } = require('../services/UsersService');

const register = (req, res) => {
  const { email, name, password, role } = req.body;
  const newUser = createUserService({ email, name, password, role });
  return res.status(201).json({newUser});
};


module.export = {
  register,
}