let db = require('../db/models/index')
let op = db.Sequelize.Op;
let controladorHome = {

    home: function(req,res) {
        db.Post.findAll({                                       //traeme todo los posteos (por el findAll) 
            include:[
                {association: "relacion"}                       //esta la conexion de las dos tablas de la base de datos, porque nesecitas info de ambas
            ]
                //order: ["Fecha_Creacion"]
                // no puedo ordenarlos ni limitarlos
                //order: ["Fecha_Creacion" , "ASC"]
                


            })
        
        .then(function(posteos) {
            console.log(req.session.user)
        res.render('home', {posteos: posteos, usuarioLogueado : req.session.user})   //llevamelo a "home", toda la info del findAll que se llama "posteos"  
        })
        

          
    }
}


module.exports = controladorHome
