let db = require("../db/models/index")
let rutaAgregarPost = {

    agregarPost: function(req, res) {
         res.render("agregarPost",{usuarioLogueado : req.session.user})
         if (req.session.usuarioLogueado == undefined){
            res.redirect("/login");
            }
            
    },
        storePost: function(req, res) {
            let posteos = {
                Texto_Posteo: req.body.textoPublicado,
                Fecha_Creacion: req.body.Fecha_Creacion,
                URL: req.body.url,
                Id_usuario: req.body.Id_usuario
              }

        db.Post.create(posteos)
        .then(function() {
         return res.redirect("/home")
         })
}}
 //<form action=""></form>// -->


module.exports = rutaAgregarPost