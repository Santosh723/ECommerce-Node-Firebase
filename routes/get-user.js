const express = require('express')
const router=express.Router()
const checkIfAdmin=require("./middlewares/auth-middleware")
var admin = require("firebase-admin");


router.get('/user',checkIfAdmin ,async(req,res)=>{
    const usersResult =   await admin.auth().listUsers(1000)
    res.json(usersResult.users)
    })

module.exports=router;