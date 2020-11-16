var express = require('express');
var router = express.Router();
var controladorEditarPost = require ("../controllers/controladorEditarPost");

router.get ("/:id", controladorEditarPost.editarPost)

router.post ("/eliminar", controladorEditarPost.eliminar)

router.post ("/update", controladorEditarPost.update)



module.exports = router;