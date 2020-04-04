const 
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


// import routes
const userRoutes = require('./api/routes/userRoutes');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// use routes
app.use('/users', userRoutes);

// koneksi DB
const uri = `mongodb+srv://reyhanjovie:reyhanjovie@simple-sosmed-9i9pg.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(uri,{useNewUrlParser : true})
    .catch(err=>{
        console.log(err)
    })

mongoose.Promise = global.Promise

module.exports = app;
