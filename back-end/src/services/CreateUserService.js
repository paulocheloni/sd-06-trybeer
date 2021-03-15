const User = require('../models/User');

// Componente de repostas https
const { status } = require('../util/dataStatus');
const { sucess } = status;

const createUser = async (name, email, password, role) => {
  const emailExists = await User.findByEmail(email);
  if (emailExists) return { status: , message: }
  const user = await User.createUser(name, email, password, role);

  return { status: sucess, message: email, user };
};

module.exports = createUser;
