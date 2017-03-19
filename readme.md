**Everything is set up in JSON package.  npm install to get the packages**

Welcome to your second weekend challenge!

We are going to be building a calculator application using jQuery, Node, and Express!!

The logic for the calculator needs to be housed on the Server, where the client side will take in the values (in 2 input text fields) and the type of mathematical operation (selected using a button on the DOM). Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. So when the object is sent, it should look something like this: { x: 3, y: 4, type: Add }

Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.

Finally, build a 'clear' button that resets the whole experience.

**Client Side**
 - 2 input fields
 - type of mathematical operation
 - send as object via POST {x: 3, y: 4, type: Add}
 - receive calculation result
 - display calculation result in DOM

 **Server Side**
 - receive inputs
 - convert strings to numbers
 - perform calculation
 - send result back to client side

 **Project Tasks**
 - connect client and server
 - create input fields and Buttons
  - Buttons to create:
    - Add, Subtract, Multiply, Divide, Equals
 - connect these results to the server side
  - create object from the two inputs and button pressed
  - use equals to send object
    -  send on client
    - receive on server
 - create function to convert string to numbers
 - create function to perform operation
 - connect the result of the operation to client side
  - server send
  - client receive
 - display result in DOM
 - create clear button
 - build function that clears input fields and DOM



HARD MODE:
Convert the input fields for the two values to Buttons. So the experience would allow the user to click on a numerical button, then a mathematical operation, then a numerical button again. Then have an equal button that sends all of the information to the server.

**Project Tasks**
- convert input fields to Buttons
- create button for each number
- increase functionality of Buttons
- display pressed buttons to the DOM


PRO MODE:
Create a delay from when the client receives the response from the Server, and when the calculation is actually displayed on the DOM. The delay should be 3 seconds. During that delay, show information that says 'computing' until the 3 second delay has finished, then remove the 'computing' message while showing the calculation.

**Project Tasks**
- create 3 second delay
- display "computing" on the DOM while delay is going
- erase "computing" and replace with result
