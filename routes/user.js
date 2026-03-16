const {Router} = require("express");
const userRouter = Router();

userRouter.post("/signup" , function(req,res){
    res.json({
        message:'signup successfully'
    })
})

userRouter.post("/signin" , function(req,res){
    res.json({
        message:'signin successfully'
    })
})

userRouter.get("/purchases" , function(req,res){
    res.json({
        message:'signup successfully'
    })
})

module.exports = {
    userRouter : userRouter
}