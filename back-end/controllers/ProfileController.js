const { Router } = require('express');
const { ProfileAuthorization, ProfileUpdateService } = require('../services/ProfileService');

const ProfileController = new Router();

ProfileController.post('/', ProfileAuthorization);
ProfileController.put('/:id', ProfileUpdateService);

module.exports = ProfileController;