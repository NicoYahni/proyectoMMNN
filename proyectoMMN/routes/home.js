var express = require('express');
var router = express.Router();
var controladorHome = require ("../controllers/controladorHome");

router.get ("/", controladorHome.home)
router.get('/:id', controladorHome.detalle);



module.exports = router;