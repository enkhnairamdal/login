const express = require('express')
const collection = require('./mongo')
const cors =require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())



app.get("/", cors(),(req,res) => {

})


app.post("/",async(req, res)=>{
const{email, password}=req.body

    try{
        const check = await collection.findOne({email:email})
        if(check){
            res.json('exist')
        }
        else{
            res.json("notexit")
        }
    }
    catch(e){
        res.json("notexit")
    }
})

app.post("/signup",async(req, res)=>{
    const{email, password , firstName , lastName , phoneNumber ,cpassword}=req.body
    const data={
        email:email,
        password:password,
        firstName : firstName, 
        lastName : lastName , 
        phoneNumber : phoneNumber,
        cpassword:cpassword ,
    }
        try{
            const check = await collection.findOne({email:email})
            if(check){
                res.json('exist')
            }
            else{
                res.json("notexit")
                await collection.insertMany([data])
            }
        }
        catch(e){
            res.json("notexit")
        }
    })
app.listen(8000 , () => {
    console.log("port connected")
})
