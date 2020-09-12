var express = require('express');
var router = express.Router();
var controladorDetalleUsuario = require ("../controllers/controladorDetalleUsuario");

router.get ("/", controladorDetalleUsuario.detalleUsuario)



module.exports = router;