const db = require("../db/models/index")
let controladorMiPerfil = {

//     miPerfil: function(req, res) {
//        if (req.session.user == undefined){
//            res.redirect("/login");
//            }
            
//         let idUsuario = req.session.user.idUsuario

//         db.Usuario.findByPk(idUsuario)
//         .then (function(usuario){
//           console.log('sarasa');
//         res.render("miPerfil", {usuario: usuario, usuarioLogueado : req.session.user })   
//         //me doy cuenta que todo esto de miPerfil no hacia falta porque podria traer la informacion del usuario desde 
//         // la vista directamente usando user.yAcaLaColumnaQueQuiera
//         // lo saco por las dudas me rompa
//     })
// },

        informacion: function(req, res) {
          console.log('LLEGUE O NO LLEGUE');
          let idUsuario = req.session.user.idUsuario
          db.Post.findAll(
            {
            where:  {
                   
              Id_usuario : idUsuario
           
             
               }
              
         }
            
   
         )
          .then (function(posteos){
            console.log('sarasa2');
           console.log(posteos)
          res.render("miPerfil", {posteos: posteos, usuarioLogueado : req.session.user })   
          console.log('lo mandoooooo')
        })
        }

}


module.exports = controladorMiPerfil