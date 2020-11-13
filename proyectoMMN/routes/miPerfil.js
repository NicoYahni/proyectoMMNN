var express = require('express');
var router = express.Router();
var controladorMiPerfil = require ("../controllers/controladorMiPerfil");

router.get ("/:id", controladorMiPerfil.miPerfil)



module.exports = router;