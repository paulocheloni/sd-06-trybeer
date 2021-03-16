const express = require('express');

const controllers = require('../controllers/profile');

const profile = express.Router();

profile.put('/', controllers.profile);

module.exports = profile;
