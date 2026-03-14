/*- Convert object to array of key value pairs
Input
{name:"Dev",age:25}
Output
[["name","Dev"],["age",25]]*/
let obj = {
    name:"Dev",
    age:25,
}
console.log(Object.entries(obj))