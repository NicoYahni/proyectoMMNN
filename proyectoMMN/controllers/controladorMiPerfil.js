let rutaMiPerfil = {

    miPerfil: function(req, res) {
        if (req.session.usuarioLogueado == undefined){
            res.redirect("/login");
            }
            
        let idUsuario = req.params.id

        db.Usuario.findByPk(idUsuario)
        .then (function(usuario){
            
        res.render("miPerfil", {usuario: usuario, usuarioLogueado : req.session.user })   
    })
}
}


module.exports = rutaMiPerfil