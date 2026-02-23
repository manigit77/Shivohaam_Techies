/*

Array in JS =>
    An Array is an special type of object used to store multiple values in a single variable.

Basic Syntax:-

-> By direct varibale(mostly used)
 varType varName assign Operator and values in sqare bracket []
 let array = [1,2,"dev", "shiva", 6, 5] 

-> Using Constructor
varType varName assign Operator new keyWord Array(values)
let array = new Array(1,2,"dev", "shiva", 6, 5)

Characteristics of Array:-

-> Stored multile values 
-> can store different data types
-> dynamic in nature (dynamic size)
-> indexed (starts from 0)
-> Ordered collection/list
-> Stored in Heap memory
-> refernce type (non primitives data type) 

Array internally working:-
let arr = [1,3,5,7]

Internally array saved as object that's why the type of array is Object 
Ex:- 
let arr = {
  0: 1,
  1: 3,
  2: 5,
  3: 7,
  length: 4,
};

*/

const arr = [1, 2, "dev", "shiva", 6, 50, true, null, undefined];
let arr1 = new Array(1, 2, "dev", "shiva", 6, 5);

console.log("type of array in JS: ", typeof arr);

// Indexing
console.log(arr[50]); // by using index number we can get directly value for that index if no index is available so it's always return undefined

// length
console.log("length of array", arr.length); // Length of array is not a method/function in JS, this is a simple property or single key for that particular array object

// Basic Methods of an array:-

let upt = arr.push(400); // return the updated length of array so, not creating a new array but update the original array
console.log("array on Push: ", arr, upt);

let upt1 = arr.pop(); // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log("array on Pop: ", arr, upt1);
