var express = require('express');
var router = express.Router();
var db = require('../models/database');
var productsModel = require('../models/products');

router.get('/', async (req, res) => { 
    try{
        const listPro = await productsModel.list()
        res.json(listPro)
    }catch(e){
        console.log(e);
    }
});

router.get('/special', async (req, res) => { 
    try{
        const listPro = await productsModel.listSpecial()
        res.json(listPro)
    }catch(e){
        console.log(e);
    }
});

router.get('/id=:id', async (req,res) => {
    try{
        const id = req.params.id
        const product = await productsModel.read(id)
        res.json(product)
    }catch(e){
        console.log(e);
    }
})
router.get('/listCate', async (req,res) => {
    try{
        const id = Number(req.query.id)
        const product = await productsModel.listCate(id);
        res.json(product)
    }catch(e){
        console.log(e);
    }
})



module.exports = router