const arr1 = [1,2,3];
const arr2 = [...arr1,4,5];//spreads operator
console.log(arr2)
function show(...num){//rest operator
    console.log(num)
}
show(10,20,30)
let str = "madam";
let count ={};
for(let char of str){
    if(count[char]){
        count[char]++;
    }else{
        count[char]=1;
    }
}//{m:2,a:2,d:1}
console.log(count)