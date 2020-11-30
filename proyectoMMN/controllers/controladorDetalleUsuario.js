const db = require("../db/models/index")
let controladorDetalleUsuario = {

  detalleUsuario: function(req, res) {
    console.log('ACA ESTOY');
    let idUsuario = req.params.id         //declara el ID, porque depende de que ID declare te trae diferente informacion

    db.Usuario.findByPk(idUsuario, {
      include: [
       {association: "relacion"}          //buscar el ID en la combinacion de las tablas POST y USUARIOS que se llama "relacion"
      ]                                           //vos queres los posteos del id que pediste antes.
     }) 
    .then (function(usuario){             //todo lo de antes de esto, que venga en la variable usuario
        res.render("detalleUsuario", {usuario: usuario, usuarioLogueado : req.session.user}) //todo lo de "usuario" mandalo a detalleUsuario, la info del usuario
    })
      
},
                                            //TODO LO DE ACA ABAJO NO ANDA PORQUE EN LA RUTA, LOS DOS TIENEN LA MISMA URL Y ESO NO SE PUEDE
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
          
    }
   
}


module.exports = controladorDetalleUsuario