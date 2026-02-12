// basic syntax of if-else statement is as follows:
// if (condition) {
//   // code to be executed if condition is true
// } else {
//   // code to be executed if condition is false
// }
let age = 18;
if(age>=18){
    console.log("eligible for vote")
}else{
    console.log("not eligible for vote")
}

//elseif
let exp = "4";
if(exp===0){
    console.log("fresher")
}
else if(exp===1){
    console.log("junior enginner")
}
else if(exp===2){
    console.log("senior enginner")
}
else if(exp===3){
    console.log("team leader")
}
else if(exp>=4){
    console.log("manager")
}
else{
    console.log("enter valid number type")
}
//nested if-else
let number = 28;
if(number > 0){
    if(number % 2 ===1){
        console.log(number + "is a odd number")
    }else{

    
    console.log(number + "is a not odd number")
    }
}else{
    console.log(number + "is a  not positive number")
}