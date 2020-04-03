const 
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// koneksi DB
const uri = `mongodb+srv://reyhanjovie:reyhanjovie@simple-sosmed-9i9pg.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(uri,{useNewUrlParser : true})
    .catch(err=>{
        console.log(err)
    })

mongoose.Promise = global.Promise

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
