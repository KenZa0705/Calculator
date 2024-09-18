const display = document.getElementsById('display');
const buttons = document.querySelectorAll('button');

let displayValue = '';

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;

        // If user clicks 'C', clear the display
        if (buttonText === 'C') {
            displayValue = '';
            display.value = displayValue;

        // If user clicks '=', evaluate the expression
        } else if (buttonText === '=') {
            try {
                displayValue = eval(displayValue);
                display.value = displayValue;
            } catch {
                displayValue = 'Error';
            }
            // If user clicks a number or operator, add it to the display
        } else {
            displayValue += buttonText;
            display.value = displayValue;
        }
    });
});