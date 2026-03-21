const { Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db")
const jwt = require("jsonwebtoken")
JWT_ADMIN_PASSWORD = "neha123"
 
adminRouter.post("/signup" , async function(req,res){
  const {firstName,lastName,email,password} = req.body;
  
  try{
      await adminModel.create({
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


adminRouter.post("/signin" , async function(req,res){
    const {email , password } = req.body ;
    
    const admin = await adminModel.findone({
        email : email,
        password : password
    });
    
     if (admin){
        const token = jwt.sign({
            id : user._id
        }, JWT_ADMIN_PASSWORD)

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
