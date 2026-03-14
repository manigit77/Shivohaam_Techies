let arr = [1,2,2,3,3,3,4];

let count = {};
let maxCount = 0;
let mostFrequent;

for(let num of arr){
     if(count[num]){
        count[num]++;
    }else{
         count[num]=1;
    }
if(count[num] > maxCount){
    maxCount = count[num];
    mostFrequent = num;
 }
}

console.log(mostFrequent);