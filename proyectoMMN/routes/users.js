var express = require('express');
var router = express.Router();
var controladorRegistracion = require ("../controllers/controladorRegistracion");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/register"), controladorRegistracion.registracion
router.post("/register"), controladorRegistracion.storeUser

router.get("/registracion"), controladorRegistracion.registracion
router.post("/registracion"), controladorRegistracion.storeUser



module.exports = router;
