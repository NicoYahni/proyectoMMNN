let db = require('../db/models/index')
let op = db.Sequelize.Op;
let rutaResultadoBusqueda = {

    resultadoBusqueda: function(req, res) {
        let usuarioBuscado = req.query.usuarioBuscado
        db.Usuario.findAll(
            {
            where:  {
                [op.or]: [
                  {
                    Nombre_Usuario: {
                      [op.like]: '%' + usuarioBuscado + '%'
                    }
                  },
                  {
                    Mail: {
                      [op.like]: '%' + usuarioBuscado + '%'
                    }
                  }
                ]
              }
            
            
            
            //[
           //{ Nombre_Usuario : {[op.like]: '%' + usuarioBuscado + '%'}},
           //{ Nombre_Usuario : {[op.like]: '%' + usuarioBuscado + '%'}}
           
           //] 
        }
           

        )
        .then(function(usuarios){
            if (usuarios== 0) {
              
              res.send('Lo sentimos! no encontramos resultados para tu busqueda!')
              // aca me esta tirando error. esta es la parte en la que habria que mandar un mensaje en la vista resultadoBusqueda.ejs 
              // que diga. "Lo sentimos! no encontramos ningun usuario"
            } else {
              res.render('resultadoBusqueda', {usuarios: usuarios, usuarioLogueado : req.session.user})
            }

    
        
        })

        
        
          
    }
        
  
}


module.exports = rutaResultadoBusqueda