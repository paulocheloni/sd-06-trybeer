const { Router } = require('express')

const controller = Router()


controller.get('/', (_req, res) => res.send('Admin'))

module.exports = controller;
