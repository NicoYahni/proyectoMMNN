var express = require('express');
var router = express.Router();
var controladorDetalleUsuario = require ("../controllers/controladorDetalleUsuario");

router.get ("/:id", controladorDetalleUsuario.detalleUsuario)
router.get ("/:id", controladorDetalleUsuario.postUsuario)



module.exports = router;