let db = require("../db/models/index")                                      //pedido a la vase de datos
let rutaAgregarPost = {

    agregarPost: function(req, res) {                                       //hace un request y un response de lo siguiente:
         res.render("agregarPost",{usuarioLogueado : req.session.user})     //la vista va a recivir como nombre "usuarioLogueado" lo que hay en req.session.user
         if (req.session.usuarioLogueado == undefined){                     //req.session: trae de la sesion (de donde se guarda la info) la parte de .user
            res.redirect("/login");                                         //si no hay nada en req.session (undefined) te manda al login
            }
            
    },
        storePost: function(req, res) {                                     //pedido que viaja por POST que incerta en la base de datos el nuevo posteo
            let posteos = {                                                 // lo inserta en la tabla POSTEO
                Texto_Posteo: req.body.textoPublicado,                          //lo de la izquierda (Texto_Posteo) el nombre de la columna de la base de datos
                Fecha_Creacion: req.body.Fecha_Creacion,                        //lo de la derecha (Fecha_Creacion) es el nombre en el formulario en la vista
                URL: req.body.url,                                          //POR GET ES REQ.QUERY Y POR POST ES REQ.BODY Y POR ID ES REQ.PARAMS
                Id_usuario: req.body.Id_usuario
              }

        db.Post.create(posteos)                                             //EN LA BASE DE DATOS EN Post CREAME OTRA FILA DONDE VAN LA VARIABLE "POSTEOS"
        .then(function() {
         return res.redirect("/home")
         })
}}
 //<form action=""></form>// -->


module.exports = rutaAgregarPost