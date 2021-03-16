const express = require('express');

const { log, handleError } = require('../middlewares');

const sessionRouter = require('./session.routes');

const profileRouter = require('./profile.routes');

const routes = express.Router();

routes.use(log);

routes.use('/login', sessionRouter);

routes.use('/profile', profileRouter);

routes.use(handleError);

module.exports = routes;
