/*- Merge two objects
Input
obj1={a:1,b:2}
obj2={c:3,d:4}
Output
{a:1,b:2,c:3,d:4}*/
let obj1={
    a:1,
    b:2,
}
let obj2={
    c:3,
    d:4,

}

let result = {};

// copy obj1 properties
for(let key in obj1){
    result[key] = obj1[key];
}

// copy obj2 properties
for(let key in obj2){
    result[key] = obj2[key];
}

console.log("mergetwoobjects:",result);
const obj3={...obj1 ,...obj2}
console.log("mergetwoobjects:",obj3)
const obj4 =Object.assign({},obj1,obj2);
console.log("mergetwoobjects:",obj4)