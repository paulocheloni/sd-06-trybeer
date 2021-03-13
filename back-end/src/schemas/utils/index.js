const { isEmailValid, isBlank, isLessThan } = require('../helpers');

const validatePasswordField = (pass) => {
  switch (true) {
    case isBlank(pass): throw new Error('!pass');
    case isLessThan(pass.length, 6): throw new Error('!pass.length');
    default: return null;
  }
};

const validateEmailField = (email) => {
  switch (true) {
    case isBlank(email): throw new Error('!email não tem campo');
    case isEmailValid(email): throw new Error('!isValid formato errado');
    default: return null;
  }
};

module.exports = {
  validatePasswordField,
  validateEmailField,
};
