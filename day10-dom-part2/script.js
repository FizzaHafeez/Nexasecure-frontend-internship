/* ============================================
   Day 10: DOM Manipulation - Part 2
   Events, user interactions, dynamic updates
   ============================================ */

// --- 1. Click events: counter ---

let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  updateCounter();
});

document.getElementById("decrementBtn").addEventListener("click", () => {
  counter--;
  updateCounter();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = counter;
  // Dynamic style based on state
  if (counter > 0) counterValue.style.color = "#1a6b5a";
  else if (counter < 0) counterValue.style.color = "#a04545";
  else counterValue.style.color = "#22303f";
}

// --- 2. Input event: live mirror ---

const textInput = document.getElementById("textInput");
const mirror = document.getElementById("mirror");

// "input" fires on EVERY keystroke (unlike "change" which fires on blur)
textInput.addEventListener("input", (event) => {
  const value = event.target.value;
  mirror.textContent = value
    ? `You typed: "${value}" (${value.length} characters)`
    : "";
});

// --- 3. Mouse events: hover zone ---

const hoverZone = document.getElementById("hoverZone");

hoverZone.addEventListener("mouseenter", () => {
  hoverZone.style.backgroundColor = "#1a6b5a";
  hoverZone.style.color = "#fff";
  hoverZone.textContent = "mouseenter fired!";
});

hoverZone.addEventListener("mouseleave", () => {
  hoverZone.style.backgroundColor = "#cbd6e8";
  hoverZone.style.color = "#22303f";
  hoverZone.textContent = "mouseleave fired — hover again";
});

hoverZone.addEventListener("dblclick", () => {
  hoverZone.textContent = "Double click detected!";
});

// --- 4. Keyboard events (on the whole document) ---

const keyDisplay = document.getElementById("keyDisplay");

document.addEventListener("keydown", (event) => {
  // Ignore keystrokes while typing in the text input
  if (event.target === textInput) return;
  keyDisplay.textContent = `Key: "${event.key}"  |  Code: ${event.code}`;
  console.log("keydown:", event.key);
});

// --- 5. Range slider: dynamic font size ---

const sizeSlider = document.getElementById("sizeSlider");
const sizedText = document.getElementById("sizedText");

sizeSlider.addEventListener("input", () => {
  sizedText.style.fontSize = sizeSlider.value + "px";
});

console.log("Day 10 script loaded — all event listeners attached.");
