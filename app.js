const 
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const User = require('./api/models/User');

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

module.exports = app;
