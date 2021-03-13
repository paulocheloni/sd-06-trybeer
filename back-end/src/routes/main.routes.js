const express = require('express');

const { log } = require('../middlewares');

const sessionRouter = require('./session.routes');

const routes = express.Router();

routes.use(log);

routes.use('/login', sessionRouter);

module.exports = routes;
