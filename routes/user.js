const {Router} = require("express");
const userRouter = Router();

userRouter.post("/user/signup" , function(req,res){
    res.json({
        message:'signup successfully'
    })
})

userRouter.post("/user/signin" , function(req,res){
    res.json({
        message:'signin successfully'
    })
})

userRouter.get("/user/purchases" , function(req,res){
    res.json({
        message:'signup successfully'
    })
})

module.export {
    userRouter : userRouter
}