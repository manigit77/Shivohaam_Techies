//ex of a function declaration
function mul(a,b){
    return a*b;
}
mul(2,3);
console.log(mul(2,3));

//ex of a function expression
const divison = function (a,b){
    return a/b;
}
divison(10,2)
console.log(divison(10,2))

const add = (a,b) => a+b;
add(2,3)
console.log(add(2,3))

setTimeout(function (){
    console.log("nameless function")
},1000)

/*(function (){
    console.log("this is an IIFE");//TypeError: console.log(...) is not a function
})();*/
const add1 = (a,b) => a+b;
add1(2,3)
console.log(add1(2,3))

//recursive function
function factorial(n){
    if(n===1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));

function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(10))