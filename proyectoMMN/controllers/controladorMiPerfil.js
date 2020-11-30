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
          let idUsuario = req.session.user.idUsuario        //la informacion del usuario ya esta guardad en la session porque ya esta logeado. Y si no esta logeado no puede entrar a "miPerfil"
          db.Post.findAll(                                  //todos los posteos que haya hecho este usuario
            {
            where:  {
                   
              Id_usuario : idUsuario                        // es un "match" del id del que hizo log in con la info del mismo id que tiene los posteos en la base de datos
           
             
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