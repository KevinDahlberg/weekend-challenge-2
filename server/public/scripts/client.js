$(function(){
  console.log("Client.js is LIVE!");
  //Global Variables
  var buttonPressed;
  var numberOne;
  var numberTwo;
  var result;
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
    buttonPressed = "divide";
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
    console.log(numberOne);
    console.log(numberTwo);
    console.log(buttonPressed);
    //sends variables to server side
    $.ajax({
      type: 'GET',
      url: 'calculate/data/' + numberOne + "/" + numberTwo + "/" + buttonPressed + "/",
      success: function(response){
        console.log("back from calc with " + response);
        result = response;
        console.log(result);
        displayResult(result);
      } // comes back with var result as the result
    });
  });

  //Functions
  function displayResult(number){
    $("#container").append("<p>"+number+"</p>");
  }
  //called functions
});
