const express = require('express');

const controllers = require('../controllers/users');

const users = express.Router();

users.put('/profile', controllers.profile);
users.post('/register', controllers.register);

module.exports = users;
