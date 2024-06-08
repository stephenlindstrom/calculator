function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let number1;
let operator;
let number2;

function operate(operator, a, b) {
    if (operator === "add") {
        return add(a, b);
    } else if (operator === "subtract") {
        return subtract(a, b);
    } else if (operator === "multiply") {
        return multiply(a, b);
    } else if (operator === "divide") {
        return divide(a, b);
    }
}

const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation")
const equals = document.querySelector("#equals")
const calcDisplay = document.querySelector("#display");
const clear = document.querySelector("#clear");

let displayValue = "";
let currentNum = "";
let operatorSelected = false;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        displayValue += `${number.id}`;
        display.textContent = displayValue;
        if (!operatorSelected) {
            currentNum += `${number.id}`;
            number1 = parseInt(currentNum);
            console.log(`number1 ${number1}`);
        } else {
            currentNum += `${number.id}`;
            number2 = parseInt(currentNum);
            console.log(`number2 ${number2}`);
        }
    });
});

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        if (!operatorSelected) {
            displayValue += operation.textContent;
            display.textContent = displayValue;
            operator = `${operation.id}`;
            currentNum = "";
            operatorSelected = true;
        } else {
            number1 = operate(operator, number1, number2);
            operator = `${operation.id}`;
            displayValue = number1 + operation.textContent;
            display.textContent = displayValue;
            currentNum = "";
        }
    });
});

equals.addEventListener("click", () => {
    const result = operate(operator, number1, number2);
    displayValue = result;
    display.textContent  = displayValue;
    displayValue = "";
    currentNum = "";
    operatorSelected = false;
})

clear.addEventListener("click", () => {
    display.textContent = "";
    displayValue = "";
    currentNum = "";
    operatorSelected = false;
});