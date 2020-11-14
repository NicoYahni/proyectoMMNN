let rutaDetallePost = {

    detallePost: function(req, res) {
        res.render("detallePost",{usuarioLogueado : req.session.user} )   
    }
}


module.exports = rutaDetallePost