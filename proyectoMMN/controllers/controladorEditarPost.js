let db = require('../db/models/index')
let controladorEditarPost = {

    editarPost: function(req, res) {
       let idPost = req.params.id;
       
       //let idUsuario = req.body.idUsuario
       //console.log(idPost);
       console.log('sarasa');
       db.Post.findByPk(idPost)
       .then(function(post){
           
          res.render('editarPost', {post: post, usuarioLogueado: req.session.user})
          //res.send(post)
       })


        },
        eliminar: function(req, res) {
           
        
            let idPost = req.body.idPost; 
                        db.Post.destroy(
                           {
                            where:{ 
                                idPost: idPost
                            } 
                           })
                           .then(function(){
                                res.redirect("/home");
                            })
                          
                    },
        update: function(req,res){
            let post = {
                IdPost: req.body.IdPost,
                Id_usuario: req.body.Id_usuario,
                Texto_Posteo: req.body.textoPublicado,
                URL: req.body.url,
                Fecha_Creacion: req.body.Fecha_Creacion
                

            }
            db.Post.update(post,
                {
                 where:{ 
                     idPost: req.body.IdPost
                 } 
                })
                .then(function(){
                    console.log('paso por aca');
                    res.redirect('home')
                })
        }


       

}


module.exports = controladorEditarPost