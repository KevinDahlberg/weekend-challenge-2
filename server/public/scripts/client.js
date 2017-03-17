$(function(){
  console.log("Client.js is LIVE!");
  //Global Variables
  var buttonPressed;
  var sendCalc
  //inputs

  //Buttons
  //add
  $("#addButton").on('click', function(){
    console.log("Add button clicked");
    buttonPushed($(this));
    return buttonPressed;

  });
  //Subtract
  $("#subtractButton").on('click', function(){
    console.log("Subtract button clicked");
    buttonPushed($(this));
    return buttonPressed;

  });
  //Divide
  $("#divideButton").on('click', function(){
    console.log("Divide button clicked");
    buttonPushed($(this));
    return buttonPressed;

  });
  //Multiply
  $("#multiplyButton").on('click', function(){
    console.log("Multiply button clicked");
    buttonPushed($(this));
    return buttonPressed;

  });
  //Equals
  $("#equalsButton").on('click', function(){
    console.log("Equals button clicked");
    var numberOne = $("#numberOne").val();
    var numberTwo = $("#numberTwo").val();
    // you are using a GET statement - maybe you dont need an object???
    var sendCalc = {
      firstNum: numberOne,
      secondNum: numberTwo,
      button: buttonPressed
    };
    console.log(sendCalc);
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
  function buttonPushed(button){
    buttonPressed = button;
    //console.log(buttonPressed);
    return buttonPressed;
  }
  //called functions
  console.log(buttonPressed);
});
