var express = require('express');
var router = express.Router();
var controladorRegistracion = require ("../controllers/controladorRegistracion");

router.get ("/", controladorRegistracion.registracion)          //es GET para poder ver el fomulario para registrarse
router.post ("/", controladorRegistracion.storeUser)            //es POST para que guarde la info en la base de datos que ingresaste en el fomulario.



module.exports = router;