const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt')
var db = require('../models/database');
var userModel = require('../models/users');
router.get('/', async(req, res) => {
    try{
        const listUser = await userModel.list()
        res.json(listUser)
    }catch(e){
        console.log(e);
    }
})
router.post('/signup', async (req,res) => {
    try{
        var salt = bcrypt.genSaltSync(10)
        const un = req.body.email
        const p = req.body.password
        const user = await userModel.selectByEmail(un)
        if(user.length<=0){
            req.body.password = bcrypt.hashSync(p,salt)
            const data = req.body;
            const usersList = await userModel.create(data)
            if(usersList){
                res.json({notification: "Đăng ký tài khoản thành công", userInfo: {...data}})
            }
        }
        res.json({notification: "Tài khoản đã tồn tại"})
    }catch(e){
        console.log(e);
    }
})
router.post('/signin', async (req,res) => {
    try{
        const u = req.body.email
        const p = req.body.password
        const user = await userModel.selectByEmail(u)
        if(user.length<=0){
            res.json({notification: "Tài khoản không chính xác"})
        }
        let password = user[0].password
        console.log(password);
        var kq = bcrypt.compareSync(p, password);
        if (kq){ 
            res.json({notification: "Đăng nhập thành công",userInfo: {...user[0]}})
        }   
        else {
            res.json({notification: "Mật khẩu không chính xác"})
        }
    }catch(e){
        console.log(e);
    }
    
}) 
module.exports = router;