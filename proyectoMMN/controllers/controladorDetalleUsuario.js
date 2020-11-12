let controladorDetalleUsuario = {

    detalleUsuario: function(req, res) {
        let idUsuario = req.params.id

        res.render("detalleUsuario", {idUsuario: idUsuario})   
    }
}


module.exports = controladorDetalleUsuario