# NexaAdmin — Admin Dashboard (Capstone Project)

Final capstone for the **NexaSecure Tech Frontend Development Internship** (Week 4).

## 🌐 Live Demo
https://fizza-nexasecure.netlify.app/capstone-admin-dashboard/

## 📸 Screenshots
See screenshot-desktop.png and screenshot-mobile-dashboard.png in this folder.

## Overview
NexaAdmin is a 4-page store administration dashboard built entirely with vanilla HTML, CSS, and JavaScript — no frameworks or chart libraries.

## Pages & Features

### 📊 Dashboard (`index.html`)
- Animated stat counters (revenue, orders, users, refunds)
- Custom-built animated bar chart (pure CSS/JS — no library)
- Recent orders table with status badges

### 👥 Users (`users.html`)
- Add users with validation (name length, email format, duplicate check)
- Delete users with confirmation
- Live search by name or email
- Click column headers to sort (toggles asc/desc)
- All changes persisted with localStorage

### 📦 Products (`products.html`)
- Product inventory grid
- Category filter chips (All / Audio / Wearables / Accessories / Power)
- Smart stock badges (in stock / low stock / out of stock)

### ⚙️ Settings (`settings.html`)
- Profile form with validation and error messages
- Notification preference toggle switches
- Preferences auto-saved to localStorage

## Tech Stack
- **HTML5** — semantic multi-page structure
- **CSS3** — Grid shell layout, Flexbox components, custom properties, transitions
- **JavaScript (ES6)** — DOM manipulation, event delegation, array methods, localStorage

## Responsive Design
- Desktop: fixed sidebar + content grid
- Tablet (≤900px): sidebar converts to a top navigation bar
- Mobile (≤600px): single-column stat cards, compact tables

## How to Run
1. Clone the repository
2. Open `capstone-admin-dashboard/index.html` in a browser — no build step

## Project Structure
```
capstone-admin-dashboard/
├── index.html          # Dashboard
├── users.html          # User management
├── products.html       # Product inventory
├── settings.html       # Settings & preferences
├── css/styles.css      # Shared stylesheet
├── js/
│   ├── dashboard.js
│   ├── users.js
│   ├── products.js
│   └── settings.js
└── PROJECT-PLAN.md     # Day 22 planning document
```

## Author
**Fizza Hafeez** — Frontend Development Intern @ NexaSecure Tech
GitHub: https://github.com/FizzaHafeez
