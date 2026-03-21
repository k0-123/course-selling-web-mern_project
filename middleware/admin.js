const express = require ("express");
const mongoose = require("mongoose");

const user = (req , res , next) => {
    const token = req.headers.authorization;
    if (token){ 
        jwt.verify(token , JWT_ADMIN_PASSWORD , (err , decoded) => {
            if (err){
                res.status(403).json({
                    message:'forbidden'
                })
            }
            else {
                req.userId = decoded.id;
                next();
            }
        })
    }
    else {
        res.status(403).json({
            message:'forbidden'
        })
    }
}

module.exports = {
    user : user

}