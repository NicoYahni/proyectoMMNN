var express = require('express');
var router = express.Router();
var controladorEditarUsuario = require ("../controllers/controladorEditarUsuario");

router.get ("/", controladorEditarUsuario.editarUsuario)



module.exports = router;