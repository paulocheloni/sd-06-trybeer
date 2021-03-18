const express = require('express');

const controllers = require('../controllers/admin');
const middlewares = require('../middlewares');

const admin = express.Router();

admin.get('/sales', middlewares.authToken, middlewares.authAdmin, controllers.sales);

module.exports = admin;
