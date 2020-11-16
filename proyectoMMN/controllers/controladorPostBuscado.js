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
                
          Texto_Posteo : {[op.like]: "#" +'%'+ postBuscado + '%'}
          //"#"+
          
            }
            // no puedo ordenarlos ni limitarlos
            // ,
            
            // order: ["Fecha_Creacion 'ASC'"],
            // limit: 5
      }
         

      )
      .then(function(posteos){
          if (posteos == 0) {
            res.send('Lo sentimos! no encontramos resultados para tu busqueda!')
            
          } else {
            res.render('postBuscadoResultado', {posteos: posteos, usuarioLogueado : req.session.user})
          }
      })    
  }
}


module.exports = controladorPostBuscado
