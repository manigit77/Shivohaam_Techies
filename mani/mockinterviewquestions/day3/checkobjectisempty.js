/*- Check if object is empty
Input
{}
Output
true*/
let obj = {};
if(Object.keys(obj).length===0){
    console.log("true")
}else{
    console.log("false")
}
