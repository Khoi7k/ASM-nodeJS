var express = require('express');
var router = express.Router();

var db=require('../models/database');

/* GET home page. */
router.get('/sign-up', function(req, res, next) {
    res.render('sign-up')
});
router.get('/sign-in', function(req, res, next) {
    res.render('sign-in')
});

module.exports = router;