const {
  validateUserName,
  validateEmailField,
} = require('./utils');

module.exports = (name, email) => {
  validateUserName(name);
  validateEmailField(email);
};
