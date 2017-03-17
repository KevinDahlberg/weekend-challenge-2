// requirements
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 4000;
var index = require('./modules/index.js');
var calculate = require('./modules/calculate.js');

//Uses
app.use(express.static('server/public'));  //sets up static "base"
app.use(bodyParser.urlencoded({extended: true})); //makes bodyParser available
app.use('/', index); //accesses index for home package
app.use('/calculate', calculate); //accesses calculate folder

//listening
app.listen(port, function(){
  console.log("Listening to: ", port);
});
