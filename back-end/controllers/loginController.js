const { Router } = require('express');
const login = require('./login');
const serviceLogin = require('../services/serviceLogin');

const router = Router();

router.post('/', serviceLogin.validateFieldLogin, login);

module.exports = router;
