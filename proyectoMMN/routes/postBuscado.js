var express = require('express');
var router = express.Router();
var controladorPostBuscado = require ("../controllers/controladorPostBuscado");

router.get ("/", controladorPostBuscado.buscador)
router.get ("/resultado", controladorPostBuscado.resultado)



module.exports = router;