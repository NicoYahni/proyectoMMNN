var express = require('express');
var router = express.Router();
var controladorEditarPerfil = require ("../controllers/controladorEditarPerfil");

router.post ("/", controladorEditarPerfil.editarPerfil)



module.exports = router;