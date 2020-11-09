var express = require('express');
var router = express.Router();
var controladorLogin = require ("../controllers/controladorLogin");

router.get ("/", controladorLogin.index)
router.post ("/", controladorLogin.login)




module.exports = router;