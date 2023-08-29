const display = document.querySelector('.calculator-input');

const keys = document.querySelector('.calculator-keys');

let displayValue = '0';

updateDisplay();

function updateDisplay() {
    display.value = displayValue;

}

keys.addEventListener('click', function (e) {

    const element = e.target;

    if (!element.matches('button')) return;

    if (element.classList.contains('operator')) {

        console.log('operator', element.value);
        return;
    }

    if (element.classList.contains('decimal')) {
        console.log('decimal', element.value);
        return;
    }
    if (element.classList.contains('allClear')) {

        console.log('allClear', element.value);
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
})