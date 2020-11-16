let db = require('../db/models/index')
let bcrypt = require("bcryptjs");
let rutaEditarPerfil = {

    editarPerfil: function(req, res) {
       // res.render("editarUsuario", {usuarioLogueado : req.session.user}) 
       console.log(req.session.user);
        if (req.session.user == undefined){
            res.redirect("/login");
        
            }
let usuario = req.body; 
let password = bcrypt.hashSync(usuario.Password)
            db.Usuario.update({
                Nombre: usuario.Nombre, 
                Apellido: usuario.Apellido,
                NombreUsuario: usuario.NombreUsuario,
                Mail:usuario.Mail,
                Password:password
            
            }, {
                where:{ idUsuario: req.session.user.idUsuario
                } }).then((user)=> {
                    
                    res.redirect("/miPerfil");
                })
              
        }
}


module.exports = rutaEditarPerfil