let db = require('../db/models/index')
let op = db.Sequelize.Op;
let controladorHome = {

    home: function(req,res) {
        db.Post.findAll({
                order: ["Fecha_Creacion"]
                // no puedo ordenarlos ni limitarlos


            })
        
        .then(function(posteos) {
            console.log(posteos)
        res.render('home', {posteos: posteos, usuarioLogueado : req.session.user})
        })
        

          
    },
    detalle: function(req,res) {
        //db.Post.findAll()
        //.then(function(posteos) {
          //  console.log(posteos)
        //res.render('home', {posteos: posteos})
        //})
        

          
    }
}


module.exports = controladorHome
