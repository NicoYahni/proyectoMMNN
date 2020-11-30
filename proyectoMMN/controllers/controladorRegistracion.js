let db = require("../db/models/index")
let bcrypt = require("bcryptjs");

let rutaRegistracion = {

    registracion: function(req, res) {                                  //la parte del GET de la ruta
        if (req.session.usuarioLogueado != undefined){
            res.redirect("/home");
            }
            
        res.render('registracion', {usuarioLogueado : req.session.user})   
    },
    storeUser: function(req, res) {                                     //la parte del POST de la ruta. Guarda la informacion que el usuario ingreso bajo variables
        let nombre = req.body.nombre
        let apellido = req.body.apellido
        let nombreUsuario = req.body.nombreUsuario
        let mail = req.body.email
        let password = bcrypt.hashSync(req.body.password)
        let fecnac = req.body.fechaDeNacimiento
        let pregunta = req.body.preguntaSeguridad
        // let respuesta = req.body.respuestaSeguridad
        // no me deja encriptar la respuesta de seguridad. cuando la mando encriptada me queda cargando en el registro
        // cuando va normal se manda bien
         let respuesta = bcrypt.hashSync(req.body.respuestaSeguridad)

        let usuario = {                             //let = crear variable, creas el paquete "usuario" que contenga toda la informacion
            Nombre : nombre,
            Apellido : apellido,
            Nombre_Usuario : nombreUsuario,
            Mail : mail,
            Password : password,
            Nacimiento : fecnac,
            Pregunta_Seguridad : pregunta,
            Respuesta_Seguridad : respuesta         
        }
        console.log(usuario)  
        
        
        db.Usuario.create(usuario)                  //en la base de datos, en la tabla de Usuario, inserta toda la informacion de "usuario"
       .then(function() {
        res.redirect("/home")
        })
    }
}


module.exports = rutaRegistracion
