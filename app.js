const express = require('express');

const app = express();


// get all users
app.get("/", (req,res,next)=>{
    res.status(200).json({
        message : "All user"
    })
})

// get user by id
app.get("/:id", (req,res,next)=>{
    res.status(200).json({
        message : "User by id"
    })
})
// add user
app.post("/", (req,res,next)=>{
    res.status(200).json({
        message : "Add new user"
    })
})
// update user
app.put("/:id", (req,res,next)=>{
    res.status(200).json({
        message : "Update user"
    })
})
// delete user
app.delete("/:id", (req,res,next)=>{
    res.status(200).json({
        message : "Delete user"
    })
})



module.exports = app;
