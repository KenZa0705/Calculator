const display = document.getElementById('display'); // Corrected method name
const buttons = document.querySelectorAll('button');

let displayValue = '';

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;

        // If user clicks 'C', clear the display
        if (buttonText === 'C') {
            displayValue = '';
            display.value = displayValue; // Use textContent for display

        // If user clicks '=', evaluate the expression
        } else if (buttonText === '=') {
            try {
                display.value = eval(displayValue);
            } catch (error) {
                display.value = 'Error';
            }
        // If user clicks a number or operator, add it to the display
        } else {
            displayValue += buttonText;
            display.value = displayValue; // Change to textContent
        }
    });
});
