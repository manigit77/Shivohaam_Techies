const display =document.getElementById("displays");
        function addToDisplay(input) {
            display.value += input;
        }

        function calculate(){
            display.value = eval(display.value);
        }

        function clear1(){
            display.value = "";
        }
        /*let display = document.getElementById("displays");
let activeValue = "", previousValue = "", selectedOperator = null;

function addToDisplay(val) {
    activeValue += val;
    updateScreen();
}

function operators(op) {
    if (!activeValue) return;
    if (previousValue) calculate();

    selectedOperator = op;
    previousValue = activeValue;
    activeValue = "";
    updateScreen();
}

function calculate() {
    if (!previousValue || !activeValue || !selectedOperator) return;

    let n1 = parseInt(previousValue),
        n2 = parseInt(activeValue),
        result;

    switch (selectedOperator) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/":
            if (n2 === 0) return showError();
            result = n1 / n2;
            break;
        case "%": result = n1 % n2; break;
    }

    activeValue = result.toString();
    previousValue = selectedOperator = "";
    updateScreen();
}

function updateScreen() {
    display.value = previousValue + (selectedOperator ? ` ${selectedOperator} ` : "") + activeValue;
}

function clearDisplay() {
    resetCalculator();
    display.value = "";
}

function resetCalculator() {
    activeValue = previousValue = selectedOperator = "";
}

function showError() {
    display.value = "Error";
    resetCalculator();
}*/