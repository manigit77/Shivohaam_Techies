let a = [1,2,3,4,5];
let map = a.map((num) => num >0);
console.log(a, map);

let str = "mani";
/*if(str.includes("a")){
    console.log("a is pre")
}else{
    console.log("a is not pre")
}*/

for(let i =0; i<str.length;i++){
    if(str[i] ==="a"){
        console.log("a is pre")
        break;
    }
    
}
let arr =[1,2,2,3,4,5,5];
let res = [];

for(let i=0;i<arr.length;i++){
    if(!res.includes(arr[i])){
        res.push(arr[i])
    }
}
console.log(res)

//find the largest number in an array
let arr3 = [1,3,4,5,6,7,8,9];
let largestArr=arr3[0];
for(let i =1;i<arr3.length;i++){
    if(arr3[i]>largestArr){
        largestArr=arr3[i];

    }
}
let arr9 =[10,25,5,40,15];
let largest =Math.max(...arr9);
console.log(largest)
console.log("largest:",largestArr)

let arr4 =[1,22,44,55,1,2,3];
let lowest =arr4[0];
for(let i =1;i<arr4.length;i++){
    if(arr4[i]<lowest){
        lowest=arr4[i];
    }
}
console.log("lowest:",lowest)
let arr8 = [10, 25, 5, 40, 15];

let min = arr8[0];

for (let i = 1; i < arr8.length; i++) {
    if (arr8[i] < min) {
        min = arr8[i];
    }
}

console.log("Minimum number:", min);
let arr88 = [1,2,3,4,5,7,8,4,1,2,3,5,6];
let uniaue=[];
for(let i = 0;i<arr88.length;i++){
    if()
}
