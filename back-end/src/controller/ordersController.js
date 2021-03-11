const { Router } = require('express')

const controller = Router()


controller.get('/', (req, res) => res.send('Orders'))

module.exports = controller;