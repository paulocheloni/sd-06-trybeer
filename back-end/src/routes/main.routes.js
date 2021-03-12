const express = require('express');

const sessionRouter = require('./session.routes');

const routes = express.Router();

routes.use('/login', sessionRouter);

module.exports = routes;
