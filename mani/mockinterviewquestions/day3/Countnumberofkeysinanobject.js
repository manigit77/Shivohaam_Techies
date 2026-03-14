//What is the difference between an Object and a Map in JavaScript?
//object:-An Object is a collection of properties, and a property is an association between a name (or key) and a value.

/*- Count number of keys in an object
Input
{a:1,b:2,c:3}
Output
3*/

let obj = {
    a:1,
    b:2,
    c:3,
}
let count=0;
for(let keys in obj){
    count++;
   
}
console.log(count)