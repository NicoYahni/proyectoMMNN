var express = require('express');
var router = express.Router();
var controladorDetalleUsuario = require ("../controllers/controladorDetalleUsuario");

router.get ("/:id", controladorDetalleUsuario.detalleUsuario)       //el id es algo que va a cambiar constantemente, no va a ser fijo
router.get ("/:id", controladorDetalleUsuario.postUsuario)          //depende a que usuario clickee me va a llegar a un diferente id (la pagina va a ser igual pero la info, diferente)



module.exports = router;