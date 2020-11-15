let db = require('../db/models/index')
let rutaEditarUsuario = {

    editarUsuario: function(req, res) {
       // res.render("editarUsuario", {usuarioLogueado : req.session.user}) 
       console.log(req.session.user);
        if (req.session.user == undefined){
            res.redirect("/login");
        
            }
let usuario = db.Usuario.findOne(req.session.user.id)
            .then(function(usuario){
                res.render('editarUsuario', {usuario: usuario, usuarioLogueado : req.session.user})
            })
            
              
    }
}


module.exports = rutaEditarUsuario