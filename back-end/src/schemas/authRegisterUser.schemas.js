const { validatePasswordField, validateEmailField } = require('./utils');
const { isBlank } = require('./helpers');

const error = {
  nameFieldRequired: 'C_ERR_NAME_REQ',
  invalidName: 'C_ERR_NAME_INVALID',
  invalidFieldIsVendor: 'C_ERR_ISVENDOR_INVALID',
  unavaibleEmail: 'C_ERR_EMAIL_UNAVAIBLE',
};

const userNameRegex = /^[a-z ,.'-]{12,}$/i;

const isUserNameValid = (name) => !userNameRegex.test(name);

const validateUserName = (name) => {
  switch (true) {
    case isBlank(name): throw new Error(error.nameFieldRequired);
    case isUserNameValid(name): throw new Error(error.invalidName);
    default: return null;
  }
};

const validateIsVendor = (bool) => {
  if (typeof bool !== 'boolean') throw new Error(error.invalidFieldIsVendor);
};

const verifyEmailAvaibility = (object) => {
  if (typeof object !== 'undefined') throw new Error(error.unavaibleEmail);
};

module.exports = ({ name, email, password, isVendor = false }, isEmailAvaible) => {
  verifyEmailAvaibility(isEmailAvaible);
  validateUserName(name);
  validateEmailField(email);
  validatePasswordField(password);
  validateIsVendor(isVendor);
};
