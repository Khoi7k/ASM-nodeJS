const express = require('express');
const router = express.Router();

const categoryApi = require('./categories')
const productApi = require('./products')
const userApi = require('./users')
// const userApi = require('./users')

router.use('/product',productApi)   
router.use('/category',categoryApi)
router.use('/user',userApi)
// router.use('/user',userApi)

module.exports = router;
