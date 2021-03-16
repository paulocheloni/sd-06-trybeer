const express = require('express');

const { log, handleError } = require('../middlewares');

const sessionRouter = require('./session.routes');
const usersRouter = require('./users.routes');

const routes = express.Router();

routes.use(log);

routes.use('/login', sessionRouter);

routes.use('/register', usersRouter);

routes.use(handleError);

module.exports = routes;
