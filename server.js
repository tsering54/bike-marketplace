const express = require( "express");
const path = require( "path");
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

// app.use(express.static(path.join(__dirname + "./public")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})); 

// set up static file path
app.use(express.static(path.join(__dirname, 'dist')));

// require the mongoose configuration file
require('./server/config/database');
require('./server/config/routes')(app);



app.listen(8000, function() {
    console.log("listening on port 8000"); 
});