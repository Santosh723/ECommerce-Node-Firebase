const express = require('express')
const router=express.Router()
var admin = require("firebase-admin");
let db=admin.firestore();

router.get('/getproducts', async (req, res) => {
    let usr=[]
     const productlist = await db.collection('products').get()
    if (productlist.docs.length > 0) {
      for (const product of productlist.docs) {
       usr.push(product.data())
    }}
    res.json(usr)
  })
  

  module.exports=router;