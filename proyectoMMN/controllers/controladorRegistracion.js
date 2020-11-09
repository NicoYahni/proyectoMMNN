let db = require("../db/models/index")

let rutaRegistracion = {

    registracion: function(req, res) {
        res.render("registracion")   
    },
    storeUser: function(req, res) {
        let nombre = req.body.nombre
        let apellido = req.body.apellido
        let nombreUsuario = req.body.nombreUsuario
        let mail = req.body.email
        let password = req.body.password
        let fec_nac = req.body.fechaDeNacimiento
    
        
        let usuario = {
            Nombre : nombre,
            Apellido : apellido,
            Nombre_Usuario : nombreUsuario,
            Email : mail,
            Password : password,
            Nacimiento : fec_nac
            
            
            
        }
                
        db.Usuario.create(usuario)
        .then(function() {
        res.redirect("/home")
        })
    }
   

}


module.exports = rutaRegistracion