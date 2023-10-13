const express = require('express')
const routerCreate =  express.Router()

const UserCreateController = require('../controllers/UserCreateController')

routerCreate.get('/create', UserCreateController.createUser)
routerCreate.post('/create', UserCreateController.createUserSave)


module.exports = routerCreate