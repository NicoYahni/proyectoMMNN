let rutaEditarUsuario = {

    editarUsuario: function(req, res) {
        res.render("editarUsuario", {usuarioLogueado : req.session.user}) 
        if (req.session.usuarioLogueado == undefined){
            res.redirect("/login");
            }
              
    }
}


module.exports = rutaEditarUsuario