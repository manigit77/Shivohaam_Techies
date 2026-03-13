const obj = {
    name:"mani",
    age:23,
    myfun:function () {
        console.log("this is a function",this.name,"acessing the name")
    },
    arr:[1,2,3,4],
    23:"number key",
}
const obj2 = obj;
console.log("type of obj:",typeof obj)

// real life example of object in JS with sub object and array as value of object
const product = {
  id: 1,
  name: "Laptop",
  description:
    "A high-performance laptop suitable for gaming and professional work.",
  price: 50000,
  features: ["16GB RAM", "512GB SSD", "Intel i7", "SSD", "Snep"], // array as value of object
  specifications: {
    // sub object as value of object
    weight: "1.5kg",
    dimensions: "30cm x 20cm x 2cm",
    battery: "10 hours",
  },
};
const m1 = "n2";
//acessing properties
console.log(obj.name)
console.log(obj["age"])
console.log(obj[m1])
//modifying
obj2.name="mahi";
obj2["age"]=52;
console.log("obj:",obj)
console.log("obj2:",obj2)
//methods of object
obj.myfun();
console.log(obj.myfun)

//iterating
for(let key in obj){
    console.log(key,":", obj[key])
}
console.log(Object.keys(obj))//gives in array [ '23', 'name', 'age', 'myfun', 'arr' ]
console.log(Object.values(obj))// gives in array [ 'number key', 'mahi', 52, [Function: myfun], [ 1, 2, 3, 4 ] ]
console.log(",,,,,,,,,,,,,,,,,,,")
Object.keys(obj).forEach((key) => {
    console.log(key,":",obj[key])

});
console.log(",,,,,,,,,,,,,,,,,,,")
Object.values(obj).forEach((value) => {
    console.log(value)

});
console.log(",,,,,,,,,,,,,,,,,,,")
console.log(Object.entries(obj))//o/p:array inside array
console.log(",,,,,,,,,,,,,,,,,,,2")
Object.entries(obj).forEach(([key,value]) => {
    console.log(key, ":", value)

});
console.log(",,,,,,,,,,,,,,,,,,,3")
Object.entries(obj).forEach((entry) => {
    const [key,value] = entry;
    console.log(key,":",value)
})

//destructing objects
const{id,name}=product;
console.log(id)
console.log(name)
//destructing array
const {features}=product;
console.log(features)
//destructing individual array
const [feature1, feature2]=features;
console.log(feature1)
console.log(feature2)

//spread operator with Objects
const obj3 = {...obj}// creating a shallow copy of obj using spread operator
console.log(obj3)
/*{
  '23': 'number key',
  name: 'mahi',
  age: 52,
  myfun: [Function: myfun],
  arr: [ 1, 2, 3, 4 ]
}*/

const obj4 = JSON.parse(JSON.stringify(obj));//{ '23': 'number key', name: 'mahi', age: 52, arr: [ 1, 2, 3, 4 ] }
console.log(obj4)
console.log(".............................")
//object methods
const obj8 = {
    name:"siva",
    age:"age",
    greet: function () {
        console.log(this.name)
    },
}
obj8.greet();
console.log(".............................4")
//Object.freeze(obj8)
obj8.name="ashok";
console.log(obj8)
Object.seal(obj8);
obj8.age=30;
obj8.gender="male"
console.log(obj8)
//nested obj"ects how to acess them
console.log("/////////////")

console.log(product?.specifications?.weight)
//checking properties have or not
console.log("name" in obj)
console.log("city" in obj)
//nested object
console.log("weight" in product.specifications)
//by hasOwnProperty
console.log("kkkkkkkkkkkkkkkkk")
console.log(product.hasOwnProperty("name"))
console.log(product.specifications.hasOwnProperty("weight"))

const obj9 = {a:3,b:6};
const obj10 = {b:6,c:9};
const returnedTarget = Object.assign(obj9,obj10)
console.log(returnedTarget)

const obj11 = {
    "first name":"mn",
}
console.log(obj11["first name"])
delete obj11["first name"]
console.log(obj11)