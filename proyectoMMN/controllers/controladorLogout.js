let rutaLogout = {

    logout: function(req,res) {
        req.session.user = undefined;

        res.redirect("/home");
    }
}


module.exports = rutaLogout