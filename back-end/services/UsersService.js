const Err = require('../error/Err');
const { findByEmail, createUser } = require('../models/UsersModel');

const createUserService = ({name, password, email, role}) => {
  const user = findByEmail(email);
  if (user) {
    const errorInfo = {
      message: 'User is already registered',
    };
    throw new Err(errorInfo);
  }
  const newUser = createUser({name, password, email, role});
  return newUser;
}

const findByEmailService = () => {

}

module.exports = {
  createUserService,
  findByEmailService,
}
