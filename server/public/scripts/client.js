$(function(){
  console.log("Client.js is LIVE!");
  //Global Variables
  var numberOne = $("#numberOne").val();
  var numberTwo = $("#numberTwo").val();
  var buttonPressed = null;
  var sendCalc = {
    firstNum: numberOne,
    secondNum: numberTwo,
    button: buttonPressed
  };
  //inputs

  //Buttons
  //add
  $("#addButton").on('click', function(){
    console.log("Add button clicked");
  });
  //Subtract
  $("#subtractButton").on('click', function(){
    console.log("Subtract button clicked");
  });
  //Divide
  $("#divideButton").on('click', function(){
    console.log("Divide button clicked");
  });
  //Multiply
  $("#multiplyButton").on('click', function(){
    console.log("Multiply button clicked");
  });
  //Equals
  $("#equalsButton").on('click', function(){
    console.log("Equals button clicked");
    $.ajax({
      type: 'GET',
      url: 'calculate',
      data: sendCalc,
      success: function(response){
        console.log('calculation Sent! ', reponse);
      }
    });
  });

  //Functions

  //called functions
});
