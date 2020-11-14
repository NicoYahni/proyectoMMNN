var express = require('express');
var router = express.Router();
var controladorAgregarPost = require ("../controllers/controladorAgregarPost");

router.get ("/", controladorAgregarPost.agregarPost)
router.post ("/", controladorAgregarPost.storePost)




module.exports = router;