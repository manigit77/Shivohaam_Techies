/*
Objects in JavaScript =>

    An Object is a collection of properties, and a property is an association between a name (or key) and a value.

    Key Points:
    1. Objects are used to store data in key-value pairs.
    2. They can contain various types of data, including other objects, arrays, functions, etc.
    3. Objects are mutable, meaning their properties can be changed after they are created.
    4. They are fundamental to JavaScript and are used in many aspects of the language, including functions, arrays, and more.
    5. Objects are reference types, which means that when you assign an object to a variable, you are assigning a reference to that object, not the actual object itself.
    6. Objects stored in heap memory and accessed via reference.
    7. objects keys are always string type in JS, even if we use number as key it will be converted to string internally.

Basic Syntax:-
-> By direct variable (most commonly used)
varType varName assign Operator and values in curly braces {}
let obj = {
    key1: value1,
    key2: value2,
    key3: value3,
    ...
}
*/

const obj = {
  name: "Shiva", // key is name and value is "Shiva" and single key value pair is called property of object
  age: 25,
  myfun: function () {
    console.log("This is my function", this.name, "accessing name"); // this keyword is used to access the properties of object inside the function which is property of that object
  },
  arr: [1, 2, 3, 4], // object can also contain array as value
  obj2: {
    // object can also contain another object as value
    city: "Pune",
    country: "India",
  },
  23: "number key", // in JS we can also use number as key but it will be converted to string internally because all keys in JS are string type
};

const obj3 = obj; // obj3 is reference of obj so, if we change any value in obj3 then it will also reflect in obj because both are reference of same object
console.log("type of object in JS: ", typeof obj);

// real life example of object in JS with sub object and array as value of object
const product = {
  id: 1,
  name: "Laptop",
  price: 50000,
  features: ["16GB RAM", "512GB SSD", "Intel i7"], // array as value of object
  specifications: {
    // sub object as value of object
    weight: "1.5kg",
    dimensions: "30cm x 20cm x 2cm",
    battery: "10 hours",
  },
};

// Ways to declare an object in JS:-

// 1. Object Literal Syntax (most commonly used)
let obj1 = {
  key1: "value1",
  key2: "value2",
};

// 2. Using Object Constructor
let obj2 = new Object();
obj2.key1 = "value1";
obj2.key2 = "value2";

// 3. Using Object.create() method
let obj4 = Object.create(null);
obj4.key1 = "value1";
obj4.key2 = "value2";

// 4. Using ES6 Class Syntax
class MyClass {
  constructor(key1, key2) {
    this.key1 = key1;
    this.key2 = key2;
  }
}
let obj5 = new MyClass("value1", "value2");
const myage = "age"; // we can also use variable as key in bracket notation
// Accessing Object Properties
console.log(obj.name); // Accessing property using dot notation
console.log(obj["23"]); // Accessing property using bracket notation
console.log(obj[myage]); // Accessing property using variable as key

// Modifying Object Properties
obj.name = "Shivohaam"; // Modifying property using dot notation
obj["age"] = 26; // Modifying property using bracket notation

// methods of object
obj.myfun(); // calling function which is property of object
console.log(obj.myfun); // this will return the function definition because myfun is a property of object which is storing function as value

console.log("Original obj:", obj);
console.log("refered obj3:", obj3); // share the same reference so, both will reflect the change due to same memory reference
