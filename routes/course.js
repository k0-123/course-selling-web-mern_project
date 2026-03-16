const {Router} = require("express");
const courseRouter = Router();

courseRouter.post("/course/purchases" , function(req,res){
    res.json({
        message:'signup successfully'
    })
})

courseRouter.get("/courses" , function(req,res){
    res.json({
        message:'signup successfully'
    })
})

module.exports = {
    courseRouter : courseRouter
}