const userModel = require('../model/User');
const { NOT_FOUND } = require('../schema/statusSchema');

// Return all Users
const getAll = async () => {
  const users = await userModel.getAll();
  return users;
};

// Add new Users
const createNewUser = async (name, email, password, role) => {
  const user = await userModel.createUser(name, email, password, role);
  return user;
};

// // Verify user by email and password
const verifyUser = async (email, password) => {
  const user = await userModel.verifyUser(email, password);
  return user;
};

// Update name
const update = async (id, name) => {
  const user = await userModel.updateName(id, name);
  return user;
};

// Verify id
const verifyId = async (req, res, next) => {
  const { id } = req.params;
  const exist = await userModel.findById(id);

  if (!exist) {
    res.status(NOT_FOUND).json({ message: 'incorreted id' });
  }

  next();
};

module.exports = {
  getAll,
  createNewUser,
  verifyUser,
  update,
  verifyId,
};
