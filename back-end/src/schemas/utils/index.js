const { isEmailValid, isBlank, isLessThan } = require('../helpers');

const error = {
  emailFieldRequired: 'C_ERR_EMAIL_REQ',
  invalidEmail: 'C_ERR_EMAIL_INVALID',
  invalidPassword: 'C_ERR_PASS_INVALID',
  passwordFieldRequired: 'C_ERR_PASS_REQ',
};

const validatePasswordField = (pass) => {
  switch (true) {
    case isBlank(pass): throw new Error(error.passwordFieldRequired);
    case isLessThan(pass.length, 6): throw new Error(error.invalidPassword);
    default: return null;
  }
};

const validateEmailField = (email) => {
  switch (true) {
    case isBlank(email): throw new Error(error.emailFieldRequired);
    case isEmailValid(email): throw new Error(error.invalidEmail);
    default: return null;
  }
};

module.exports = {
  validatePasswordField,
  validateEmailField,
};
