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
    }
    waitSecondValue = true;
    operator = nextOperator;

    console.log(displayValue, firstValue, operator, waitSecondValue);
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
}