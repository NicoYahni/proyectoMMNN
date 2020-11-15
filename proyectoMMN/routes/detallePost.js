var express = require('express');
var router = express.Router();
var controladorDetallePost = require ("../controllers/controladorDetallePost");

router.get ("/:id", controladorDetallePost.detallePost)



module.exports = router;