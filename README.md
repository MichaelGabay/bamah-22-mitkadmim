# 🚀 Bamah 22 — Mitkadmim

> Full-stack application: **React (Vite)** client + **Node.js** server.  
> Clone → `npm start` once → then `npm run dev` for daily use.

---

## 📋 Prerequisites

- **Node.js** (v18 or later recommended)
- **npm** (comes with Node.js)
- **Git**

---

## ⬇️ Clone the Repository

```bash
git clone https://github.com/MichaelGabay/bamah-22-mitkadmim.git
cd bamah-22-mitkadmim
```

---

## ⚙️ Environment (server)

Before running the server, copy `server/env-examples.txt` and create your own `.env` file in the `server/` folder:

```bash
# Linux / macOS / Git Bash
cp server/env-examples.txt server/.env

# Windows (PowerShell or cmd)
copy server\env-examples.txt server\.env
```

Edit `server/.env` with your values (e.g. `PORT`, `MONGO_URI`, `JWT_SECRET`). Do this **before** running the server.

---

## 🎯 Quick Start

### First time setup & run

Install all dependencies (root, server, and client) and start both the client and the server:

```bash
npm start
```

This will:

1. Install root dependencies
2. Install server dependencies
3. Install client dependencies
4. Start the **server** and **client** in parallel

Use this whenever you’ve just cloned the repo or added new packages.

---

### Daily development

After you’ve run `npm start` at least once, you can start the app with:

```bash
npm run dev
```

This runs only the client and server (no install step). Use this for your usual development workflow.

---

## 📁 Project structure

| Path      | Description             |
| --------- | ----------------------- |
| `client/` | React + Vite frontend   |
| `server/` | Node.js backend         |
| Root      | Shared scripts & config |

---

## 🎨 Styling — Tailwind CSS

**Tailwind CSS** is already configured in the client. No extra setup needed.

- **Tailwind v4** with the **Vite plugin** (`@tailwindcss/vite`) in `client/vite.config.js`
- Base import in `client/src/index.css` via `@import "tailwindcss"`

Use utility classes in your React components right away. See [tailwindcss.com](https://tailwindcss.com) for the docs.

---
