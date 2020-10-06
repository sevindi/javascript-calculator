const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const displayArea = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.equals');

let displayValue = '';

function updateDisplay() {
  displayArea.innerHTML = displayValue;
}

function appendNumber(number) {
  if (number === '.' && number === displayValue.slice(-1)) return;
  displayValue = displayValue.toString() + number.toString();
}

function appendOperation(operation) {
  if (displayValue === '') return;
  if (operation === displayValue.slice(-1)) return;
  displayValue = displayValue.toString() + operation.toString();
}

function deleteChar() {
  displayValue = displayValue.slice(0, -1);
}

function clearAll() {
  displayValue = '';
}

function calculate() {
  displayValue = eval(displayValue).toString();
}

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    appendNumber(button.innerHTML);
    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    appendOperation(button.innerHTML);
    updateDisplay();
  });
});

deleteButton.addEventListener('click', () => {
  deleteChar();
  updateDisplay();
});

clearButton.addEventListener('click', () => {
  clearAll();
  updateDisplay();
});

equalsButton.addEventListener('click', () => {
  calculate();
  updateDisplay();
});
