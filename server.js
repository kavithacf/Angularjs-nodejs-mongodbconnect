var express = require('express');
var app = express();
var bodyParser = require('body-parser');//req and res
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var database = require('./config/database'); // load the database config
 mongoose.createConnection(database.myappUrl);



app.use(express.static(__dirname + "/public"));//direct to index

app.use(bodyParser.json());
//port
app.listen(8000);
console.log("server connected");