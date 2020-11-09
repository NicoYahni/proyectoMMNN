const bcrypt = require ('bcryptjs');
const db = require('../database/models');
const users = db.User;

const op = db.Sequelize.Op;

let controladorLogin = {
    index: function(req, res){
        return res.render('login');
        },

        login: function(req, res){


        },
        
}

module.exports = controladorLogin