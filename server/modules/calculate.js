var express = require('express');
var router = express.Router();
var calcObject = {};
var number;
var numberTwo;
var firstNum;
var secondNum;

//routes
router.post('/data', function(req, res){
  console.log("information = ", req.body);
  calcObject = req.body;
  console.log(calcObject);
  calculate(req.body.number, req.body.secondNumber, req.body.button);
  console.log("calculated object is: " + number);
  res.send(200);
}); //sends calculation

function convertStringToNum(number, numberTwo){
  firstNum = parseInt(number);
  secondNum = parseInt(numberTwo);
  return firstNum, secondNum;
}

function calculate(first, second, third){
  convertStringToNum(first, second);
  console.log(typeof(firstNum));
  console.log(typeof(secondNum));
  console.log(typeof(third));
  if (third === '+'){
    number = parseInt(first) + parseInt(second);
  } else if (third === "-"){
    number = first - second;
  } else if (third === "*"){
    number = first * second;
  } else if (third === "/"){
    number = first / second;
  } else {
    console.log("ERROR");
  }
  return(number);
}
//exports
module.exports = router;
