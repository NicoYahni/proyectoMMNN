const bcrypt = require ('bcryptjs');
const db = require('../db/models');
const users = db.Usuario;                       //users es lo mismo a db.Usuario

const op = db.Sequelize.Op;

let controladorLogin = {
    index: function(req, res){
        return res.render('login');
        },


        login: function(req, res){              //busca en la base de datos toda la informacion del usuario que acaba de ingresas
            users.findOne({
                where: [{ Nombre_Usuario: req.body.user }] 
            })
            .then( function (user) {            
                console.log(req.body)
                console.log(user)
                if(user == null) {
                    return res.send("Usuario incorrecto")
                } 
                else if (bcrypt.compareSync(req.body.password, user.Password) == false) {
                    return res.send("contraseña incorrecta")
                } else if (bcrypt.compareSync(req.body.password, user.Password) ){
                    
                    req.session.user = user
                    console.log(user);
                    if(req.body.rememberme != undefined) {
                        res.cookie('usuario', user.id, {maxAge : 20*1000})
                    }
                    return res.redirect('/home')
                }

            })
            .catch( e => console.log(e))                            //busca el error

           


        },
        
}

module.exports = controladorLogin