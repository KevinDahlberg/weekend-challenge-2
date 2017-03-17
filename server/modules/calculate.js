var express = require('express');
var router = express.Router();

//routes
router.get('/', function(req, res){
  console.log("calculation received!");
});

//exports
module.exports = router;
