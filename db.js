const mongoose=require('mongoose')

//connect server to db
mongoose.connect('mongodb://localhost:27017/dns',{
    useNewUrlParser:true
})

//model creation
const User= mongoose.model('User',{
    name:String,
    email:String,
    
    password:String,
    place:String

})

const Product=mongoose.model('Product',{
    name:String,
    price:Number,
    quantity:Number,
    category:String
})
module.exports={
User,
Product
}