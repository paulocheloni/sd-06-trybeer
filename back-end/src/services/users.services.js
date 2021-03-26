const bcrypt = require('bcrypt');
const { users, utils } = require('../models');
const { generateToken } = require('../security');
const { authRegisterUser, utils: { validateUserName } } = require('../schemas');

const create = async (body) => {
  const data = body;
  const { name, email } = data;

  const [isEmailAvailable] = await utils.getByFilter({
    table: 'users',
    filter: 'email',
    value: email,
  });

  authRegisterUser(data, isEmailAvailable);

  data.role = (data.isVendor) ? 'administrator' : 'client';

  const numOfGens = 5;
  const salt = await bcrypt.genSalt(numOfGens);
  const passwordHash = await bcrypt.hash(data.password, salt);

  const dataNewUser = {
    name,
    email,
    passwordHash,
    role: data.role,
  };

  const newUserId = await users.insertNewUser(dataNewUser);

  const token = generateToken(newUserId, data.role);
  return { name, email, token, role: data.role };
};

const updateName = async (name, id) => {
  validateUserName(name);
  return users.updateNameByEmail(name, id);
};

module.exports = {
  create,
  updateName,
};
