let db = require("../db/models/index")
let bcrypt = require("bcryptjs");

let rutaRegistracion = {

    registracion: function(req, res) {
        res.render('registracion')   
    },
    storeUser: function(req, res) {
        let nombre = req.body.nombre
        let apellido = req.body.apellido
        let nombreUsuario = req.body.nombreUsuario
        let mail = req.body.email
        let password = bcrypt.hashSync(req.body.password)
        let fecnac = req.body.fechaDeNacimiento
    
        
        let usuario = {
            Nombre : nombre,
            Apellido : apellido,
            Nombre_Usuario : nombreUsuario,
            Mail : mail,
            Password : password,
            Nacimiento : fecnac
            
        }
        console.log(usuario)  
        
        
        db.Usuario.create(usuario)
       .then(function() {
        res.redirect("/home")
        })
    }
   

}


module.exports = rutaRegistracion