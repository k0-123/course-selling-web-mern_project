const {Router} = require("express");
const courseRouter = Router();

courseRouter.post("/purchases" , function(req,res){
    res.json({
        message:'signup successfully'
    })
})

courseRouter.get("/preview" , function(req,res){
    res.json({
        message:'signup successfully'
    })
})

module.exports = {
    courseRouter : courseRouter
}