const { generateToken } = require('../security');

const { users } = require('../models');

const login = async ({ email, password }) => {
  console.log({ email, password });
  const user = await users.queryByEmail(email);
  // CHECKPOINT
  // validateLogin(email, password, user);
};

module.exports = {
  login,
};
