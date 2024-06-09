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
    if (b===0) {
        return 'Error';
    } 
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
const decimalPoint = document.querySelector("#decimal-point");

let displayValue = "";
let currentNum = "";
let operatorSelected = false;
let number1Selected = false;
let number2Selected = false;
let decimalSelected = false;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        displayValue += `${number.id}`;
        display.textContent = displayValue;
        if (!operatorSelected) {
            currentNum = displayValue;
            number1 = Number(currentNum);
            number1Selected = true;
            console.log(`number1 ${number1}`);
        } else {
            currentNum += `${number.id}`;
            number2 = Number(currentNum);
            number2Selected = true;
            console.log(`number2 ${number2}`);
        }
    });
});

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        if (number1Selected) {
            if (!operatorSelected) {
                displayValue += operation.textContent;
                display.textContent = displayValue;
                operator = `${operation.id}`;
                currentNum = "";
                operatorSelected = true;
                decimalSelected = false;
            } else {
                if (number2Selected) {
                    number1 = operate(operator, number1, number2);
                    number1Selected = true;
                    number2Selected = false;
                    operator = `${operation.id}`;
                    displayValue = number1 + operation.textContent;
                    display.textContent = displayValue;
                    currentNum = "";
                    decimalSelected = false;
                } else {
                    operator = `${operation.id}`;
                    displayValue = number1 + operation.textContent;
                    display.textContent = displayValue;
                }
            }
        }   
    });
});

equals.addEventListener("click", () => {
    if (number2Selected) {
        const result = operate(operator, number1, number2);
        displayValue = result;
        display.textContent  = displayValue;
        displayValue = "";
        currentNum = "";
        operatorSelected = false;
        number1Selected = false;
        number2Selected = false;
        decimalSelected = false;
    }
})

clear.addEventListener("click", () => {
    display.textContent = "";
    displayValue = "";
    currentNum = "";
    operatorSelected = false;
    number1Selected = false;
    number2Selected = false;
    decimalSelected = false;
});

decimalPoint.addEventListener("click", () => {
    if (!decimalSelected) {
        displayValue += ".";
        currentNum += ".";
        display.textContent = displayValue;
        decimalSelected = true;
    }
});