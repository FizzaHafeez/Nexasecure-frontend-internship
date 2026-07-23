/* ============================================
   Day 19: Form Validation
   Input validation, error messages, required fields
   ============================================ */

const form = document.getElementById("signupForm");
const successMsg = document.getElementById("successMsg");

// --- Field references ---
const fields = {
  username: document.getElementById("username"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  password: document.getElementById("password"),
  confirm: document.getElementById("confirm"),
  terms: document.getElementById("terms"),
};

// --- Validation rules (regex patterns) ---
const patterns = {
  username: /^[a-zA-Z0-9_]{3,15}$/,          // 3-15 chars, letters/numbers/underscore
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,    // basic email shape
  phone: /^[0-9]{10,13}$/,                   // 10-13 digits only
  password: /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/, // 8+ chars, 1 uppercase, 1 number
};

// --- Individual validators: return "" if valid, or an error message ---

function validateUsername() {
  const value = fields.username.value.trim();
  if (value === "") return "Username is required.";
  if (!patterns.username.test(value)) return "3-15 characters; letters, numbers, underscore only.";
  return "";
}

function validateEmail() {
  const value = fields.email.value.trim();
  if (value === "") return "Email is required.";
  if (!patterns.email.test(value)) return "Enter a valid email address.";
  return "";
}

function validatePhone() {
  const value = fields.phone.value.trim();
  if (value === "") return "Phone number is required.";
  if (!patterns.phone.test(value)) return "Phone must be 10-13 digits (numbers only).";
  return "";
}

function validatePassword() {
  const value = fields.password.value;
  if (value === "") return "Password is required.";
  if (!patterns.password.test(value)) return "Min 8 characters with at least 1 uppercase letter and 1 number.";
  return "";
}

function validateConfirm() {
  if (fields.confirm.value === "") return "Please confirm your password.";
  if (fields.confirm.value !== fields.password.value) return "Passwords do not match.";
  return "";
}

function validateTerms() {
  return fields.terms.checked ? "" : "You must accept the terms.";
}

// Map each field to its validator
const validators = {
  username: validateUsername,
  email: validateEmail,
  phone: validatePhone,
  password: validatePassword,
  confirm: validateConfirm,
  terms: validateTerms,
};

// --- Show or clear an error for one field ---

function showResult(fieldName) {
  const error = validators[fieldName]();
  const errorEl = document.getElementById(fieldName + "Error");
  const input = fields[fieldName];

  errorEl.textContent = error;

  // Checkbox has no valid/invalid border styling
  if (fieldName !== "terms") {
    input.classList.toggle("invalid", error !== "");
    input.classList.toggle("valid", error === "" && input.value !== "");
  }

  return error === "";
}

// --- Password strength meter (visual extra) ---

const strengthInner = document.querySelector("#strengthBar div");

fields.password.addEventListener("input", () => {
  const v = fields.password.value;
  let score = 0;
  if (v.length >= 8) score++;
  if (/[A-Z]/.test(v)) score++;
  if (/[0-9]/.test(v)) score++;
  if (/[^A-Za-z0-9]/.test(v)) score++;

  const levels = [
    ["0%", ""],
    ["25%", "#d6455b"],
    ["50%", "#f59f00"],
    ["75%", "#74b816"],
    ["100%", "#2b9e6b"],
  ];
  strengthInner.style.width = levels[score][0];
  strengthInner.style.background = levels[score][1];
});

// --- Live validation: check each field as the user leaves it ---

Object.keys(fields).forEach(name => {
  const eventType = name === "terms" ? "change" : "blur";
  fields[name].addEventListener(eventType, () => showResult(name));
});

// Re-check confirm whenever password changes
fields.password.addEventListener("input", () => {
  if (fields.confirm.value !== "") showResult("confirm");
});

// --- Submit: validate everything ---

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop the browser from submitting

  let allValid = true;
  Object.keys(validators).forEach(name => {
    if (!showResult(name)) allValid = false;
  });

  if (allValid) {
    successMsg.classList.remove("hidden");
    form.reset();
    strengthInner.style.width = "0";
    // Clear valid borders after reset
    document.querySelectorAll("input").forEach(i => i.classList.remove("valid", "invalid"));
    setTimeout(() => successMsg.classList.add("hidden"), 4000);
  } else {
    successMsg.classList.add("hidden");
    // Focus the first invalid field for accessibility
    const firstInvalid = document.querySelector("input.invalid");
    if (firstInvalid) firstInvalid.focus();
  }
});

console.log("Day 19 form validation loaded.");
