const { Router } = require('express');
const controllers = require('./controller')

const routes = Router();

routes.use('/login', controllers.loginController)
routes.use('/admin', controllers.adminController)
routes.use('/profile', controllers.profileController)
routes.use('/products', controllers.productsController)
routes.use('/orders', controllers.ordersController)
routes.use('/register', controllers.registerController)

module.exports = routes;