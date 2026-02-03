/* 
Statement => 
Statement in JavaScript is a piece of code that performs a specific task. 
It can be a declaration, an expression, or a control flow statement. 
Here are some examples of different types of statements in JavaScript:

1.) If-Else Statement =>
An if-else statement is used to execute a block of code based on a condition. 
If the condition is true, the code inside the if block is executed; otherwise, the code inside the else block is executed.

2.) Switch Statement =>
A switch statement is used to perform different actions based on different conditions. 
It evaluates an expression and matches its value against multiple case clauses.

*/

// basic syntax of if-else statement is as follows:
// if (condition) {
//   // code to be executed if condition is true
// } else {
//   // code to be executed if condition is false
// }

let age = 18;
// If-Else Statement
if (age >= 18) {
  console.log("You are eligible to vote.");
} else if (age < 18 && age > 0) {
  console.log("You are not eligible to vote.");
} else if (age <= 0) {
  console.log("Invalid age.");
} else {
  console.log("Error in age input.");
}

// nested If-Else Statement
let num = 10;
if (num > 0) {
  if (num % 2 === 0) {
    console.log(num + " is a positive even number.");
  } else {
    console.log(num + " is a positive odd number.");
  }
} else {
  console.log(num + " is not a positive number.");
}

// Switch Statement = >
// The switch statement is used to perform different actions based on different conditions. It evaluates an expression and matches its value against multiple case clauses.

// basic syntax of switch statement is as follows:
// switch (expression) {
//   case value1:
//     // code to be executed if expression matches value1
//     break;
//     case value2:
//     // code to be executed if expression matches value2
//     break;
//   ...
//   default:
//     // code to be executed if expression doesn't match any case
// }

let day = 4;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log("Day Name: ", dayName);
// Note: Break statement is used to exit the switch case once a match is found. Without break, the code will continue to execute the next cases (fall-through behavior).

// You can explore more statements like loops (for, while, do-while), try-catch, etc. in JavaScript.
