const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://angadvti:angadvti@cluster0.6t01ozf.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}
console.log("DataBase Connect")
module.exports={connectDb}