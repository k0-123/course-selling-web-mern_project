const {Router} = require("express");
const {userModel} = require("../db");
const jwt = require("jsonwebtoken")
JWT_USER_PASSWORD = "karan123"


const userRouter = Router();

userRouter.post("/signup" , async function(req,res){
 const {firstName,lastName,email,password} = req.body;

try{
    await userModel.create({
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password
 })
}catch(err){
    return res.json({
        message:'something went wrong in signup',
        error:err.message
    })
}
 res.json({
        message:'signup successfully 1'
    })
})

userRouter.post("/signin" , async function(req,res){
const {email , password } = req.body ;

const user = await userModel.findone({
    email : email,
    password : password
});

 if (user){
    const token = jwt.sign({
        id : user._id
    }, JWT_USER_PASSWORD)

    res.json({
        token : token
    })
 }
 else {
    res.status(403).json({
        message:'signin successfully'
    })
 }
   
})

userRouter.get("/purchases" , function(req,res){
    res.json({
        message:'signup successfully'
    })
})

module.exports = {
    userRouter : userRouter
}