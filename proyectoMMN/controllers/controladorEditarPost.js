let db = require('../db/models/index')
let controladorEditarPost = {

    editarPost: function(req, res) {                                    //te lleva a la parte de editar, pero no edita. Se edita en la linea 35
       let idPost = req.params.id                                       //el id que aparecio en la URL, traemelo. va a ser el ID de un posteo
       
       //let idUsuario = req.body.idUsuario
       //console.log(idPost);
       console.log('sarasa');
       console.log(idPost);
       db.Post.findByPk(idPost)                                         //busco toda la info del posteo
       .then(function(post){
           
          res.render('editarPost', {post: post, usuarioLogueado: req.session.user})         //le manda a la vista toda la informacion de ese posteo
          //res.send(post)
       })


        },
        eliminar: function(req, res) {
           
        
            let idPost = req.body.idPost; 
                        db.Post.destroy(                                    //uso del metodo "destroy" para que elimine 
                           {
                            where:{ 
                                idPost: idPost                              //de la tabla post eliminame la fila donde el id sea el que declare arriba
                            } 
                           })
                           .then(function(){
                                res.redirect("/home");
                            })
                          
                    },
        update: function(req,res){
            let post = {                                        //todo viaja por POST
                IdPost: req.body.IdPost,                        
                Id_usuario: req.session.user.idUsuario,         // .session porque el Id lo estas pidiendo pero no para editarlo, sino para que triaga la info del id
                Texto_Posteo: req.body.textoPublicado,
                URL: req.body.url,
                Fecha_Creacion: req.body.Fecha_Creacion
                

            }
            db.Post.update(post,
                {
                 where:{ 
                     idPost: req.body.IdPost            //updeateame el que el id del posteo sea igual al que quiero editar
                 } 
                })
                .then(function(){
                    console.log('paso por aca');
                    res.redirect('/home')
                })
        }


       

}


module.exports = controladorEditarPost