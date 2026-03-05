/*Array in JS
Array=> it is an special kind type of object to store multiple values in a single variable

syntax:-
1)by direct variable
varType varName assign operators square brackets[]

let arr = [1,2,"mani",2.6,true,undefined];
console.log(arr)
console.log(typeof arr)
console.log("length of array",arr.length)
let arr1 =arr.push("hii");
console.log(arr,arr1)
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])

arr.pop();
console.log(arr)
console.log("...........................................................................")
let arr2 = new Array(1,2,"mani",2.6,true,undefined)
console.log(arr2)
console.log(arr2.length)
let upd=arr2.push("ravi")
console.log(arr2,upd)
console.log(arr2.length)
console.log(arr2[10])//undefined
console.log(arr2[-10])//undefined*/
const arr = [1,2,"mani",2.6,true,4,5,6];
let arr1 = new Array(9,8,7,4,5,6)
/*console.log(arr[4]);
console.log(arr[6]);//index is not avaiab;e in array it returns undefiend
console.log(arr.length);//5 it is not a function /method , a simple propert for particular array obect
let up2 =arr.push("mahi")//returns the upated length of array
console.log(arr,up2);

let up1 = arr.pop();//it returns deleteed value
console.log(arr,up1);

let up3 = arr.shift();
console.log(arr,up3);//it delets onlt first value in array and retuns it

let up4 = arr.unshift("siva");
console.log(arr,up4);//it add value in first ocf the arrayand retuns updated length of array*/

/*let up5 =arr.splice(-2,-4);//it delets elements and returns it

console.log(arr,up5);
let up6 =arr.splice(2,4,"m","a","n","i","k","h");//it delets elements and returns it

console.log(arr,up6);*/

//methos cfreatring new array
let up7 = arr.concat(...arr1,50,45)
console.log(arr,up7)

let newArr = [1,2,3,4,5,6,7,80,1,2,4,5,6,7,];

let up9=newArr.find((num) => num <4);
console.log(newArr,up9)// return the first occurance index number of matched arguments and if it's not matched so return -1.
// take a function as a arguments

let up10=newArr.some((num) => num <0);
console.log(newArr,up10)
let up11=newArr.some((num) => num > 90);
console.log(newArr,up11)// return boolean value if it's matched the any one condition/ as passed in arguments so return true if no one if matched so, returns false
// take a function as a arguments

let up12 = newArr.every((num) => num>5) 
console.log(newArr,up12)
console.log(".......................")
let up13 = newArr.fill("m",2,5)
console.log(newArr,up13)


let newArray1 = [1,4,6,7,9,10,52,45,0,1,2,8];
let newArray2 = [1,4,6,7,9,10,52,45,0,1,2,8];
let arr2 =[];
for(let i =0;i<newArray1.length;i++  
){
    newArray1[i] =newArray1[i] * 2;
    arr2.push(newArray1[i])
}
console.log(newArray1,arr2)
console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,")
let arrMap = newArray2.map((num) => num *2)
console.log(newArray2,arrMap)

let arr3 =[];
for(let i = 0;i<newArray1.length;i++){
    if(newArray1[i] <10){
        arr3.push(newArray1[i])
    }
}
console.log(newArray1,arr3)
let arrFilter = newArray2.filter((n) => n < 10);
console.log("array with filter: ", newArray2, arrFilter);