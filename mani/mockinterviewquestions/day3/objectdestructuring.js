 /*----> Medium Level 
- (Theory)
What is Object Destructuring? Give example.*/
//what is Object Destructuring
//destructuring object means to extract object properties into variables
let person ={
    name:"mani",
    age:25,
    hobbies:["playing games","reading books"],
}
const {name,age }=person;//destructuring object  to extract name and age into variables
console.log("destructuring object:",name,age)
const{hobbies}=person;//destructuring array to extract hobbies into variables
console.log("destructuring object:",hobbies)