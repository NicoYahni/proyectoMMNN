var express = require('express');
var router = express.Router();
var controladorRegistracion = require ("../controllers/controladorRegistracion");

<<<<<<< Updated upstream

router.get ("/registracion", controladorRegistracion.registracion)

router.post ("/registracion", controladorRegistracion.storeUser)
=======
router.get ("/", controladorRegistracion.registracion)
router.post ("/", controladorRegistracion.storeUser)
>>>>>>> Stashed changes


module.exports = router;