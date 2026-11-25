# Student Skill Gap Analyzer

A clean, responsive static web application built for the **CSE326 Internet Programming Project**. It helps students evaluate their current technical skills against entry-level industry expectations and identify what to learn next.

## Overview

Students select a target career track (**Frontend Developer**, **Backend Developer**, or **Data Analyst**), tick the skills they already know, and immediately receive:
- **Readiness Score (%)** with a visual CSS progress bar
- **Skills You Have** (matched core skills)
- **Skills You Need to Learn** (missing core skills)
- **Personalized Feedback** based on current readiness
- **Curated Free Study Resources** (MDN Web Docs, freeCodeCamp, and W3Schools)

## Tech Stack

Built without external frameworks or libraries for clarity and maintainability:
- **HTML5** — Semantic structure (`<header>`, `<nav>`, `<main>`, `<form>`, `<fieldset>`, `<table>`, `<footer>`) and built-in form validation
- **CSS3** — Custom properties (`:root` variables), Flexbox, CSS Grid, container queries, and responsive media queries
- **Vanilla JavaScript** — Beginner-friendly DOM manipulation using plain objects, arrays, `for` loops, and `if/else` logic

## Project Structure

```text
CSE-326/
├── index.html   # Page markup, analyzer form, and career roles reference table
├── style.css    # Styling, layout grids, progress bar, and responsive breakpoints
├── script.js    # Skill comparison, score calculation, and result rendering
└── README.md    # Project documentation
```

## How It Works

Each career role defines 5 core required skills. When the student clicks **Analyze Gap**, `script.js` compares their selected checkboxes against the chosen role's skill list and computes:

```text
Readiness Score = (Matched Skills / Total Required Skills) × 100
```

## Running Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/kumarsachin1240421-code/CSE-326.git
   cd CSE-326
   ```
2. Open `index.html` directly in any modern web browser, or run a local static server (such as VS Code Live Server or `npx http-server -p 5500`).
