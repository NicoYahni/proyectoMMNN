var express = require('express');
var router = express.Router();
var controladorRegistracion = require ("../controllers/controladorRegistracion");

router.get ("/", controladorRegistracion.registracion)
router.post ("/", controladorRegistracion.storeUser)



module.exports = router;