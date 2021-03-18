const { users } = require('../models');
const { generateToken } = require('../security');
const { authRegisterUser, utils: { validateUserName } } = require('../schemas');

const create = async (body) => {
  const data = body;
  const { name, email } = data;

  const isEmailAvaible = await users.queryByEmail(email);
  authRegisterUser(data, isEmailAvaible);

  data.role = (data.isVendor) ? 'administrator' : 'client';
  const newUserId = await users.insertNewUser(data);

  const token = generateToken(newUserId, data.role);
  const { role } = data;
  return { name, email, token, role };
};

const updateName = async ({ name }, id) => {
  validateUserName(name);
  return users.updateNameByEmail(name, id);
};

module.exports = {
  create,
  updateName,
};
