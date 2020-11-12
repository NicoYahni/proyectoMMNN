let db = require('../db/models/index')
let controladorHome = {

    home: function(req,res) {
        db.Post.findAll()
        .then(function(posteos) {
            console.log(posteos)
        res.render('home', {posteos: posteos})
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
