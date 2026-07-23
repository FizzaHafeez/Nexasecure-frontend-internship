/* ============================================
   NexaAdmin — Users page logic
   Add/delete users, live search, column sorting,
   localStorage persistence
   ============================================ */

const STORAGE_KEY = "nexaadmin-users";

// Default seed data (used on first visit)
const DEFAULT_USERS = [
  { id: 1, name: "Ayesha Khan", email: "ayesha@example.com", role: "Admin", joined: "2026-03-12" },
  { id: 2, name: "Bilal Ahmed", email: "bilal@example.com", role: "Customer", joined: "2026-04-02" },
  { id: 3, name: "Sara Malik", email: "sara@example.com", role: "Editor", joined: "2026-04-18" },
  { id: 4, name: "Hamza Raza", email: "hamza@example.com", role: "Customer", joined: "2026-05-06" },
  { id: 5, name: "Zainab Ali", email: "zainab@example.com", role: "Customer", joined: "2026-06-21" },
];

let users = [];
let searchTerm = "";
let sortKey = null;
let sortAsc = true;

// --- Persistence ---

function loadUsers() {
  const stored = localStorage.getItem(STORAGE_KEY);
  try {
    users = stored ? JSON.parse(stored) : [...DEFAULT_USERS];
  } catch {
    users = [...DEFAULT_USERS];
  }
}

function saveUsers() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

// --- Rendering ---

const usersBody = document.getElementById("usersBody");
const noUsers = document.getElementById("noUsers");
const userTotal = document.getElementById("userTotal");

function renderUsers() {
  usersBody.innerHTML = "";

  // 1. Filter by search term (name OR email)
  let visible = users.filter(u =>
    u.name.toLowerCase().includes(searchTerm) ||
    u.email.toLowerCase().includes(searchTerm)
  );

  // 2. Sort if a column is active
  if (sortKey) {
    visible.sort((a, b) => {
      const result = a[sortKey].localeCompare(b[sortKey]);
      return sortAsc ? result : -result;
    });
  }

  // 3. Build rows
  visible.forEach(user => {
    const tr = document.createElement("tr");

    const initials = user.name.split(" ").map(w => w[0]).join("").toUpperCase();
    tr.innerHTML = `
      <td><strong>${user.name}</strong></td>
      <td>${user.email}</td>
      <td><span class="role-pill">${user.role}</span></td>
      <td>${user.joined}</td>
    `;

    // Delete button (created via DOM so we can attach a listener safely)
    const td = document.createElement("td");
    const delBtn = document.createElement("button");
    delBtn.className = "btn-delete";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteUser(user.id, user.name));
    td.appendChild(delBtn);
    tr.appendChild(td);

    usersBody.appendChild(tr);
  });

  userTotal.textContent = users.length;
  noUsers.classList.toggle("hidden", visible.length > 0);
}

// --- CRUD ---

const feedback = document.getElementById("userFeedback");

function addUser(name, email, role) {
  // Validation
  if (name.trim().length < 3) return showFeedback("Name must be at least 3 characters.", true);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return showFeedback("Enter a valid email.", true);
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase()))
    return showFeedback("A user with that email already exists.", true);

  users.push({
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    role,
    joined: new Date().toISOString().slice(0, 10),
  });

  saveUsers();
  renderUsers();
  showFeedback(`User "${name.trim()}" added successfully.`);
  return true;
}

function deleteUser(id, name) {
  if (!confirm(`Delete user "${name}"?`)) return;
  users = users.filter(u => u.id !== id);
  saveUsers();
  renderUsers();
  showFeedback(`User "${name}" deleted.`);
}

function showFeedback(message, isError = false) {
  feedback.textContent = message;
  feedback.classList.toggle("error", isError);
  setTimeout(() => (feedback.textContent = ""), 3000);
}

// --- Event listeners ---

document.getElementById("addUserForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("newName").value;
  const email = document.getElementById("newEmail").value;
  const role = document.getElementById("newRole").value;

  if (addUser(name, email, role) === true) e.target.reset();
});

document.getElementById("userSearch").addEventListener("input", (e) => {
  searchTerm = e.target.value.toLowerCase().trim();
  renderUsers();
});

// Column sorting: click a sortable header
document.querySelectorAll("th.sortable").forEach(th => {
  th.addEventListener("click", () => {
    const key = th.dataset.sort;
    if (sortKey === key) {
      sortAsc = !sortAsc;      // same column -> flip direction
    } else {
      sortKey = key;           // new column -> sort ascending
      sortAsc = true;
    }
    renderUsers();
  });
});

// --- Init ---
loadUsers();
renderUsers();
console.log("NexaAdmin users page loaded.");
