const { validatePasswordField, validateEmailField } = require('./utils');
const { isBlank, isNotEqual } = require('./helpers');

const authUser = (email, pass, user) => {
  switch (true) {
    case isBlank(user): throw new Error('!user não encontrado');
    case isNotEqual(email, user.email): throw new Error('email !== emailFromDb');
    case isNotEqual(pass, user.password): throw new Error('pass !== passFromDb');
    default: console.log('All good from AuthLogin.');
  }
};

module.exports = (email, pass, user) => {
  validateEmailField(email);
  validatePasswordField(pass);
  authUser(email, pass, user);
};
