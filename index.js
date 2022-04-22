const express=require('express')
const port = process.env.PORT || 3000
const compression=require('compression')
const path=require('path')
const app = express()
const saltedMd5=require('salted-md5')
const multer=require('multer')
const upload=multer({storage: multer.memoryStorage()})
require('dotenv').config()
app.use(express.urlencoded({extended:true}))
app.use(express.json());
// view engine setup
app.set('views', path.join(__dirname, 'static', 'views'))
app.set('view engine', 'ejs')
app.use(compression())
app.use('/public', express.static(path.join(__dirname, 'static', 'public')))

//firebase configuration
var admin = require("firebase-admin");
//const firebase = require('firebase')

var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.BUCKET_URL
  });
  app.locals.bucket = admin.storage().bucket()

const usercreateRoutes=require('./routes/create-user')
const usersignRoutes=require('./routes/user-sign')
const addproductRoutes=require('./routes/addproducts-route')
const productsgetRoutes=require('./routes/get-products')
const userdetailsRoutes=require('./routes/user-details')
const usergetRoutes=require('./routes/get-user')
const userdeleteRoutes=require("./routes/delete-user")
const userupdateRoutes=require("./routes/upate-user") 
//const uploadRoutes=require('./routes/upload')
  
app.use(usercreateRoutes)
app.use(usersignRoutes)
app.use(addproductRoutes)
app.use(productsgetRoutes)
app.use(userdetailsRoutes)
app.use(usergetRoutes)
app.use(userdeleteRoutes)
app.use(userupdateRoutes)
//app.use(uploadRoutes)

app.listen(port, (req,res)=>{
    console.info(`Running on ${port}`)
  })