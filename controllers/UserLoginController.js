const UserLogin = require('../models/UserLogin')

module.exports = class UserLoginController {
    static loginUser(req, res){
        return res.render('auth/login')
    }
    static async loginUserSave(req, res){
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        await UserLogin.create(user)
        return res.redirect('/')
    }

   
} 