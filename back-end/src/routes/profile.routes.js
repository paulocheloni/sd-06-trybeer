const express = require('express');

const controllers = require('../controllers/profile');

const profile = express.Router();

profile.post('/', controllers.profile);

module.exports = profile;
