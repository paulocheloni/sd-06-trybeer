const registerModel = require('../models/registerModels');

// Get all users
const getAll = async () => {
  const users = await registerModel.getAll();
  return users;
};

// Create a user
const create = async (name, email, password, role) => {
  const findByName = await registerModel.findByName(name);
  if (findByName.length !== 0) {
    return { error: true, code: 'conflict', message: 'Email already in database.' };
  }
  const users = await registerModel.create(name, email, password, role);
  return users;
};

// Delete a user
const exclude = async (id) => {
  const users = await registerModel.exclude(id);
  return users;
};

// Check if the email is in database
const checkEmailRegistered = async (email) => {
  const users = await registerModel.findByEmail(email);
  if (users.length) {
    return { error: true, code: 'conflict', message: 'E-mail already in database.' };
  }
  return users;
}

module.exports = {
  getAll,
  create,
  exclude,
  checkEmailRegistered,
};