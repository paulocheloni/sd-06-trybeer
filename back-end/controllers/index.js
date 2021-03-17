const routerLogin = require('./LoginController');
const routerProducts = require('./ProductsController');
const routerRegister = require('./RegisterController');
const routerProfile = require('./ClientProfileController');

module.exports = {
  routerLogin, routerRegister, routerProducts, routerProfile,
};
