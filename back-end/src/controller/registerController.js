const { Router } = require('express')

const controller = Router()


controller.get('/', (req, res) => res.send('Register'))

module.exports = controller;