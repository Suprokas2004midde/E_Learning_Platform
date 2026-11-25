# E-Learning Platform (Final Year BTech Project)

A lightweight, scalable, full-stack E-Learning Platform built as a **pnpm + Turborepo** monorepo.

## Architecture

- **`frontend/mobile`**: Public Android/iOS mobile app built with **Expo (Expo Router) + NativeWind + TypeScript**.
- **`frontend/admin`**: Admin & Instructor web portal built with **Next.js + Tailwind CSS + shadcn/ui** (hosted on **Vercel**).
- **`backend/`**: Single **Node.js + Hono** REST API serving both the mobile app and admin portal, using **MongoDB (Mongoose)**, **Cloudinary** (media/videos), and **JWT** auth.
- **`packages/shared`**: Shared TypeScript types and **Zod** validation schemas (`@repo/shared`).

## Getting Started

1. **Install dependencies** (from the repo root):
   ```bash
   pnpm install
   ```

2. **Run development servers**:
   ```bash
   pnpm dev
   ```

## Collaboration Notes

- See [`PROJECT_TRACKING.md`](./PROJECT_TRACKING.md) for a detailed file-by-file breakdown and progress log.
- `.env` files are tracked in git for team collaboration—be careful not to share production secrets publicly.

