const express = require('express');

const { log, handleError } = require('../middlewares');

const sessionRouter = require('./session.routes');

const routes = express.Router();

routes.use(log);

routes.use('/login', sessionRouter);

routes.use(handleError);

module.exports = routes;
