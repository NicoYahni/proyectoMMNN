var express = require('express');
var router = express.Router();
var controladorHome = require ("../controllers/controladorHome");

router.get ("/", controladorHome.home)



module.exports = router;