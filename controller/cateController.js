var db = require('../models/database');

class cateController{
    index(req, res){
        res.render('cate')
    }
}

module.exports = new cateController;