let controladorDetalleUsuario = {

    detalleUsuario: function(req, res) {
        let idUsuario = req.params.id
        // atento porque en un momento no me funcionaba y dsp me funciono de la nada. no se bien que toque 
        // pero ahora te deriva al detalle de usuario indicado desde el home :)
        res.render("detalleUsuario", {idUsuario: idUsuario})   
    }
}


module.exports = controladorDetalleUsuario