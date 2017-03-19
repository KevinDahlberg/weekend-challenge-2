$(function(){
  console.log("Client.js is LIVE!");
  //Global Variables
  var buttonPressed;
  var numberOne;
  var numberTwo;
  //inputs

  //Buttons
  //add
  $("#addButton").on('click', function(){
    console.log("Add button clicked");
    buttonPressed = "+";
    return buttonPressed;

  });
  //Subtract
  $("#subtractButton").on('click', function(){
    console.log("Subtract button clicked");
    buttonPressed = "-";
    return buttonPressed;

  });
  //Divide
  $("#divideButton").on('click', function(){
    console.log("Divide button clicked");
    buttonPressed = "/";
    return buttonPressed;

  });
  //Multiply
  $("#multiplyButton").on('click', function(){
    console.log("Multiply button clicked");
    buttonPressed = "*";
    return buttonPressed;

  });
  //Equals
  $("#equalsButton").on('click', function(){
    console.log("Equals button clicked");
    numberOne = $("#numberOne").val();
    numberTwo = $("#numberTwo").val();
    // you are using a GET statement - maybe you dont need an object???
    console.log(numberOne);
    console.log(numberTwo);
    console.log(buttonPressed);
    calcObject = {
      number: numberOne,
      secondNumber: numberTwo,
      button: buttonPressed,
    };
    console.log(calcObject);
    $.ajax({
      type: 'POST',
      url: 'calculate/data',
      data: calcObject,
      success: function(response){
        console.log("back from calc with" + response);
      }
    });
  });

  //Functions

  //called functions
});
