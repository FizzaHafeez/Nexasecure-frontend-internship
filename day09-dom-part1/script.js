/* ============================================
   Day 9: DOM Manipulation - Part 1
   Selecting elements, changing content & style
   ============================================ */

// --- 1. Changing content ---

function changeText() {
  // getElementById: select one element by its id
  const msg = document.getElementById("message");
  msg.textContent = "The text was changed with JavaScript! (textContent)";
}

function changeHTML() {
  const msg = document.getElementById("message");
  // innerHTML can insert actual HTML tags
  msg.innerHTML = "This uses <strong>innerHTML</strong> to insert <em>formatted</em> content.";
}

// --- 2. Changing styles ---

function changeColor() {
  const box = document.getElementById("colorBox");
  // Generate a random hex color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  box.style.backgroundColor = randomColor;
  console.log("Box color changed to:", randomColor);
}

function growBox() {
  const box = document.getElementById("colorBox");
  box.style.width = "200px";
  box.style.height = "200px";
  box.style.borderRadius = "50%"; // becomes a circle
}

function resetBox() {
  const box = document.getElementById("colorBox");
  // Clearing inline styles restores the CSS file's values
  box.style.backgroundColor = "";
  box.style.width = "";
  box.style.height = "";
  box.style.borderRadius = "";
}

// --- 3. Selecting multiple elements ---

function highlightAll() {
  // querySelectorAll returns a NodeList of ALL matching elements
  const items = document.querySelectorAll("#skillList li");
  items.forEach((item, index) => {
    item.style.backgroundColor = "#ffe9a8";
    item.style.padding = "6px 10px";
    item.style.borderRadius = "4px";
    item.style.marginBottom = "4px";
    console.log(`Highlighted item ${index + 1}:`, item.textContent);
  });
}

// --- 4. Creating and appending new elements ---

let paragraphCount = 0;

function addParagraph() {
  paragraphCount++;
  // createElement builds a node in memory
  const p = document.createElement("p");
  p.textContent = `Paragraph #${paragraphCount} created with document.createElement()`;
  p.style.color = "#1a6b5a";
  // appendChild attaches it to the page
  document.getElementById("container").appendChild(p);
}

console.log("Day 9 script loaded — DOM ready for manipulation.");
