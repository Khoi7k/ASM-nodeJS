var express = require('express');
var router = express.Router();

var siteController = require('../controller/siteController');

/* GET home page. */

router.get('/', siteController.index)


module.exports = router;
