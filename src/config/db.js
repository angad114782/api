const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://ay114782:YXHzVJRVwOdlb9e5@cluster0.kqkeet1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}
console.log("DataBase Connect")
module.exports={connectDb}