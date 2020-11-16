let db = require('../db/models/index')
let op = db.Sequelize.Op;
let controladorHome = {

    home: function(req,res) {
        db.Post.findAll({
                order: ["Fecha_Creacion"]
                // no puedo ordenarlos ni limitarlos
                //order: ["Fecha_Creacion" , "ASC"]
                


            })
        
        .then(function(posteos) {
            console.log(req.session.user)
        res.render('home', {posteos: posteos, usuarioLogueado : req.session.user})
        })
        

          
    }
}


module.exports = controladorHome
