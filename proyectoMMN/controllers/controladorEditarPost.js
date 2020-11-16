let db = require('../db/models/index')
let rutaEditarPost = {

    editarPost: function(req, res) {
       // res.render("editarUsuario", {usuarioLogueado : req.session.user}) 
       console.log(req.session.user);
        if (req.session.user == undefined){
            res.redirect("/login");
        
            }
let usuario = req.body; 
            db.Usuario.update({
                Texto_Posteo: usuario.Texto_Posteo, 
                URL: usuario.URL,
                Fecha_Creacion: usuario.Fecha_Creacion,
                Id_usuario:usuario.Id_usuario,
            
            }, {
                where:{ idUsuario: req.session.user.idUsuario
                } }).then(()=> {
                    res.redirect("/miPerfil");
                })
              
        },
        eliminar: function(req, res) {
           
        
     let idPost = req.body.idPost; 
                 db.Post.destroy(
                    {
                     where:{ 
                         idPost: idPost
                     } 
                    })
                    .then(function(){
                         res.redirect("/home");
                     })
                   
             }

}


module.exports = rutaEditarPost