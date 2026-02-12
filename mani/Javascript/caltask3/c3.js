let display = document.getElementById("displays");
let history = document.getElementById("history");
let activeValue = "", previousValue = "", selectedOperator = null;

function addToDisplay(value) {
    activeValue += value;
    updateScreen();
}

function operators(op) {
    if (activeValue === "") return;

    if (previousValue !== "") {
        calculate();
    }
    selectedOperator = op;
    previousValue = activeValue;
    activeValue = "";

    updateScreen();
}
function deleteOne() {
    if (activeValue !== "") {
        activeValue = activeValue.slice(0, -1); // string method
    } else if (selectedOperator !== "") {
        selectedOperator = "";
    } else if (previousValue !== "") {
        previousValue = previousValue.slice(0, -1);
    }
    updateScreen();
}

function calculate() {
    if (previousValue === "" || activeValue === "" || selectedOperator === null) 
        return;

    let num1 = parseInt(previousValue);
    let num2 = parseInt(activeValue);
    let result;

    switch (selectedOperator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                display.value = "Error";
                resetCalculator();
                return;
            }
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
    }
    
    activeValue = result.toString();
     history.style.display = "block";
    history.innerHTML += `<div>${previousValue} ${selectedOperator} ${activeValue} = ${result}</div>`;
    previousValue = "";
    selectedOperator = null;

    updateScreen();
    
}

function updateScreen() {
    display.value =
        previousValue +
        (selectedOperator ? " " + selectedOperator + " " : "") +
        activeValue;
}

function clearDisplay() {
    resetCalculator();
    display.value = "";
     history.style.display = "none";
   
}


function resetCalculator() {
    activeValue = "";
    previousValue = "";
    selectedOperator = null;
}

