// function printText(){
//   console.log('print the text');
// }
// printText();

// function printText (a){
//   console.log(a)
// }
// printText('print the text 2')

// var printText = (function(a){
//   console.log(a);
// }
// ('print the text 3'));

// function mySquare (x) {
//    return x * x;
// };
//In the above example, the function returns the squarred value, transferred to it.

/*function divideOneTo (x) {
  if (x != 0) {
    return 1 / x;
  } else {
    return "You can not divide by zero!";
  }
}


In this case, we made a function that returns the result of dividing the unit by the input parameter, if it is different from zero, or the phrase "You can not divide by zero!" - if we pass a zero to the function.

However, the use of the return keyword is optional. If there is no return in the body of the function, then after executing all the commands, the interpreter will finish the function execution. The value this function returns is "undefined".*/


/*
A function that has a name can call itself. Such functions are called recursive.

For example, in the following example, the function uses a recursive call to calculate the factorial:

function factorial (x) {      // Function declaration
  if (x <= 1) return 1;       // Check the condition for the end of the calculation
  return x * factorial (x-1); // Call the same function with a reduced by 1 argument
}

An important note: in recursive functions, you need not forget about the condition for terminating recursion, otherwise the code will "get stuck".

In the example above, such a condition is a check that x <= 1.
*/