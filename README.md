# SciWISE Website 🌟

Welcome to the repository for SciWISE — an undergraduate‑run journal blending science and art, designed to showcase creative and academic works.

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Available Scripts](#available-scripts)  
- [Folder Structure](#folder-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## About

SciWISE is a student‑led journal hosted at McMaster University that celebrates the intersection of science and artistic expression. The website provides an accessible platform for a diverse range of content — including poems, short stories, comics, research abstracts, interview pieces, visual art, and more.  

Through thoughtful design and storytelling, we aim to humanize science and foster a community where creativity and scientific rigor meet.

---

## Features

- Clean, responsive layout to display journal content elegantly  
- “Latest Issue” section with interactive, animated cards and hover effects  
- Dedicated “About Us” and “Meet the Team” pages to highlight contributors  
- Easy navigation and readability for students, contributors, and general readers  
- Welcome message, journal blurb, and submission/issue previews  

---

## Tech Stack

- **React** — UI library  
- **Framer Motion** — Animations (hover, scroll-based, fade-in)  
- **CSS / Inline Styles** — Layout, cards, and styling  
- Assets: images, issue covers, background images  

---

## Getting Started

Clone the repository and run locally:

```bash
# 1. Clone the repository
git clone https://github.com/chazae14/SciWise_Website.git

# 2. Change into project directory
cd SciWise_Website

# 3. Install dependencies
npm install    # or `yarn install`

# 4. Start the development server
npm start      # opens at http://localhost:3000


Available Scripts

npm start — Runs the app in development mode

npm run build — Creates a production build of the website

Folder Structure
SciWise_Website/
├── src/
│   ├── components/       # React components (cards, layout, etc.)
│   ├── pages/            # Pages like About, Team, Annual, etc.
│   ├── assets/           # Images, cover art, background images
│   └── index.js / App.js # Entry point
├── public/               # Static files, index.html
├── package.json          # Dependencies & metadata
└── README.md             # ← this file