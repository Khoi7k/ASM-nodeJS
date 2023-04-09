var express = require('express');
var router = express.Router();

var db=require('../models/database');

/* GET home page. */
router.get('/', function(req, res, next) {
    let id = req.query.id;
    res.render('detail', {id: id})
});

module.exports = router;
