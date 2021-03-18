const express = require('express');

const { log, handleError } = require('../middlewares');

const sessionRouter = require('./session.routes');
const usersRouter = require('./users.routes');
const productsRouter = require('./products.routes');
const salesRouter = require('./sales.routes');
const adminRouter = require('./admin.routes');

const routes = express.Router();

routes.use(log);

routes.use('/login', sessionRouter);
routes.use('/products', productsRouter);
routes.use('/sales', salesRouter);
routes.use('/user', usersRouter);
routes.use('/admin', adminRouter);

routes.use(handleError);

module.exports = routes;
