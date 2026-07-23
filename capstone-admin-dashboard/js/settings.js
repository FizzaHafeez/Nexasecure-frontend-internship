/* ============================================
   NexaAdmin — Settings page logic
   Profile validation + preferences in localStorage
   ============================================ */

const PREFS_KEY = "nexaadmin-prefs";

// --- Profile form validation ---

const profileForm = document.getElementById("profileForm");
const nameInput = document.getElementById("profileName");
const emailInput = document.getElementById("profileEmail");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const profileFeedback = document.getElementById("profileFeedback");

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";

  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (valid) {
    profileFeedback.textContent = "✓ Profile saved";
    setTimeout(() => (profileFeedback.textContent = ""), 2500);
  }
});

// --- Preference toggles saved to localStorage ---

const toggles = {
  prefEmail: document.getElementById("prefEmail"),
  prefWeekly: document.getElementById("prefWeekly"),
  prefCompact: document.getElementById("prefCompact"),
};

// Load saved preferences on page open
function loadPrefs() {
  const stored = localStorage.getItem(PREFS_KEY);
  if (!stored) return;
  try {
    const prefs = JSON.parse(stored);
    Object.keys(toggles).forEach(key => {
      if (key in prefs) toggles[key].checked = prefs[key];
    });
  } catch (e) {
    console.error("Could not load preferences", e);
  }
}

// Save all preferences whenever any toggle changes
function savePrefs() {
  const prefs = {};
  Object.keys(toggles).forEach(key => (prefs[key] = toggles[key].checked));
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  console.log("Preferences saved:", prefs);
}

Object.values(toggles).forEach(toggle =>
  toggle.addEventListener("change", savePrefs)
);

loadPrefs();
console.log("NexaAdmin settings page loaded.");
