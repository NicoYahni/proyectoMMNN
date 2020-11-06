let db = require("../db/models/index")

let rutaRegistracion = {

    registracion: function(req, res) {
        res.render("registracion")   
    },
    storeUser: function(req, res) {
        let nombre = req.body.nombreUsuario
        let mail = req.body.emailUsuario 
        let password = req.body.passwordUsuario

        let usuario = {
            name : nombre,
            password : password,
            email : mail
        }
                
        db.Usuarios.create(usuario)
        .then(function() {
        res.redirect("/home")
        })
    }
   

}


module.exports = rutaRegistracion