const { Router } = require('express')

const controller = Router()


controller.get('/', (req, res) => res.send('Products'))

module.exports = controller;