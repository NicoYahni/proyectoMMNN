var express = require('express');
var router = express.Router();
var controladorResultadoBusqueda = require ("../controllers/controladorResultadoBusqueda");

router.get ("/", controladorResultadoBusqueda.resultadoBusqueda)
router.get ("/post", controladorResultadoBusqueda.post)
// router.get("/register", controladorRegistracion.registracion)
// router.post("/register"), controladorRegistracion.storeUser


module.exports = router;