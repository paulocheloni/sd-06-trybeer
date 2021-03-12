const { Router } = require('express');
const controllers = require('./controller');

const routes = Router();

routes.use('/login', controllers.loginController);
routes.use('/users', controllers.usersController);
routes.use('/products', controllers.productsController);
routes.use('/sales', controllers.salesController);

module.exports = routes;