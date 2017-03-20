var express = require('express');
var router = express.Router();
var calcObject = {};
var result;
var numberTwo;
var firstNum;
var secondNum;

//routes
router.get('/data/:number/:secondNumber/:button/', function(req, res){
  console.log("information = ", req.params);
  // calcObject = req.params;
  calculate(req.params.number, req.params.secondNumber, req.params.button);
  console.log("calculated object is: " + result);
  res.send(result);
}); //sends calculation

//Functions
//converts the strings from the object to numbers
function convertStringToNum(number, numberTwo){
  firstNum = parseInt(number);
  secondNum = parseInt(numberTwo);
  return firstNum, secondNum;
}

//function to calculate the result
function calculate(first, second, third){
  convertStringToNum(first, second);
  console.log(typeof(firstNum));
  console.log(typeof(secondNum));
  console.log(typeof(third));
  if (third == '+'){
    result = parseInt(first) + parseInt(second);
  } else if (third == "-"){
    result = first - second;
  } else if (third == "*"){
    result = first * second;
  } else if (third == "divide"){
    result = first / second;
  } else {
    console.log("ERROR");
  }
  console.log(result);
  result = result.toString();
  return result;
}

//exports
module.exports = router;
