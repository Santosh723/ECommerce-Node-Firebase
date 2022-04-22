const express = require('express')
const router=express.Router()
var admin = require("firebase-admin");
const checkIfAuthenticated=require("./middlewares/auth-middleware")
var admin = require("firebase-admin");

router.post('/:id/delete', checkIfAuthenticated,  async(req,res) =>{
    console.log(req.params.id)
    admin.auth().deleteUser(req.params.id)
    res.json({message:'done'})
    })

module.exports = router;