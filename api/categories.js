const express = require('express');
const router = express.Router();

var db = require('../models/database');
var cateModel = require('../models/categories');
router.get('/', async(req, res) => {
    try{
        const listCate = await cateModel.list()
        res.json(listCate)
    }catch(e){
        console.log(e);
    }
})
module.exports = router;