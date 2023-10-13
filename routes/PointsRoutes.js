
const express = require('express')
const routerPoints =  express.Router()

const PointsController = require('../controllers/PointsController')

routerPoints.get('/points', PointsController.showAll)
routerPoints.post('/points', PointsController.PointsSave)

module.exports = routerPoints