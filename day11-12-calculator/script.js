/* ============================================
   Days 11-12: Calculator App
   Day 11: basic UI + operations
   Day 12: advanced operations + error handling
   ============================================ */

const display = document.getElementById("display");
const history = document.getElementById("history");

// Calculator state
let currentInput = "0";     // number being typed
let previousInput = null;   // stored first operand
let operator = null;        // pending operation
let justCalculated = false; // true right after pressing =

// ============ DAY 11: BASIC OPERATIONS ============

function inputDigit(digit) {
  // Start fresh after a completed calculation
  if (justCalculated) {
    currentInput = "0";
    justCalculated = false;
  }

  if (digit === ".") {
    // Error handling: prevent multiple decimal points
    if (currentInput.includes(".")) return;
    currentInput += ".";
  } else {
    // Replace leading zero instead of appending to it
    currentInput = currentInput === "0" ? digit : currentInput + digit;
  }
  updateDisplay();
}

function setOperator(op) {
  // Chain calculations: 2 + 3 + -> shows 5 before next entry
  if (operator !== null && !justCalculated) {
    calculate();
  }
  previousInput = currentInput;
  operator = op;
  currentInput = "0";
  justCalculated = false;
  history.textContent = `${previousInput} ${symbolFor(op)}`;
}

function calculate() {
  if (operator === null || previousInput === null) return;

  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/":
      // DAY 12 error handling: division by zero
      if (b === 0) {
        showError("Cannot divide by zero");
        return;
      }
      result = a / b;
      break;
  }

  history.textContent = `${previousInput} ${symbolFor(operator)} ${currentInput} =`;
  currentInput = formatResult(result);
  previousInput = null;
  operator = null;
  justCalculated = true;
  updateDisplay();
}

// ============ DAY 12: ADVANCED OPERATIONS ============

function percent() {
  currentInput = formatResult(parseFloat(currentInput) / 100);
  updateDisplay();
}

function squareRoot() {
  const value = parseFloat(currentInput);
  // Error handling: no real square root of negatives
  if (value < 0) {
    showError("Invalid input for √");
    return;
  }
  history.textContent = `√(${currentInput}) =`;
  currentInput = formatResult(Math.sqrt(value));
  justCalculated = true;
  updateDisplay();
}

function deleteLast() {
  if (justCalculated) return; // don't edit a finished result
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
  updateDisplay();
}

function clearAll() {
  currentInput = "0";
  previousInput = null;
  operator = null;
  justCalculated = false;
  history.textContent = "";
  display.classList.remove("error");
  updateDisplay();
}

// ============ HELPERS & ERROR HANDLING ============

function formatResult(num) {
  // Error handling: overflow / invalid math
  if (!isFinite(num) || isNaN(num)) return "Error";
  // Round long floats (fixes 0.1 + 0.2 = 0.30000000000000004)
  return String(Math.round(num * 1e10) / 1e10);
}

function showError(message) {
  display.classList.add("error");
  display.textContent = message;
  history.textContent = "";
  // Reset state so user can continue after the error
  currentInput = "0";
  previousInput = null;
  operator = null;
  setTimeout(() => {
    display.classList.remove("error");
    updateDisplay();
  }, 1800);
}

function symbolFor(op) {
  return { "+": "+", "-": "−", "*": "×", "/": "÷" }[op];
}

function updateDisplay() {
  display.textContent = currentInput;
}

// ============ EVENT LISTENERS ============

// Button clicks (event delegation on the keypad)
document.querySelector(".keys").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  if (btn.dataset.num !== undefined) inputDigit(btn.dataset.num);
  else if (btn.dataset.op !== undefined) setOperator(btn.dataset.op);
  else if (btn.dataset.action === "equals") calculate();
  else if (btn.dataset.action === "clear") clearAll();
  else if (btn.dataset.action === "delete") deleteLast();
  else if (btn.dataset.action === "percent") percent();
  else if (btn.dataset.action === "sqrt") squareRoot();
});

// Keyboard support (Day 12 enhancement)
document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") inputDigit(e.key);
  else if (e.key === ".") inputDigit(".");
  else if (["+", "-", "*", "/"].includes(e.key)) setOperator(e.key);
  else if (e.key === "Enter" || e.key === "=") { e.preventDefault(); calculate(); }
  else if (e.key === "Backspace") deleteLast();
  else if (e.key === "Escape") clearAll();
  else if (e.key === "%") percent();
});

console.log("Calculator loaded — Days 11-12 deliverable.");
