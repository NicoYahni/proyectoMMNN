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
            console.log(usuarios)

    
        res.render('resultadoBusqueda', {usuarios: usuarios})
        })

        
        
          
    }
}


module.exports = rutaResultadoBusqueda