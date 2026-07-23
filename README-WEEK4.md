# NexaSecure Tech Frontend Internship — Week 4

Final Capstone Project: NexaAdmin Dashboard (Days 22–30)

## Daily Commit Plan

```powershell
# Day 22 — project plan
git add capstone-admin-dashboard/PROJECT-PLAN.md README-WEEK4.md
git commit -m "Day 22: Capstone project plan - NexaAdmin dashboard"
git push
# Deliverable: screenshot of PROJECT-PLAN.md open on screen

# Day 23 — structure + skeleton
git add capstone-admin-dashboard/index.html capstone-admin-dashboard/css/
git commit -m "Day 23: Capstone folder structure and initial files"
git push
# Deliverable: screenshot of the folder structure in VS Code / File Explorer

# Day 24 — main pages + navigation
git add capstone-admin-dashboard/users.html capstone-admin-dashboard/products.html capstone-admin-dashboard/settings.html
git commit -m "Day 24: All pages and sidebar navigation implemented"
git push
# Deliverable: progress screenshots of the pages

# Day 25 — interactive components
git add capstone-admin-dashboard/js/
git commit -m "Day 25: Interactive features - chart, user CRUD, filters, settings"
git push

# Day 26 — responsive (already in styles.css; verify + screenshot)
# Test at 900px and 600px widths, take mobile screenshots, put them in the capstone folder
git add capstone-admin-dashboard/
git commit -m "Day 26: Responsive design verified with device screenshots"
git push

# Day 27 — testing & bug fixes (checklist below)
git add capstone-admin-dashboard/
git commit -m "Day 27: Testing pass - all features verified, screenshots added"
git push

# Day 28 — README
git add capstone-admin-dashboard/README.md
git commit -m "Day 28: Capstone documentation and README"
git push

# Day 29 — deployment + LinkedIn (auto-deploys via Netlify on push)
git add .
git commit -m "Day 29: Final deployment updates"
git push
# Then post the LinkedIn update below

# Day 30 — final submission (report + video, see below)
```

## Day 27 — Testing Checklist
Go through each item, screenshot results:
- [ ] Dashboard: stat counters animate, bars grow, hover shows values
- [ ] Dashboard: all 6 orders render with correct badge colors
- [ ] Users: add a valid user → appears in table and survives refresh
- [ ] Users: try invalid email → error message shows
- [ ] Users: try duplicate email → blocked
- [ ] Users: search filters live; sorting toggles on Name/Email clicks
- [ ] Users: delete asks for confirmation, removes the row
- [ ] Products: each category chip filters correctly; count updates
- [ ] Settings: empty name/bad email → errors; valid → "Profile saved"
- [ ] Settings: toggle switches, refresh page → toggles remembered
- [ ] All 4 pages: navigation highlights the active page
- [ ] Responsive: sidebar becomes top bar below 900px; no horizontal scroll at 375px

## Day 29 — LinkedIn Post (draft)

> 30 days. 4 weeks. 10+ projects. My Frontend Development Internship at @NexaSecure Tech is complete! 🎓
>
> For the final capstone I built NexaAdmin — a full admin dashboard with:
> 📊 Animated stats & a custom-built chart (no libraries)
> 👥 User management with search, sorting & localStorage persistence
> 📦 Product inventory with category filtering
> ⚙️ Settings with validation & saved preferences
> 📱 Fully responsive, vanilla HTML/CSS/JS
>
> Try it live: https://fizza-nexasecure.netlify.app/capstone-admin-dashboard/
> All 30 days of code: https://github.com/FizzaHafeez/Nexasecure-frontend-internship
>
> Grateful for this structured journey from HTML basics to a deployed multi-page application. On to the next challenge! 🚀
>
> #FrontendDevelopment #JavaScript #WebDevelopment #Internship #CapstoneProject

## Day 30 — Final Submission Requirements

1. **Final presentation video (8–12 min)** — walk through: intro → one project per week (portfolio, to-do app, weather app) → full capstone tour → challenges & what you learned → outro
2. **Final internship PDF report** containing:
   - Cover page: Name, Field (Frontend Development), Duration (30 days), Tracking ID
   - Introduction
   - Weekly summaries (Weeks 1–4)
   - Skills learned
   - Project descriptions with GitHub + live links
   - Challenges & solutions
   - Conclusion
3. All GitHub links + screenshots included

**Ask Claude to generate the final PDF report — provide your Tracking ID and internship dates and it will be compiled from everything built across the 30 days.**
