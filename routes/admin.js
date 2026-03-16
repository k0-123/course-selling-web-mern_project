const { Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db")
 
adminRouter.post("/signup" , function(req,res){
    res.json({
        message:'signup successfully'
    })
})

adminRouter.post("/signin" , function(req,res){
    res.json({
        message:'signin successfully'
    })
})

adminRouter.post("/courses" , function(req,res){
    res.json({
        message:'signin successfully'
    })
})

adminRouter.put("/courses" , function(req,res){
    res.json({
        message:'signin successfully'
    })
})

adminRouter.get("/courses/bulk" , function(req,res){
    res.json({
        message:'signin successfully'
    })
})

module.exports = {
    adminRouter : adminRouter
}
