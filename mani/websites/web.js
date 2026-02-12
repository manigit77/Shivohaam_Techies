
function show(){
    alert("Thank you for exploring our services!");
}
const ele = document.getElementById("Register");
function Apply(){
    ele.style.display = "block";

}
function validate() {

  let fname = document.getElementById("fname").value.trim();

  let course = document.getElementById("course").value.trim();

  let email = document.getElementById("email").value.trim();

  let phoneNumber = document.getElementById("phoneNumber").value.trim();


  if (fname === "") {
    alert("Please enter your name");
    return;
  }


  if (course === "") {
    alert("course is not empty");
    return;
  }


  if (email === "") {
    alert("please enter your mail");
    return;
  }

  if (phoneNumber === "") {
    alert("please enter your cellNumber");
    return;
  } else if(phoneNumber.length !==10) {
    alert("please enter 10 digits of cell number");
    return;
  }
  
  ele.style.display = "none";

  
}
