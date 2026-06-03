# Yasmine Fine Food Web App — AI Agent Instructions (`JULES.md`)

This file provides system context, environment configurations, coding standards, and project constraints for AI coding assistants (such as Google Jules, GitHub Copilot, Cursor, and Claude Code) to build, test, and maintain this codebase effectively.

## 📋 Project Overview

- **Name:** Yasmine Fine Food
- **Primary Goal:** Premium catering & food services website and active Supabase database monitoring hub.
- **Architecture:** React + Vite SPA.
- **Backend:** Supabase (Database + Auth).
- **Automation:** GitHub Actions workflow running daily to ping database instances to keep them active (avoiding free-tier sleeping).

---

## 🛠️ Environment & Setup

### Package Manager
- **Preferred:** `npm` (Lockfile: `package-lock.json`)

### Core Commands
- **Install Dependencies:** `npm install`
- **Start Local Staging/Dev Server:** `npm run dev` (Runs by default on `http://localhost:5173`)
- **Run Production Build Verification:** `npm run build`
- **Lint Codebase:** `npm run lint` (runs `eslint .`)
- **Vercel Deploy:** `npx vercel --prod`

### Automation Scripts (Keep-Alive Cron)
- **Workflow:** `.github/workflows/keep-alive.yml`
- **Script:** `scripts/keep_alive.py` (Python 3.x script that executes daily at 00:00 UTC).
- **Scope:** Centralized ping manager for both **Yasmine Fine Food** and **ammartawil.com** databases.

---

## 🎨 Design System & Styling (Vanilla CSS)

The project utilizes a custom **Fine Food / Culinary** organic palette. Do not add arbitrary frameworks like Tailwind CSS unless explicitly requested.

### Key CSS Custom Properties (`src/index.css`)
- **Green (Main):** `--color-green: #4f632d`
- **Terracotta (Accent):** `--color-terracotta: #c44d34`
- **Cream (Background):** `--color-cream: #faf9f6`
- **Dark (Text):** `--color-dark: #1c1b18`
- **Typography:** `--font-serif: "Playfair Display"` (Luxury Headers), `--font-sans: "Inter"` (Clean Body), `--font-script: "Dancing Script"` (Handwritten Elements)

### Styling Guardrails
- **Vanilla CSS:** Maintain transitions and responsive media queries defined in `src/index.css`.
- **Buttons:** Support rounded-pill buttons using `.btn-primary` with hover scale transforms (`transform: translateY(-3px) scale(1.02)`).

---

## 🛡️ Coding Guardrails & Best Practices

1. **Keep-Alive Script Safety:** Do not modify `scripts/keep_alive.py` or `.github/workflows/keep-alive.yml` without verifying Python runtime parameters. Ensure that GitHub Secrets dependencies (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `AMMAR_SUPABASE_URL`, and `AMMAR_SUPABASE_ANON_KEY`) are respected.
2. **Local Build Check:** Always verify local builds via `npm run build` before pushing to Vercel deployment.
3. **No Secret Hardcoding:** Ensure database connection parameters remain completely dynamic in `.env` files.
