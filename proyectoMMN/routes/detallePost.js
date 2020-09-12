var express = require('express');
var router = express.Router();
var controladorDetallePost = require ("../controllers/controladorDetallePost");

router.get ("/", controladorDetallePost.detallePost)



module.exports = router;