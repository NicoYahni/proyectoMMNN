var express = require('express');
var router = express.Router();
var controladorEditarPost = require ("../controllers/controladorEditarPost");

router.post ("/", controladorEditarPost.editarPost)

router.post ("/eliminar", controladorEditarPost.eliminar)



module.exports = router;