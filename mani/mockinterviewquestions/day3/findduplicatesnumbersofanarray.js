/*- Find duplicate numbers in array
Input
[1,2,3,2,4,1]
Output
[2,1]*/
let arr = [1,2,3,2,4,1];
let unique=[];
let duplicates=[];
for(let num of arr){
    if(unique.includes(num)){
        duplicates.push(num)
    }else{
        unique.push(num)

    }
   
}
console.log(duplicates)