/*DOM => Document Object Model

Definition -> It converts the HTML into a tree-like-structure of objects.

Basic Nomanclature of Variables, Functions, Events in camelCase. and it's case sensitive.

Ex: JS , Js , jS, js all are treated as defferent name in Javascript.

let fullName // start from lowercase and when word is chnaged so always use first letter of second , third , ... words in uppercase.

Element Properties => 
  -> id => unique identity for an element
  -> class => we can be make group all elements by using class Attributes
  -> tag name => this is the tag which are we used in our HTML
  -> querySelector => same as class we can be make a group as class and use in our CSS file to change or update the same style for whole group

DOM Functions => 

// update and fetch 
-> createElement =>

-> remove()

// fetch dom objects functions
-> getElementById => 
-> getElementsByClassName
-> getElementByTagName
-> querySelector
-> querySelectorAll

// update dom functions
-> innerText
-> innerHTML
-> style

-> addEventListener // 

*/

function show() {
  alert("This is me");
}

let ele = document.getElementById("body"); // return single element
ele.style.background = "red";
console.log(ele);

// let ele2 = document.getElementsByClassName("diva"); // return collection of whole elements
// ele2[0].style.background = "black";

// console.log(ele2[0]);

// let ele3 = document.getElementsByTagName("h2"); // return collection of whole elements
// ele3[0].innerText = "hey updated"; // only chnaged the content of an Element (text only)
// console.log(ele3);

// let ele3 = document.getElementsByTagName("h2"); // return collection of whole elements
// ele3[0].innerHTML = "<h3>Hello Sairam</h3>"; // chnaged the entire element with tag also ( content/text + element )
// console.log(ele3);

// let ele4 = document.querySelector(".diva"); // return  first single element
// console.log(ele4, "first");
// ele4.style.border = "3px solid black";
// console.log(ele4, "second");

//let ele5 = document.querySelectorAll(".diva"); // return node list of whole elements
// console.log(ele5, "first");

/*ele5.forEach((item) => {
  item.style.border = "3px solid black";
  item.style.background = "blue";
});*/

// console.log(ele5, "second");

// let myParaph = document.createElement("p"); // create a element
// myParaph.innerText = "this is my paragraph";

// document.body.appendChild(myParaph);  // integrate or append on html body

// let eleh3 = document.getElementById("h3ele");
// console.log(eleh3);

// eleh3.remove(); // remove of any element

/*let btn = document.getElementById("btn");
console.log(btn, "button");

btn.addEventListener("click", function show() {
  alert("This is me");
});*/
