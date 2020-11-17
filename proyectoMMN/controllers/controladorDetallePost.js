const db = require("../db/models/index")
let controladorDetallePost = {

    detallePost: function(req, res) {
        let idPost = req.params.id
        db.Post.findByPk(idPost, {
           include: [
            {association: "relacion"}
           ]
          }) 
       
       
            
        .then (function(post){
            
        res.render("detallePost", {post: post, usuarioLogueado : req.session.user })
          
    
})

}
}


module.exports = controladorDetallePost