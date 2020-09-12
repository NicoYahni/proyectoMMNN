var express = require('express');
var router = express.Router();
var controladorResultadoBusqueda = require ("../controllers/controladorResultadoBusqueda");

router.get ("/", controladorResultadoBusqueda.resultadoBusqueda)



module.exports = router;