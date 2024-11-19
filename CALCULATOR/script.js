// script.js
let currentInput = "0";
let previousInput = "";
let operator = null;

const display = document.getElementById("display");

function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === "") return; // Prevent setting operator without number
    if (previousInput !== "") {
        calculateResult(); // Calculate previous operation first if any
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "0";
}

function calculateResult() {
    if (previousInput === "" || currentInput === "") return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = current === 0 ? "Error" : prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operator = null;
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length === 1) {
        currentInput = "0";
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}

