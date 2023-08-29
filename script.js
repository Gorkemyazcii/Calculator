const display = document.querySelector('.calculator-input');

const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitSecondValue = false;

updateDisplay();

function updateDisplay() {
    display.value = displayValue;

}

keys.addEventListener('click', function (e) {

    const element = e.target;

    if (!element.matches('button')) return;

    if (element.classList.contains('operator')) {

        console.log('operator', element.value);
        handleOperator(element.value);
        updateDisplay();
        return;
    }

    if (element.classList.contains('decimal')) {
        console.log('decimal', element.value);
        inputDecimal(element.value);
        updateDisplay();
        return;
    }
    if (element.classList.contains('allClear')) {

        console.log('allClear', element.value);
        clear();
        updateDisplay();
        return;
    }
    if (element.classList.contains('negatif')) {

        console.log('negatif', element.value);
        return;
    }
    if (element.classList.contains('percentage')) {

        console.log('percentage', element.value);
        return;
    }

    console.log('number', element.value);
    inputNumber(element.value);
    updateDisplay();
});

function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);
    if (firstValue === null) {
        firstValue = value;
    } else if (operator) {
        const result = calculate(firstValue, value, operator);

        displayValue = `${parseFloat(result.toFixed(9))}`;
        firstValue = result;
    }
    waitSecondValue = true;
    operator = nextOperator;

    console.log(displayValue, firstValue, operator, waitSecondValue);
}

function calculate(first, second, operator) {
    if (operator === '+') {
        return first + second;
    } else if (operator === '-') {
        return first - second;
    }
    else if (operator === '*') {
        return first * second;
    }
    else if (operator === '/') {
        return first / second;
    }
    else if (operator === '%') {
        return first / 100;
    }
    else if (operator === 'negatif') {
        if (displayValue > 0) {
            return first * -1;
        } else if (displayValue === "0") {
            return;
        } else {
            return first * -1;
        }


    }
    return second;


}

function inputNumber(num) {
    if (waitSecondValue) {
        displayValue = num;
        waitSecondValue = false;
    } else {
        displayValue = displayValue === '0' ? num : displayValue + num;
    }

    console.log(displayValue, firstValue, operator, waitSecondValue);
}

function inputDecimal() {
    if (!displayValue.includes('.'))
        displayValue += '.';
}

function clear() {
    displayValue = '0';
    firstValue = null;

}