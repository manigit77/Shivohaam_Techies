function reveString(str){
  let newString="";
  for(let i =str.length-1;i>=0;i--){
    newString+=str[i];
  }
  return newString;
}
const oristr ="mani";
const revesedStr = reveString(oristr);
console.log(revesedStr)

if(oristr===revesedStr){
  console.log("ture")
}
else{
  console.log("false")
}
function generateOtp(parameters){
  //body
  return value;
}
let m1 ="10";
if(m1===10){
  console.log("true")
}else{
  console.log("flase")
}
let m2 =20;
if(m2!=20){
  console.log("true")
}else{
  console.log("flase")
}

let day = 2;
switch(day){
  case 2:
    console.log("tuesday");
  
  case 1:
    console.log("monday");
  
  case 3:
    console.log("wedne");
    break;
  default:
    console.log("error valid day")


}
let n1 ="abcd"
let n2 = "dcba"
let n3=n1.split("").sort();
let n4 = n2.split("").sort();
if(n3===n4){
  console.log("true")
}else{
  console.log("flase")
}
