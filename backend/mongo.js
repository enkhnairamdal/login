require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECT)
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{s
    console.log('failed')
})
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection = mongoose.model("collection", newSchema)
module.exports = collection