var express = require('express');
var router = express.Router();
let controladorRegistracion = require("../controllers/controladorRegistracion")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/register", controladorRegistracion.registracion)
router.post("/register"), controladorRegistracion.storeUser
module.exports = router;
