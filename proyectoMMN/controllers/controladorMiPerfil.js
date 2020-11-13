let rutaMiPerfil = {

    miPerfil: function(req, res) {
        let idUsuario = req.params.id

        db.Usuario.findByPk(idUsuario)
        .then (function(usuario){
            
        res.render("miPerfil", {usuario: usuario })   
    })
}
}


module.exports = rutaMiPerfil