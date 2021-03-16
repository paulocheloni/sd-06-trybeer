const express = require('express');

const { log, handleError } = require('../middlewares');

const sessionRouter = require('./session.routes');
const productsRouter = require('./products.routes');

const routes = express.Router();

routes.use(log);

routes.use('/login', sessionRouter);

routes.use('/products', productsRouter);

routes.use(handleError);

module.exports = routes;
