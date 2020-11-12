const db = require("../db/models/index")
let controladorDetalleUsuario = {

    detalleUsuario: function(req, res) {
        let idUsuario = req.params.id
        // atento porque en un momento no me funcionaba y dsp me funciono de la nada. no se bien que toque 
        // pero ahora te deriva al detalle de usuario indicado desde el home :)

        // aca hay que hacer un findByPk si no me equivoco usando el idUsuario traido con req.params
        // y con eso mandar a la vista toda la info de ese usuario
        db.Usuario.findByPk(idUsuario)
        .then (function(usuario){
            res.render("detalleUsuario", {usuario: usuario}) 
        })
          
    }
}


module.exports = controladorDetalleUsuario