let db = require('../db/models/index')
let op = db.Sequelize.Op;
let controladorPostBuscado = {

  buscador: function(req, res) {
    
        
    res.render('postBuscado', {usuarioLogueado : req.session.user})   
}
,

   resultado: function(req, res) {
     
   let postBuscado = req.query.postBuscado
     db.Post.findAll(
         {
         where:  {
                
          Texto_Posteo : {[op.like]: "#"+'%'+ postBuscado + '%'}
       
          
            }
            // no puedo ordenarlos ni limitarlos
            // ,
            
            // order: ["Fecha_Creacion 'ASC'"],
            // limit: 5
          
          
          
          
        
      }
         

      )
      .then(function(posteos){
          if (posteos == 0) {
            res.render('/home')
            // aca me esta tirando error. esta es la parte en la que habria que mandar un mensaje en la vista resultadoBusqueda.ejs 
            // que diga. "Lo sentimos! no encontramos ningun usuario"
          } else {
            res.render('postBuscadoResultado', {posteos: posteos, usuarioLogueado : req.session.user})
          }

  
      
      })

      
      
        
  }
}


module.exports = controladorPostBuscado