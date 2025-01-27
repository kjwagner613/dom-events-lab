/*-------------------------------- Constants --------------------------------*/

const displayElement = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/

let displayValue = '';
let value = '';

/*---------------- Cached Element References and Event Listener----------------*/

// Whe a button is clicked, the value of the button is stored in the variable value

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    value = button.textContent;

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
if (value === 'C') {   //Clear display if C is clicked
  displayValue = '';
} else if (value === '=') {   //If = is clicked evaluate the expression
  try {  // attenpts to evaluate and if eror then execute catch, if succssful then add to the string
    displayValue = eval(displayValue).toString();
  } catch {
    displayValue = 'error';
  }
} else {  // if click is not C or = then add the value to the string
  displayValue += value;
}

displayElement.textContent = displayValue;});
});