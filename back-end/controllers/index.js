const routerLogin = require('./LoginController');
const routerProducts = require('./ProductsController');
const routerRegister = require('./RegisterController');
const routerProfile = require('./ClientProfileController');
const routerSales = require('./SalesController');

module.exports = {
  routerLogin, routerRegister, routerProducts, routerProfile, routerSales,
};
