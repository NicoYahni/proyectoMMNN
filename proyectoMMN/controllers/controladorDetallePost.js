const db = require("../db/models/index")
let controladorDetallePost = {

    detallePost: function(req, res) {
        let idPost = req.params.id            //COMO ES ID, ES REQ.PARAMS.ID
        db.Post.findByPk(idPost, {            //COMO ESTAS BUSCANDO UN ID ES FINDBYPK QUE BUSCA EN LA BASE DE DATOS UN PRIMARY KEY QUE COINCIDA CON EL ID
           include: [                         //BUSQUEDA DE LA TABLA POST Y DE LA TABLA DE POST Y USUARIOS
            {association: "relacion"}         //NOMBRE "relacion" SE LO PUSIMOS EN EL MODELO PARA HACER REFERENCIA A LA CONEXION DE LAS DOS TABLAS
           ]                                
          }) 
       -[]
       
            
        .then (function(post){                // TODO LO BUSCADO SE LLAMA "post" 
            
        res.render("detallePost", {post: post, usuarioLogueado : req.session.user })  //LO DECLARADO COMO "post" QUE LO MANDE A "detallePost"
          
    
})

}
}


module.exports = controladorDetallePost