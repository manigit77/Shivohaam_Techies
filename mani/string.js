/*
String : A sequence of characters used to represent text.
Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

String are immutable : Once a string is created, it cannot be changed. 
Any operation that modifies a string actually creates a new string.

single quotes : 'Hello, World!'
double quotes : "Hello, World!"
backticks : to create template literals, which allow for multi-line strings and embedded expressions.
*/
let names = 'maniknata';
console.log(names);
let names1 = "manikanta";
console.log(names1);
let names2 = 'how are you,"mani"';
console.log(names2);
let names3 = "good, 'what about you'";
console.log(names3);
let names4 = 'my name is "manikanta",I\'m practing javascript';
console.log(names4);
let names5 = "what is your\'s name \nmy name is siva"
console.log(names5);
let slice = names.slice(2,7)//nikan
console.log(slice)
let slice1 = names.slice(2)//nikanta
console.log(slice1)
let slice2 = names.slice(-2)//ta
console.log(slice2)
let slice3 = names.slice(-7,-2)//
console.log(slice3)

let cellPhone ="9866340492";
let phone=9866340492;
let bakcsticks = `my name is ${names} my mobilenumber is ${phone}`
console.log(bakcsticks);

// Using trim() method to remove leading and trailing spaces
let names6 = "    manikanta    ";
console.log(names6.trim());
let names7 = "  manika   nta  ";
console.log(names7.trim());