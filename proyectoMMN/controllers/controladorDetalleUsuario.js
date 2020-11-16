const db = require("../db/models/index")
let controladorDetalleUsuario = {

    detalleUsuario: function(req, res) {
        let idUsuario = req.params.id
        db.Usuario.findByPk(idUsuario)
        .then (function(usuario){
            res.render("detalleUsuario", {usuario: usuario, usuarioLogueado : req.session.user}) 
        })
          
    }
}


module.exports = controladorDetalleUsuario