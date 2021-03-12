module.exports = (password) => {
  const mailRegex = /[A-Za-z0-9]{6,}/;
  return mailRegex.test(password);
};