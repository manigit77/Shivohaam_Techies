/*
Javascript stores values in two types of memory: stack and heap. 
The stack is used for storing primitive values (like numbers, strings, booleans) 
and function calls, while the heap is used for storing objects and arrays.

 => Primitives Types (Value Copy):-
    1. Primitive values are stored directly in the stack, and when you assign a primitive value to a variable, it creates a copy of that value.
    2. When you assign a primitive value to another variable, it creates a new copy of that value in memory. So, if you change the value of one variable, it does not affect the other variable.
    3. Primitive values are immutable, which means that once a primitive value is created, it cannot be changed. If you want to change the value, you need to create a new primitive value.

    Ex:- string , number , boolean , null , undefined , symbol , bigint

 => Non-Primitive Types (Reference Copy):- 
    1. Objects are stored in the heap, and when you assign an object to a variable, it creates a reference to that object in memory.
    2. When you assign an object to another variable, it creates a new reference to the same object in memory. So, if you change the properties of the object using one variable, it will affect the other variable as well, since both variables are referencing the same object.
    3. Objects are mutable, which means that you can change the properties of an object after it has been created.
    4. When you copy an object, you are copying the reference to that object, not the actual object itself. This is known as a shallow copy. If you want to create a deep copy of an object, you need to use techniques like JSON.parse(JSON.stringify(obj)) or libraries like Lodash.

    Ex:- object , array , function, date , regex , map , set , weakmap , weakset
    */

let a = 20;
let b =a;
console.log("a:",a)
console.log("b:",b)
a= 30;
console.log("a:",a)

let obj1={
    name:"mani",
    age:25,
    adress:{
        city:"hyd",
        country:"india",
    },
};
console.log("obj1:",obj1)

let obj2=Object.assign({},obj1);
obj2.name="navya"

console.log("obj1:",obj1)
console.log("obj2:",obj2)
console.log(".............................")
obj2.adress.city="guntur"
console.log("obj1:",obj1)
console.log("obj2:",obj2)

let obj3={...obj1};
obj3.name="mahi"
console.log("obj1:",obj1)
console.log("obj3:",obj3)
obj3.adress.country="aus"
console.log("obj1:",obj1)
console.log("obj3:",obj3)
console.log(".............................")
let obj5 =JSON.parse(JSON.stringify(obj1))
obj5.name="ashok";

console.log("obj1:",obj1)
console.log("obj5:",obj5)
obj5.adress.city="jet"

console.log("obj1:",obj1)
console.log("obj5:",obj5)
console.log("...........................")
let obj6=structuredClone(obj1)
obj6.adress.city="ashok11";

console.log("obj1:",obj1)
console.log("obj6:",obj6)
