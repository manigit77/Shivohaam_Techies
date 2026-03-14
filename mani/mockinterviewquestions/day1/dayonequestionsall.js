/*Today's interview questions 

1.var vs let vs const
2.closure concept//doubt
3. reverse array
4. find max number
5. remove duplicates
6. count occurrences
7. flatten array
8. group objects
9. pair sum
10.first unique element//The First Unique Element problem means finding the first element in an array that appears only once.

11.What are the different types of scope in JavaScript?

12. What is Hoisting?

13. Reverse a string without using built-in reverse.

14. Check Palindrome String
Example 
Input: "madam"
Output: true

15. What is Temporal Dead Zone (TDZ)?

16. Find Second Largest Number
Example
Input: [10,20,5,8,30]
Output: 20

17. Count Vowels in String
Example
Input: "javascript"
Output: 3

18. Find Largest Word in Sentence
Example
Input: "I love javascript programming"
Output: "programming"

19. Rotate Array by K Positions
Example
Input: [1,2,3,4,5] k = 2
Output: [4,5,1,2,3]

20. Find Missing Number in Array
Example 
Input: [1,2,3,5]
Output: 4*/
//ANSWERS

1.
//var:-function-scoped variable. can be re-declared and updated.
//ex:-
var x = 10;
var x = 20;
console.log("var:",x)
//function scope
function test(){
    if(true){
        var a = 20;
    }
    console.log("fun scope:",a)
}
//console.log(a)//ReferenceError: a is not defined
test();

//let:-block-scoped variable. can be updated but not re-declared within the same scope .
//ex:-
let y = 10;
y=20;
console.log(y)
//block scope
if(true){
    let a1 =20;
    console.log(a1)
}
// console.log(a1)//ReferenceError: a1 is not defined

//const:-block-scoped constant. cannot be redeclared or updated.
//ex:-
const pi=3.14;
console.log(pi)

3.//reverse array using for
let arr = ["m","a","d","a","m"];
let arrReverse=[];
for(let i=arr.length  -1;i>=0;i--){
    arrReverse.push(arr[i])
}
console.log(arrReverse)
//checks it is palindrome
if(arr.join() ==arrReverse.join()){
    console.log("it is a palindrome")
}else{
    console.log("it is not  a palindrome")
}

4.//find the max number
let arr10 =[1,2,3,4,5,6,88,9,33,55,22];
let max =arr10[0];
for(let i =0;i<=arr10.length;i++){
    if(arr10[i]>max){
        max=arr10[i];
    }
}
console.log("max num:",max)
5.//remove duplicates
let arr11 = [1,2,3,4,5,5,4,3,2,1];
let single=[];
for(let num of arr11){
    if(!single.includes(num)){
        single.push(num)
    }
}
console.log("unquine:",single)
6.//count occurrences
let str13="manikanta";
let object={};
for(let ch of str13){
    if(object[ch]){
        object[ch]++;
    }else{
         object[ch]=1;

    
    }
}
console.log("count occurrences:",object)
//count occurences using for loop
let str5 = "manikanta";
let obj={};
for(let i =0;i<str5.length;i++){
    let char = str5[i];
    if(obj[char]){
        obj[char]++;
    }else{
         obj[char]=1;
    }
}
7.//flatten array
let arr8 = [1, [2, 3], [4, 5]];
//let result = [];
for (let i = 0; i < arr.length; i++) {
    console.log("flatten array",arr8[i]);
}
9.//pair sum
let arr22 =[2,7,8,9];
let t1 = 9;
for(let i =0;i<arr22.length;i++){
    for(j=i+1;j<arr22.length;j++){
        if(arr22[i]+arr22[j]===t1){
            console.log("pairsum:",arr22[i],arr22[j])
        }
    }
}
10.//first unique element
let arr44 = [2,3,4,2,3,5];
let obj5={};
//find the count occurences
for(let num of arr44){
     if(obj5[num]){
        obj5[num]++;
    }else{
         obj5[num]=1;
         
    }
}
//find the first unique element
for(let num of arr44){
    if(obj5[num]===1){
        console.log("first unique:",num)
        break;
    }
}
11.
//What are the different types of scope in JavaScript?
//there are three types of scopes
//1. Global :-A variable declared outside any function or block has global scope.It can be accessed anywhere in the program.
//ex:-
let name = "Mani";  // Global variable
function greet() {
    console.log(name);
}
greet();
console.log(name);
//2. Function:-Variables declared inside a function can only be accessed inside that function.
//ex:-
function test(){
    var a = 10;
    console.log(a);
}
test();
//console.log(a);//ReferenceError: a is not defined
//3. Block:-Variables declared using let or const inside {} are block scoped
//ex:-
if(true){
    let x = 20;
    const y = 30;
    console.log(x);
    console.log(y);
}
//console.log(x);//ix is not defined
12.
//what is hosting
// Declaration & Intialization / Hoisting =>
// Hoisting = > it show the default behaviour of the variable before it's declartion and initialization
//or
//hosting means javascript moves variable and function declarations to the top of their scope before code execution
13.
//reverse a string using forloop
let str2 = "racecar";
let reversed ="";
for(let i =str2.length - 1;i>=0;i--){
    reversed+=str2[i];
    }
console.log("reversed a string:",reversed)
14.
//checks it is palindrome
if(str2 === reversed){
    console.log("it is a palindrome")
}else{
    console.log("it is not  a palindrome")
}
//reverse a string using while
let str3 = "madam";
let reversed1="";
let i =str3.length-1;
while(i>=0){
    reversed1+=str3[i];
    i--;
}
console.log(reversed1)
14.
//checks it is palindrome
if(str3 === reversed1){
    console.log("it is a palindrome")
}else{
    console.log("it is not  a palindrome")
}
15.//what is Temporal Dead Zone(TDZ)?
//The Temporal Dead Zone is the time between a variable being hoisted and being initialized, during which accessing the variable declared with let or const results in a ReferenceError.
16.//find the second largest number 
let arr4 = [10,20,5,8,30];
let largest=-Infinity;

for(let num of arr4){
    if(num>largest){
        secondLargest=largest;
        largest=num;
    }else if(num >secondLargest && num !==largest){
        secondLargest=num

    }
}
console.log(largest);
console.log(secondLargest);
17.
//using forloop count vowels
let str = "manikanta";
const vowels = "aeoiuAEIOU";
let count = 0;
for(let i =0;i<str.length;i++){
    if(vowels.includes(str[i])){
        count++;
    }
}
console.log(count)
//using for..of count vowels
let str1 = "mahesh";
let vowels1 = "aeiouAEIOU"
let count1 =0;
for(let char of str1){
    if(vowels1.includes(char)){
        count1++;
    }
}
console.log(count1)

/*- Find Largest Word in Sentence
Example
Input: "I love javascript programming"
Output: "programming"*/

let str0="I love javascript programming";
let words = str0.split(" ")

let largestWord="";
for(let word of words){
    if(word.length>largestWord.length){
        largestWord=word
    }
}
console.log("largestword:",largestWord)

/* Find Missing Number in Array
Example 
Input: [1,2,3,5]
Output: 4*/
let arr9 = [1,2,3,5,];
for (let i = 1; i <= arr.length + 1; i++) {
    if (!arr9.includes(i)) {
        console.log("Missing Number:", i);
        break;
    }
}
 


