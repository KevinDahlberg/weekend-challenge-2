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

  //clear button
  $("#clearButton").on('click', function(){
    console.log("Clear button clicked");
    $("#numberOne").val("");
    $("#numberTwo").val("");
  });

  //zero button
  $("#zeroButton").on('click', function(){
    $("#numberInput").append("<span>0</span>");
    console.log("Zero button clicked");
  });

  //one button
  $("#oneButton").on('click', function(){
    $("#numberInput").append("<span>1</span>");
    console.log("One button clicked");
  });

  //two button
  $("#twoButton").on('click', function(){
    $("#numberInput").append("<span>2</span>");
    console.log("Two button clicked");
  });

  //three button
  $("#threeButton").on('click', function(){
    $("#numberInput").append("<span>3</span>");
    console.log("Three button clicked");
  });

  //four button
  $("#fourButton").on('click', function(){
    $("#numberInput").append("<span>4</span>");
    console.log("Four button clicked");
  });

  //five button
  $("#fiveButton").on('click', function(){
    $("#numberInput").append("<span>5</span>");
    console.log("Five button clicked");
  });

  //six button
  $("#sixButton").on('click', function(){
    $("#numberInput").append("<span>6</span>");
    console.log("Six button clicked");
  });

  //seven button
  $("#sevenButton").on('click', function(){
    $("#numberInput").append("<span>7</span>");
    console.log("Seven button clicked");
  });

  //eight button
  $("#eightButton").on('click', function(){
    $("#numberInput").append("<span>8</span>");
    console.log("Eight button clicked");
  });

  //nine button
  $("#nineButton").on('click', function(){
    $("#numberInput").append("<span>9</span>");
    console.log("Nine button clicked");
  });

  //Functions
  function displayResult(number){
    $("#container").append("<p>"+number+"</p>");
  }
  //called functions
});
