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
let displayValue = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        displayValue += `${number.id}`;
        display.textContent = displayValue;
        if (!operator) {
            number1 = `${number.id}`;
            console.log(`Number 1 is ${number1}`);
        } else {
            number2 = `${number.id}`;
            console.log(`Number 2 is ${number2}`);
        }
    });
});

operations.forEach((operation) => {
    operation.addEventListener("click", () => {
        displayValue += operation.textContent;
        display.textContent = displayValue;
        operator = `${operation.id}`;
        console.log(operator);
    });
});

equals.addEventListener("click", () => {
    const result = operate(operator, number1, number2);
    displayValue = result;
    display.textContent  = displayValue;
})