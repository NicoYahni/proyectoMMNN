const db = require("../db/models/index")
let controladorDetalleUsuario = {

   
    postUsuario: function(req, res) {
        console.log('LLEGUE O NO LLEGUE');
        let idUsuario = req.params.id
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
        res.render("detalleUsuario", {posteos: posteos, usuarioLogueado : req.session.user })   
        console.log('lo mandoooooo')
      })
          
    },
    detalleUsuario: function(req, res) {
      console.log('ACA ESTOY');
      let idUsuario = req.params.id
      db.Usuario.findByPk(idUsuario)
      .then (function(usuario){
          res.render("detalleUsuario", {usuario: usuario, usuarioLogueado : req.session.user}) 
      })
        
  }

}


module.exports = controladorDetalleUsuario