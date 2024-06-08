const express=require("express");

const router=express.Router();
const userController=require("../controllers/user.controller.js")

router.get("/profile",userController.getUserProfile)
router.get("/",userController.getAllUsers)
// router.get('/user/:userId', userController.getUserById);

module.exports=router;