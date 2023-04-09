const db = require('../models/database')

class productController {
    async index(req,res) {
        res.render('product')
    }
}
module.exports = new productController