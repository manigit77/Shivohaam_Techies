console.log(job1);//ReferenceError: job1 is not defined
var job1;
console.log(job1);
//console.log(job2)//ReferenceError: Cannot access 'job2' before initialization

let job2;
console.log(job2)
//const job3;//SyntaxError: Missing initializer in const declaration
job1 = "mani";
console.log(job1);

const name = "manikanta"
console.log(name)
//name = "manikanta";
console.log(name)//
console.log(name)//TypeError: Assignment to constant variable.

 //var names = "shiva";

 let names = "shiva";//SyntaxError: Identifier 'names' has already been declared
 console.log(names);
 {
   names = "Dev";
   console.log(names);
 
   {
    names = "Sai";
    console.log(names);
   }
 }

 console.log(names);

 const city = "indore";
 console.log(city);
 {
   console.log(city);
 }

 function scope() {
  var names = "saissss";
   console.log(names);
  console.log(city);
 }
  {
   var ab = "devashish";
 }
console.log(ab);

 scope();
 console.log(names);

 if (true) {
   let a = 60;
   const y = 50;
   console.log(a);
   console.log(y);
   
 }

 a = 40;
 y = 53;
 console.log(a);
 console.log(y);

/* Scope => 

  Types = > 
 -
 -> Global 
 -> Function
 -> Block

=> with use Strict and without use Strict
without use Strict => when we fetch or find any variable value on global , which are not declare any so, it's automatically 
 declare and define the earlier value of the same variable in global reference 
 just for example
 area.global = "Alirajpur"  // occupy memroy on global and refer to global

*/
// "use strict";
// var -> Functional Scope
// let & const -> Block Scope

var country = "india"; // global scope
console.log(country);

function functionScope() {
  var district = "Indore"; // function scope
  console.log(district);
  console.log(country);
}

functionScope();

// console.log(district); // ReferenceError: district is not defined
let area;
{
  area = "Shivohaam"; // block scope
  console.log(area);
}

console.log(area); // (ReferenceError: area is not defined for Let & const)
