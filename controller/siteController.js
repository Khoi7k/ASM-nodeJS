var db = require('../models/database');

class siteController{
    index(req, res){
        res.render('index')
    }
}
module.exports = new siteController;