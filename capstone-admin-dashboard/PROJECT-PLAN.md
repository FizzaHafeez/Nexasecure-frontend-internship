# Capstone Project Plan — NexaAdmin Dashboard

**Intern:** Fizza Hafeez
**Project chosen:** Admin Dashboard
**Week 4 — NexaSecure Tech Frontend Internship**

## Project Overview
NexaAdmin is a multi-page admin dashboard for managing an online store: viewing sales statistics, managing users and products, and configuring settings. Built with vanilla HTML, CSS, and JavaScript — no frameworks.

## Pages & Features

| Page | Features |
|------|----------|
| Dashboard (index.html) | Sidebar navigation, 4 stat cards, weekly sales bar chart, recent orders table |
| Users (users.html) | Searchable/sortable user table, add user form, delete users, localStorage persistence |
| Products (products.html) | Product card grid, category filter, stock status badges |
| Settings (settings.html) | Profile form with validation, notification toggles, theme preference saved to localStorage |

## UI Layout Plan
```
+--------------------------------------------------+
| SIDEBAR      |  TOPBAR (page title, admin badge) |
|  Dashboard   |-----------------------------------|
|  Users       |  STAT CARDS (4 across)            |
|  Products    |-----------------------------------|
|  Settings    |  CHART        |  RECENT ORDERS    |
|              |               |                   |
+--------------------------------------------------+
```
- Sidebar collapses to a top bar on mobile
- Consistent dark sidebar + light content area
- Single shared stylesheet (css/styles.css)

## Technical Decisions
- **Layout:** CSS Grid for page shell, Flexbox for components
- **Chart:** custom-built CSS bar chart (no libraries)
- **Data:** JavaScript arrays; users persisted with localStorage
- **Responsive:** breakpoints at 900px and 600px
- **Validation:** reuses patterns from Day 19

## Day-by-Day Build Plan
- Day 22: This plan
- Day 23: Folder structure + skeleton files, initial commit
- Day 24: Dashboard + navigation across all pages
- Day 25: Interactivity — user CRUD, product filters, chart, settings toggles
- Day 26: Responsive design pass
- Day 27: Testing & bug fixes
- Day 28: README + documentation
- Day 29: Deploy + LinkedIn post
- Day 30: Final report + presentation video
