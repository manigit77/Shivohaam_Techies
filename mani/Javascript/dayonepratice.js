/*Today's interview questions 

1.var vs let vs const
2.closure concept
3. reverse array
4. find max number
5. remove duplicates
6. count occurrences
7. flatten array
8. group objects
9. pair sum
10.first unique element

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
//reverse a string using forloop
let str2 = "racecar";
let reversed ="";
for(let i =str2.length - 1;i>=0;i--){
    reversed+=str2[i];
    }
console.log("reversed a string:",reversed)

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

//checks it is palindrome
if(str3 === reversed1){
    console.log("it is a palindrome")
}else{
    console.log("it is not  a palindrome")
}
//find the string length
let str4 = "man";
console.log(str4.length)

//reverse array using for
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
//count occurences using for loop
let str5 = "manikanta";
let obj={};
for(let i =0;i<str5.length;i++){
    let char = str[i];
    if(obj[char]){
        obj[char]++;
    }else{
         obj[char]=1;
    }
}
console.log("count occurences:",obj)
//count occurences using for for... of
let str6 = "manikanta";
let obj2 = {};
for(let char of str6){
    if(obj2[char] ){
        obj2[char]++;
    }else{
         obj2[char]=1;
    }
}
console.log("count occurences:",obj2)
//remove duplicates
let arr2 = [1,2,3,4,5,4,3,2,1,5,5,5,5,55,5];
let unique = [];
for(let ele of arr2){
    if(!unique.includes(ele)){
        unique.push(ele)
    }
}
console.log(unique)
/*- Find Second Largest Number
Example
Input: [10,20,5,8,30]
Output: 20
*/
let arr4 = [10,20,5,8,30];
let largest=-Infinity;

for(let num of arr4){
    if(num>largest){
        secondLargest=largest;
        thirdLargest=secondLargest
        largest=num;
    }else if(num >secondLargest && num !==largest){
        secondLargest=num

    }else if(num >thirdLargest && num !==secondLargestlargest && num !==largest){
        thirdLargest=num
    }
}
console.log(largest);
console.log(secondLargest)
console.log(thirdLargest)
