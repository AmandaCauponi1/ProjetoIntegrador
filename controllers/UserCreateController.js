const UserCreate  = require('../models/UserCreate')
const bcrypt = require('bcryptjs')

module.exports = class UserCreateController {
   
    static createUser(req, res){
        return res.render('auth/create')
    }
    static async createUserSave(req, res){
        // const {name, email, tel, password, confirmpassword} = req.body
        const user = {
            name: req.body.name,
            email: req.body.email,
            tel: req.body.tel,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        }
        // if(password != confirmpassword){
        //     req.flash('message', 'As senhas não conferem, tente novamente')
        //     return res.render('auth/create')
        //   }
        await UserCreate.create(user)
        return res.redirect('/')

        // const checkUserExist = await UserCreate.findOne({where: {email:email}})
        // if(checkUserExist){
        //   req.flash("message", "O email já está em uso!");
        //   res.render("auth/create");
        //   return
        // }
    
        // // Criptografar a senha do usuario
        // const salt = bcrypt.genSaltSync(10)
        // const hashedPassword = bcrypt.hashSync(password, salt)
    
        // // criar o objeto do usuario para o banco:
        // const user = {
        //   name,
        //   email,
        //   tel,
        //   password: hashedPassword,
        // }
    
        // // try: inserir usuario no banco e trabalhara com sessão
        // try {
    
        // const createUser =  await UserCreate.create(user)
    
        //  req.session.userId = createUser.id
    
        //   req.flash('message', 'Cadastro realizado com sucesso!')
    
        //   req.session.save(()=>{
        //     res.redirect('/')
        //   })
    
    
        // } catch (error) {
        //   console.log(error)
    
        // }
    }
   
} 


