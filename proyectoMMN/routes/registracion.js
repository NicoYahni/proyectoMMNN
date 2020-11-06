var express = require('express');
var router = express.Router();
var controladorRegistracion = require ("../controllers/controladorRegistracion");


router.get ("/registracion", controladorRegistracion.registracion)

router.post ("/registracion", controladorRegistracion.storeUser)


module.exports = router;