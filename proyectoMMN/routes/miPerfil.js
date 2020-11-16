var express = require('express');
var router = express.Router();
var controladorMiPerfil = require ("../controllers/controladorMiPerfil");

//router.get ("/", controladorMiPerfil.miPerfil)
router.get ("/", controladorMiPerfil.informacion)


module.exports = router;