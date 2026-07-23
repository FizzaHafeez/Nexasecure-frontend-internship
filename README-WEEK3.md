# NexaSecure Tech Frontend Internship — Week 3

APIs & UI Enhancement (Days 15–21)

## Folder Structure
```
day15-16-weather-app/    # Live weather via fetch() + Open-Meteo API (no key needed)
day17-18-product-page/   # TechMart e-commerce grid with hover effects
day19-form-validation/   # Signup form with full JS validation + strength meter
```
Days 20–21 are enhancement/deployment days — no new folders (checklists below).

## Daily Commit Commands

```powershell
# Day 15 — weather app fetch logic
git add day15-16-weather-app/index.html day15-16-weather-app/script.js README-WEEK3.md
git commit -m "Day 15: Weather app - fetch API data and display"
git push

# Day 16 — styling + responsive + screenshots
git add day15-16-weather-app/
git commit -m "Day 16: Weather app styling, responsive layout, screenshots"
git push

# Day 17 — product page structure
git add day17-18-product-page/index.html
git commit -m "Day 17: E-commerce product page structure, images, descriptions"
git push

# Day 18 — grid + hover effects + screenshots
git add day17-18-product-page/
git commit -m "Day 18: Responsive grid layout and hover effects, screenshots"
git push

# Day 19 — form validation
git add day19-form-validation/
git commit -m "Day 19: Form validation - rules, error messages, required fields"
git push

# Day 20 — UI polish across projects (see checklist)
git add .
git commit -m "Day 20: UI/UX refinements across projects"
git push

# Day 21 — live links in README
git add README.md
git commit -m "Day 21: Add live deployment links"
git push
```

## Screenshot Checklist
| Day | Screenshot |
|-----|-----------|
| 16 | Weather app showing a city's weather + the "city not found" error state |
| 18 | Product page desktop grid + mobile view + a card mid-hover |
| 19 | Form with error messages showing + the success message |
| 20 | Before/after of anything you polished |

## Day 20 — UI/UX Enhancement Checklist
Pick 3–5 small improvements across your existing projects, e.g.:
- [ ] Consistent font sizes/spacing across Week 1–2 projects
- [ ] Add favicon to portfolio (`<link rel="icon" ...>`)
- [ ] Improve portfolio mobile nav spacing
- [ ] Add hover states to any buttons missing them
- [ ] Check color contrast (text readable on all backgrounds)
Commit whatever you touch — the deliverable is just "updated projects committed + screenshots."

## Day 21 — Deployment Guide (Netlify, free)

1. Go to **app.netlify.com** → sign up with your GitHub account
2. Click **Add new site → Import an existing project → GitHub**
3. Authorize Netlify → pick `Nexasecure-frontend-internship`
4. Leave build settings EMPTY (no build command, publish directory = `/`) → **Deploy**
5. You get a URL like `https://random-name-12345.netlify.app`
   - Rename it: Site settings → Change site name → e.g. `fizza-nexasecure`
6. Each project is then live at:
   - `https://YOUR-SITE.netlify.app/day05-landing-page/`
   - `https://YOUR-SITE.netlify.app/day06-07-portfolio/`
   - `https://YOUR-SITE.netlify.app/day11-12-calculator/`
   - `https://YOUR-SITE.netlify.app/day13-14-todo-app/`
   - `https://YOUR-SITE.netlify.app/day15-16-weather-app/`
   - `https://YOUR-SITE.netlify.app/day17-18-product-page/`
   - `https://YOUR-SITE.netlify.app/day19-form-validation/`
7. Add these live links to the repo's main README under a "Live Demos" section
8. Bonus: update the portfolio's project cards to point at live links

Netlify auto-redeploys on every future git push — Week 4's capstone will go live automatically.

## Day 21 LinkedIn Post (draft)

> Week 3 of my Frontend Internship at @NexaSecure Tech — done! ✅
>
> This week I moved from static pages to live data:
> 🔹 Built a weather app fetching real-time data from a public API
> 🔹 Created a responsive e-commerce product page with CSS Grid & hover effects
> 🔹 Implemented complete form validation with live error messages & a password strength meter
> 🔹 Deployed all my projects live on Netlify 🌐
>
> Live demos + code: https://github.com/FizzaHafeez/Nexasecure-frontend-internship
>
> Final week ahead: the capstone project. 🚀
>
> #FrontendDevelopment #JavaScript #API #WebDevelopment #Internship
