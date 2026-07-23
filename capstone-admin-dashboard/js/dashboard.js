/* ============================================
   NexaAdmin — Dashboard page logic
   Stat counters, CSS bar chart, orders table
   ============================================ */

// --- Sample data ---
const weeklySales = [
  { day: "Mon", value: 420 },
  { day: "Tue", value: 380 },
  { day: "Wed", value: 610 },
  { day: "Thu", value: 540 },
  { day: "Fri", value: 730 },
  { day: "Sat", value: 890 },
  { day: "Sun", value: 650 },
];

const recentOrders = [
  { id: "#1042", customer: "Ayesha Khan", amount: "$129.99", status: "delivered" },
  { id: "#1041", customer: "Bilal Ahmed", amount: "$59.00", status: "pending" },
  { id: "#1040", customer: "Sara Malik", amount: "$249.50", status: "delivered" },
  { id: "#1039", customer: "Hamza Raza", amount: "$34.99", status: "cancelled" },
  { id: "#1038", customer: "Zainab Ali", amount: "$89.50", status: "delivered" },
  { id: "#1037", customer: "Usman Tariq", amount: "$45.00", status: "pending" },
];

// --- Animated stat counters ---

function animateValue(el, target, prefix = "", duration = 900) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = prefix + Math.round(target * eased).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const totalRevenue = weeklySales.reduce((sum, d) => sum + d.value, 0) * 4; // monthly estimate
animateValue(document.getElementById("statRevenue"), totalRevenue, "$");
animateValue(document.getElementById("statOrders"), 348);
animateValue(document.getElementById("statUsers"), 1276);
animateValue(document.getElementById("statRefunds"), 9);

// --- Build the bar chart from data ---

const chart = document.getElementById("salesChart");
const maxValue = Math.max(...weeklySales.map(d => d.value));

weeklySales.forEach(({ day, value }) => {
  const col = document.createElement("div");
  col.className = "bar-col";

  const bar = document.createElement("div");
  bar.className = "bar";
  bar.style.height = "0"; // start collapsed, animate up

  const valueLabel = document.createElement("span");
  valueLabel.className = "bar-value";
  valueLabel.textContent = "$" + value;
  bar.appendChild(valueLabel);

  const dayLabel = document.createElement("span");
  dayLabel.className = "bar-label";
  dayLabel.textContent = day;

  col.append(bar, dayLabel);
  chart.appendChild(col);

  // Animate after insertion so the CSS transition fires
  requestAnimationFrame(() => {
    setTimeout(() => {
      bar.style.height = (value / maxValue) * 85 + "%";
    }, 60);
  });
});

// --- Render recent orders table ---

const ordersBody = document.getElementById("ordersBody");

recentOrders.forEach(order => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><strong>${order.id}</strong></td>
    <td>${order.customer}</td>
    <td>${order.amount}</td>
    <td><span class="badge ${order.status}">${order.status}</span></td>
  `;
  ordersBody.appendChild(tr);
});

console.log("NexaAdmin dashboard loaded.");
