let rutaEditarUsuario = {

    editarUsuario: function(req, res) {
        res.render("editarUsuario", {usuarioLogueado : req.session.user})   
    }
}


module.exports = rutaEditarUsuario