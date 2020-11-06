var express = require('express');
var router = express.Router();
var controladorRegistracion = require ("../controllers/controladorRegistracion");


router.get ("/", controladorRegistracion.registracion)



module.exports = router;