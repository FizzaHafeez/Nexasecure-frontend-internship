/* ============================================
   NexaAdmin — Products page logic
   Render product grid + category filtering
   ============================================ */

const products = [
  { emoji: "🎧", name: "Wireless Headphones", category: "Audio", price: 79.99, stock: 34 },
  { emoji: "⌚", name: "Smart Fitness Watch", category: "Wearables", price: 59.0, stock: 12 },
  { emoji: "⌨️", name: "Mechanical RGB Keyboard", category: "Accessories", price: 89.5, stock: 0 },
  { emoji: "🔊", name: "Bluetooth Speaker", category: "Audio", price: 45.0, stock: 27 },
  { emoji: "🖱️", name: "Ergonomic Mouse", category: "Accessories", price: 25.49, stock: 6 },
  { emoji: "🔋", name: "20,000mAh Power Bank", category: "Power", price: 34.99, stock: 41 },
  { emoji: "🎤", name: "USB Podcast Microphone", category: "Audio", price: 65.0, stock: 3 },
  { emoji: "💡", name: "Smart LED Strip", category: "Power", price: 19.99, stock: 58 },
  { emoji: "📱", name: "Phone Stand Pro", category: "Accessories", price: 12.5, stock: 0 },
];

const grid = document.getElementById("productGrid");
const countEl = document.getElementById("productCount");
let activeCategory = "all";

// Decide the stock badge for a product
function stockBadge(stock) {
  if (stock === 0) return `<span class="badge outstock">Out of stock</span>`;
  if (stock <= 10) return `<span class="badge lowstock">Low: ${stock} left</span>`;
  return `<span class="badge instock">${stock} in stock</span>`;
}

function renderProducts() {
  grid.innerHTML = "";

  const visible = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory);

  visible.forEach(p => {
    const card = document.createElement("div");
    card.className = "p-card";
    card.innerHTML = `
      <div class="p-emoji">${p.emoji}</div>
      <h3>${p.name}</h3>
      <p class="p-cat">${p.category}</p>
      <div class="p-bottom">
        <span class="p-price">$${p.price.toFixed(2)}</span>
        ${stockBadge(p.stock)}
      </div>
    `;
    grid.appendChild(card);
  });

  countEl.textContent = visible.length;
}

// Category filter chips
document.getElementById("categoryFilters").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;

  document.querySelector(".chip.active").classList.remove("active");
  chip.classList.add("active");
  activeCategory = chip.dataset.cat;
  renderProducts();
});

renderProducts();
console.log("NexaAdmin products page loaded.");
