
const express=require('express')
const cors= require("cors")
const { User, Product } = require('./db')

const app=express()
app.use(express.json())

app.use(cors())

app.listen(9002,()=>{
    console.log("server started    at the port");
    })

app.post("/login", (req, res)=>{
    const {email, password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
if(password===user.password){
    res.send({message:"login successfull",user:user})
}
else{
    res.send({message:"password didnt match"})
}
        }
        else{
            res.send("user not registered")
        }
    })
})
app.post("/register", (req, res)=>{
    console.log(req.body);
    const {name, email, password, place}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already registered"} )
        }
    })
    const user=new User({
        name,
        email,
        password,
        place
    }) 
    user.save( err =>{
if(err){
    res.send(err)
}
else{
    res.send({message:"successfully registered"})
}
    })
})
app.post("/addproduct", (req, res)=>{
    console.log(req.body);
    const {name, price, quantity, category}=req.body
    Product.findOne({name:name},(err,product)=>{
        if(product){
            res.send({message:"Product already added"} )
        }
    })
    const product=new Product({
        name,
        price,
        quantity,
        category
    }) 
    product.save( err =>{
if(err){
    res.send(err)
}
else{
    res.send({message:"successfully added"})
}
    })
})
app.get("/productlist", (req, res)=>{
    
   Product.find()
   .then(products=>res.json(products))
})
