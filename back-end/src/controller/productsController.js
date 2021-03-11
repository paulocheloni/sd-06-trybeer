const { Router } = require('express');

const controller = Router();

controller.get('/', (_req, res) => res.send('Products'));

module.exports = controller;