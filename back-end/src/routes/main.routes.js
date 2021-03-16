const express = require('express');

const { log, handleError } = require('../middlewares');

const sessionRouter = require('./session.routes');
const usersRouter = require('./users.routes');
const productsRouter = require('./products.routes');
const salesRouter = require('./sales.routes');

const routes = express.Router();

routes.use(log);

routes.use('/login', sessionRouter);
routes.use('/register', usersRouter);
routes.use('/products', productsRouter);
routes.use('/sales', salesRouter);

routes.use(handleError);

module.exports = routes;
