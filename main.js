const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const currentArea = document.querySelector('.current');
const previousArea = document.querySelector('.previous');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.equals');

let current = '';
let previous = '';

function updateDisplay() {
  currentArea.innerHTML = current;
  previousArea.innerHTML = previous;
}

function appendNumber(number) {
  if (number === '.' && current.contains('.')) return;
  current = current.toString() + number.toString();
}

function appendOperation(operation) {
  if (current === '') return;
  current = current.toString() + operation.toString();
  previous = current;
  current = '';
}

function deleteChar() {
  current = current.slice(0, -1);
  if (current === '') {
    current = previous;
    previous = '';
  }
}

function clearAll() {
  current = '';
  previous = '';
}

function calculate() {
  if (previous.slice(-1) === '+') {
    current = (parseFloat(current) + parseFloat(previous)).toString();
  }
  if (previous.slice(-1) === '-') {
    current = (parseFloat(previous) - parseFloat(current)).toString();
  }
  if (previous.slice(-1) === '*') {
    current = (parseFloat(current) * parseFloat(previous)).toString();
  }
  if (previous.slice(-1) === '÷') {
    current = (parseFloat(previous) / parseFloat(current)).toString();
  }
  previous = '';
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
