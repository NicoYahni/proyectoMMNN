var express = require('express');
var router = express.Router();
var controladorPostBuscado = require ("../controllers/controladorPostBuscado");

router.get ("/", controladorPostBuscado.buscador)
router.get ("/resultado", controladorPostBuscado.resultado)
//router.get ("/resultado", controladorPostBuscado.postBuscado)
//router.get ("/post", controladorResultadoBusqueda.post)
// router.get("/register", controladorRegistracion.registracion)
// router.post("/register"), controladorRegistracion.storeUser


module.exports = router;