module.exports = {
  validName: (name) => /^[a-zA-Z ]+$/.test(name) && name.length > 11,
  // validEmail: (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i.test(email),
  validEmail: (email) => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email),
  validPassword: (password) => password.length > 5,
};
