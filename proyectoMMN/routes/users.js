var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

<<<<<<< HEAD

=======
router.get("/register"), controladorRegistracion.registracion
router.post("/register"), controladorRegistracion.storeUser
>>>>>>> 5d1ca7a9c6079738aaf0fdc647579777d813ff55
module.exports = router;
