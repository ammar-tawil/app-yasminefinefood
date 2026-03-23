# Yasmine Fine Food - Premium Catering & Food Service

![Quality Check](https://github.com/ammar-tawil/app-yasminefinefood.com/actions/workflows/quality-check.yml/badge.svg)

## 🔧 Maintenance & uptime
This project includes an automated "Keep-Alive" system to prevent the Supabase database from pausing due to inactivity (common on the free tier).

### Centralized Monitoring
- **Workflow**: `.github/workflows/keep-alive.yml`
- **Script**: `scripts/keep_alive.py`
- **Schedule**: Every day at 00:00 UTC.
- **Scope**: This repository serves as the centralized "pinger" for both **Yasmine Fine Food** and **ammartawil.com**.

### Configuration (GitHub Secrets)
The following secrets must be configured in the GitHub repository for the ping to work:
- `SUPABASE_URL` & `SUPABASE_ANON_KEY` (for Yasmine Fine Food)
- `AMMAR_SUPABASE_URL` & `AMMAR_SUPABASE_ANON_KEY` (for Ammar Portfolio)

## 🛠️ Tech Stack
- **Framework**: React + Vite
- **Database**: Supabase
- **Automation**: GitHub Actions (Python)
- **Deployment**: Vercel
