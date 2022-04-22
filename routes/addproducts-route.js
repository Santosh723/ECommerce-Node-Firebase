const express = require('express')
const router=express.Router()
var admin = require("firebase-admin");
let db=admin.firestore();
const checkIfAdmin=require("./middlewares/auth-middleware")
var admin = require("firebase-admin");


router.post('/addproducts', checkIfAdmin, async (req,res)=>{
    let docRef=db.collection('products')
    await docRef.add({
      name: req.body.products.name,
      price: req.body.products.price,
      details: req.body.products.details

    });
    res.json({message:'done'});
  })
  
  module.exports=router;