const registerModel = require('../models/registerModels');

// Get all users
const getAll = async () => {
  const users = await registerModel.getAll();
  return users;
};

// Create a user
const create = async (name, email, password, role) => {
  const findByName = await registerModel.findByEmail(email);
  if (findByName.length !== 0) {
    return { error: true, code: 'conflict', message: 'E-mail already in database.' };
  }
  const users = await registerModel.create(name, email, password, role);
  return users;
};

// Delete a user
const exclude = async (id) => {
  const users = await registerModel.exclude(id);
  return users;
};

// Edit a user
const edit = async (prevName, nextName) => {
  const users = await registerModel.edit(nextName, prevName);
  return users;
};

module.exports = {
  getAll,
  create,
  exclude,
  edit,
};
