let db = require('../db/models/index')
let rutaEditarPerfil = {

    editarPerfil: function(req, res) {
       // res.render("editarUsuario", {usuarioLogueado : req.session.user}) 
       console.log(req.session.user);
        if (req.session.user == undefined){
            res.redirect("/login");
        
            }
let usuario = req.body; 
            db.Usuario.update({
                Nombre: usuario.Nombre, 
                Apellido: usuario.Apellido,
                NombreUsuario: usuario.NombreUsuario,
                Mail:usuario.Mail,
                Password:usuario.Password
            
            }, {
                where:{ idUsuario: req.session.user.idUsuario
                } }).then(()=> {
                    res.redirect("/miPerfil");
                })
              
        }
}


module.exports = rutaEditarPerfil