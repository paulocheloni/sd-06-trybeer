const { Router } = require('express');
const ProfileService = require('../services/ProfileService');
const ProfileUpdateService = require('../services/ProfileUpdateService');

const ProfileController = new Router();

ProfileController.post('/', ProfileService);
ProfileController.put('/update/name', ProfileUpdateService);

module.exports = ProfileController;