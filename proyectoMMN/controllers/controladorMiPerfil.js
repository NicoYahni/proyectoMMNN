const db = require("../db/models/index")
let controladorMiPerfil = {

    miPerfil: function(req, res) {
       // if (req.session.user == undefined){
         //   res.redirect("/login");
           // }
            
        let idUsuario = req.session.user.idUsuario

        db.Usuario.findByPk(idUsuario)
        .then (function(usuario){
            
        res.render("miPerfil", {usuario: usuario, usuarioLogueado : req.session.user })   
    })
}
}


module.exports = controladorMiPerfil