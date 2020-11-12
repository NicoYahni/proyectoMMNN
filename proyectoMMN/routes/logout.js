var express = require('express');
var router = express.Router();
var controladorLogout = require ("../controllers/controladorLogout");

router.get("/", controladorLogout.logout);


module.exports = router;


