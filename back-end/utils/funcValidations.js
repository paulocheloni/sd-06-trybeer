const validateEmail = (email) => {
  const mailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return mailRegex.test(email);
};

const validateName = (name) => {
  const nameRegex = /^[a-zA-Z]{12,}/;
  return nameRegex.test(name);
};

const validatePassword = (password) => {
  const mailRegex = /[A-Za-z0-9]{6,}/;
  return mailRegex.test(password);
};

module.exports = {
  validateEmail,
  validateName,
  validatePassword
}
