/* ============================================
   Day 8: JavaScript Basics
   Variables, Functions, Loops, Conditions
   Open the browser console (F12) to see output
   ============================================ */

console.log("=== 1. VARIABLES ===");

// let  -> value can change
// const -> value cannot be reassigned
// var  -> old style, avoid in modern code
let internName = "Fizza Hafeez";
const company = "NexaSecure Tech";
let currentDay = 8;

console.log("Intern:", internName);
console.log("Company:", company);
console.log("Day:", currentDay);

// Data types
let age = 22;                  // number
let isEnrolled = true;         // boolean
let skills = ["HTML", "CSS"];  // array
let profile = {                // object
  name: internName,
  track: "Frontend",
};
console.log("Data types:", typeof age, typeof isEnrolled, typeof skills, typeof profile);

// Template literals (modern string formatting)
console.log(`${internName} is on day ${currentDay} of the ${company} internship.`);


console.log("=== 2. FUNCTIONS ===");

// Function declaration
function greet(name) {
  return `Hello, ${name}! Welcome to Week 2.`;
}
console.log(greet(internName));

// Arrow function
const add = (a, b) => a + b;
console.log("add(5, 3) =", add(5, 3));

// Function with default parameter
function progress(day, totalDays = 30) {
  const percent = Math.round((day / totalDays) * 100);
  return `Day ${day}/${totalDays} — ${percent}% complete`;
}
console.log(progress(currentDay));


console.log("=== 3. CONDITIONS ===");

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: Needs improvement");
}

// Ternary operator (short if/else)
const status = score >= 50 ? "PASS" : "FAIL";
console.log("Status:", status);

// Switch statement
const week = 2;
switch (week) {
  case 1:
    console.log("Focus: HTML & CSS");
    break;
  case 2:
    console.log("Focus: JavaScript & DOM");
    break;
  case 3:
    console.log("Focus: APIs & UI");
    break;
  default:
    console.log("Focus: Capstone Project");
}


console.log("=== 4. LOOPS ===");

// for loop
console.log("Counting with a for loop:");
for (let i = 1; i <= 5; i++) {
  console.log("  i =", i);
}

// while loop
console.log("Countdown with a while loop:");
let count = 3;
while (count > 0) {
  console.log("  " + count);
  count--;
}

// Looping over an array
const weekTopics = ["JS Basics", "DOM Part 1", "DOM Part 2", "Calculator", "To-Do App"];
console.log("Week 2 topics (for...of):");
for (const topic of weekTopics) {
  console.log("  -", topic);
}

// Array methods (modern alternative to loops)
const doubled = [1, 2, 3, 4].map(n => n * 2);
console.log("map doubled:", doubled);

const evens = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0);
console.log("filter evens:", evens);


console.log("=== 5. DEBUGGING PRACTICE ===");

// console methods beyond .log
console.warn("This is a warning message");
console.error("This is an error message (not a real error)");
console.table(weekTopics);

// Using typeof to debug unexpected values
let mystery = "42";
console.log("mystery + 1 =", mystery + 1, "<- string concatenation bug!");
console.log("Number(mystery) + 1 =", Number(mystery) + 1, "<- fixed with conversion");

console.log("=== Day 8 complete ===");
