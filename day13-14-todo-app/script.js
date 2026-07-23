/* ============================================
   Days 13-14: To-Do App
   Day 13: add/remove tasks, task list
   Day 14: localStorage persistence + UI polish
   ============================================ */

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompleted");
const dateDisplay = document.getElementById("dateDisplay");

const STORAGE_KEY = "nexasecure-todos";

// State: array of { id, text, completed }
let tasks = [];
let currentFilter = "all";

// ============ DAY 14: LOCAL STORAGE ============

function saveTasks() {
  // Convert the array to a JSON string and store it in the browser
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
  // Read the stored string back and parse it into an array
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      tasks = JSON.parse(stored);
    } catch (e) {
      // Error handling: corrupted storage data
      console.error("Could not parse saved tasks, starting fresh.", e);
      tasks = [];
    }
  }
}

// ============ DAY 13: ADD / REMOVE TASKS ============

function addTask() {
  const text = taskInput.value.trim();

  // Validation: ignore empty input
  if (text === "") {
    taskInput.focus();
    return;
  }

  tasks.push({
    id: Date.now(),        // unique id based on timestamp
    text: text,
    completed: false,
  });

  taskInput.value = "";
  taskInput.focus();
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  // Keep every task EXCEPT the one with this id
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter(task => !task.completed);
  saveTasks();
  renderTasks();
}

// ============ RENDERING ============

function renderTasks() {
  taskList.innerHTML = "";

  // Apply the current filter (Day 14 feature)
  const visible = tasks.filter(task => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  // Empty state handling
  emptyState.style.display = visible.length === 0 ? "block" : "none";
  if (visible.length === 0 && tasks.length > 0) {
    emptyState.textContent = `No ${currentFilter} tasks.`;
  } else {
    emptyState.textContent = "No tasks yet — add your first one above.";
  }

  // Build each task item
  visible.forEach(task => {
    const li = document.createElement("li");
    li.className = "task" + (task.completed ? " completed" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "✕";
    delBtn.title = "Delete task";
    delBtn.addEventListener("click", () => deleteTask(task.id));

    li.append(checkbox, span, delBtn);
    taskList.appendChild(li);
  });

  // Update the counter
  const remaining = tasks.filter(t => !t.completed).length;
  taskCount.textContent = `${remaining} task${remaining !== 1 ? "s" : ""} remaining`;
}

// ============ EVENT LISTENERS ============

addBtn.addEventListener("click", addTask);

// Enter key also adds the task
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

clearCompletedBtn.addEventListener("click", clearCompleted);

// Filter buttons
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// ============ INIT ============

// Show today's date in the header
dateDisplay.textContent = new Date().toLocaleDateString("en-US", {
  weekday: "long", year: "numeric", month: "long", day: "numeric"
});

loadTasks();   // restore saved tasks from localStorage
renderTasks();

console.log("To-Do app loaded — Days 13-14 deliverable.");
