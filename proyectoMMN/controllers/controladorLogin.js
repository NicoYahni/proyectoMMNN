const bcrypt = require ('bcryptjs');
const db = require('../db/models');
const users = db.User;

const op = db.Sequelize.Op;

let controladorLogin = {
    index: function(req, res){
        return res.render('login');
        },


        login: function(req, res){
            users.findOne(
                where [{ email: req.body.email }]
             )
            .then( function (user) {
                if(user == null) {
                    retun; res.send("email incorrecto")
                } else if (bcrypt.compareSync(req.body.password, user.password == false)) {
                    return res.send("contraseña incorrecta")
                } else if (bcrypt.compareSync(req.body.password, user.password) ){
                    
                    req.session.user = user
                    return res.redirect('/home')
                }

            })
            .catch( e => console.log(e))


        },
        
}

module.exports = controladorLogin