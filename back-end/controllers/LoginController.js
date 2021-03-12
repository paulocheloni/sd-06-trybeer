const { Router } = require('express');
const Login = require('./Login');
const serviceLogin = require('../services/serviceLogin');

const router = Router();

router.post('/', serviceLogin.validateFieldLogin, Login);

module.exports = router;
