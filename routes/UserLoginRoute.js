const express = require('express')
const router =  express.Router()

const UserController = require('../controllers/UserLoginController')


router.get('/login', UserController.loginUser)
router.post('/login', UserController.loginUserSave)


module.exports = router