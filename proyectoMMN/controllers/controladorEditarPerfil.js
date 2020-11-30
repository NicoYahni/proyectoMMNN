let db = require('../db/models/index')
let bcrypt = require("bcryptjs");                       //PARA ENCRIPTAR LA CONTRASENA
let rutaEditarPerfil = {

    editarPerfil: function(req, res) {
       // res.render("editarUsuario", {usuarioLogueado : req.session.user}) 
       console.log(req.session.user);
        if (req.session.user == undefined){
            res.redirect("/login");
        
            }
let usuario = req.body;                                             //usuario = a req.body: por POST.
let password = bcrypt.hashSync(usuario.Password)
            db.Usuario.update({                                     //uso de la funcion "update" para poder editar los datos
                Nombre: usuario.Nombre, 
                Apellido: usuario.Apellido,
                NombreUsuario: usuario.NombreUsuario,
                Mail:usuario.Mail,
                Password:password                                   // password: es lo que dice en la linea 13
            
            }, {
                where:{ idUsuario: req.session.user.idUsuario       //solo puedo updetearlo el dueno del perfil. idUsuario = al id del usuario logeado
                } }).then((user)=> {
                    
                    res.redirect("/miPerfil");
                })
              
        }
}


module.exports = rutaEditarPerfil