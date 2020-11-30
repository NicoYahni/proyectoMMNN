let db = require('../db/models/index')
let op = db.Sequelize.Op;                   //cuando queres usar otro operador que no sea where, lo declaras aca.
let controladorPostBuscado = {

  buscador: function(req, res) {
    
        
    res.render('postBuscado', {usuarioLogueado : req.session.user})   
}
,

   resultado: function(req, res) {
     
   let postBuscado = req.query.postBuscado      //AL SER POR GET LA INFORMACION QUE ESCRIBA VIAJA A LA URL BAJO LA CLAVE QUE PUSIMOS DE NAME EN LA VISTA (EN ESTE CASO ES "postBuscado").
                                                // con req.query traigo la inofromacion de la url que esta bajo el nombre "postBuscado"

     db.Post.findAll(                           //Busca de la columna de posteos todos los posteos
         {
         where:  {                              // aca voy a hacer un FILTRO
                
          Texto_Posteo : {[op.like]: "#" +'%'+ postBuscado + '%'}   //para que busque que contenga lo que busque de la columna de Texteo_Posteo
          //"#"+
          
            }
            // no puedo ordenarlos ni limitarlos
            // ,
            
            // order: ["Fecha_Creacion 'ASC'"],
            // limit: 5
      }
         

      )
      .then(function(posteos){                            //despues de la promesa (findAll) hace esto:
          if (posteos == 0) {
            res.send('Lo sentimos! no encontramos resultados para tu busqueda!')
            
          } else {
            res.render('postBuscadoResultado', {posteos: posteos, usuarioLogueado : req.session.user})
          }
      })    
  }
}


module.exports = controladorPostBuscado
