const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user.models.js');
const jwtProvider=require("../config/jwtProvider")

const createUser = async (userData) => {
    try {
        let { name, email, password,aadharNo, mobile, addresses } = userData;

        console.log('Received userData:', userData);

        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            throw new Error(`User already exists with email: ${email}`);
        }

        // Ensure addresses is an array
        if (!Array.isArray(addresses)) {
            // Convert addresses to an array if it's not already
            addresses = [addresses];
        }

        // Log addresses content
        console.log('Addresses:', addresses);

        password = await bcrypt.hash(password, 8);

        const user = await User.create({ name, email, password,aadharNo, mobile, addresses });

        console.log('User created:', user);

        return user;
    } catch (error) {
        console.error("Error in createUser:", error);
        throw new Error(error.message);
    }
};


const findUserById=async(userId)=>{
    try {
        const user = await User.findById(userId);
        if(!user){
            throw new Error("user not found with id : ",userId)
        }
        return user;
    } catch (error) {
        // console.log("error :------- ",error.message)
        throw new Error(error.message)
    }
}

const getUserByEmail=async(email)=>{
    try {

        const user=await User.findOne({email});

        if(!user){
            throw new Error("user found with email : ",email)
        }

        return user;
        
    } catch (error) {
        // console.log("error - ",error.message)
        throw new Error(error.message)
    }
}
const getUserByMobile=async(mobile)=>{
    try {

        const user=await User.findOne({mobile});

        if(!user){
            throw new Error("user found with mobile : ",mobile)
        }

        return user;
        
    } catch (error) {
        // console.log("error - ",error.message)
        throw new Error(error.message)
    }
}

const getUserProfileByToken=async(token)=>{
    try {

        const userId=jwtProvider.getUserIdFromToken(token)

        // console.log("userr id ",userId)


        const user= (await findUserById(userId))
        .populate("addresses");
        user.password=null;
        
        if(!user){
            throw new Error("user not exist with id : ",userId)
        }
        return user;
    } catch (error) {
        // console.log("error ----- ",error.message)
        
        throw new Error(error.message)
    }
}

const getAllUsers=async()=>{
    try {
        const users=await User.find();
        return users;
    } catch (error) {
        // console.log("error - ",error)
        throw new Error(error.message)
    }
}

module.exports={
    createUser,
    findUserById,
    getUserProfileByToken,
    getUserByEmail,
    getUserByMobile,
    getAllUsers
}