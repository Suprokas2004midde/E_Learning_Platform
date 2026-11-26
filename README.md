# E-Learning Platform (Final Year BTech Project)

A lightweight, scalable, full-stack E-Learning Platform built as a unified **npm workspaces** monorepo.

## Architecture

- **`frontend/mobile`**: Student mobile app built with **Expo (Expo Router) + React Native + NativeWind + TypeScript**.
- **`frontend/admin`**: Instructor & Admin web portal built with **React + Vite + Tailwind CSS**.
- **`backend/`**: REST API built with **Node.js + Express + MongoDB (Mongoose)** with 3-tier Layered MVC architecture, **Cloudinary** (video/media), and **JWT** auth.
- **`packages/shared`**: Shared TypeScript types and **Zod** validation schemas (`@repo/shared`).

## Package Manager & Workspaces

This repository uses **npm** (v9/v10+) with native npm workspaces.

1. **Install dependencies** (from the repo root):
   ```bash
   npm install
   ```

2. **Run Services Individually**:
   - **Backend**:
     ```bash
     cd backend
     npm run dev
     ```
   - **Admin Web Dashboard**:
     ```bash
     cd frontend/admin
     npm run dev
     ```
   - **Expo Mobile App**:
     ```bash
     cd frontend/mobile
     npx expo start
     ```

## Collaboration Notes

- See [`PROJECT_TRACKING.md`](./PROJECT_TRACKING.md) for a detailed file-by-file breakdown and progress log.
- `.env` files are tracked in git for team collaboration—be careful not to share production secrets publicly.
- All development should occur on feature branches; `main` is merged after review.
