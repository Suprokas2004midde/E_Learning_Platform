# Project Tracking & Codebase Reference

This document tracks every folder, file, and feature in the **E-Learning Platform** monorepo so all collaborators can easily understand how the project is structured and written.

---

## Progress Checklist

- [x] **Step 1**: Root monorepo setup (`.gitignore`, `pnpm-workspace.yaml`, `package.json`, `turbo.json`, `AGENTS.md`, `README.md`)
- [x] **Step 2**: Shared types & Zod schemas (`packages/shared`)
- [ ] **Step 3**: Public Mobile App (`frontend/mobile` — Expo + Expo Router + NativeWind)
- [ ] **Step 4**: Single Backend (`backend/` — Hono + MongoDB + Cloudinary + JWT)
- [ ] **Step 5**: Admin Portal (`frontend/admin` — Next.js + Tailwind + Vercel)

---

## File-by-File Reference

### Root (`/`)
| File | Purpose |
| :--- | :--- |
| `.gitignore` | Ignores `node_modules/`, build outputs (`.next/`, `.expo/`, `dist/`), and logs. **Intentionally keeps `.env` tracked** for team collaboration. |
| `pnpm-workspace.yaml` | Defines the monorepo workspaces: `frontend/*`, `backend`, and `packages/*`. |
| `package.json` | Root workspace scripts (`dev`, `build`, `lint`, `typecheck`) powered by Turborepo. |
| `turbo.json` | Configures Turborepo task caching and execution order. |
| `AGENTS.md` | Rules for AI assistants (no auto-commit/push, stay on `main`, keep `.env` tracked). |
| `README.md` | Project overview, tech stack, and setup instructions. |
| `PROJECT_TRACKING.md` | This file — collaborator reference for every file and feature. |

### Shared Package (`packages/shared/`)
| File | Purpose |
| :--- | :--- |
| `package.json` | Defines `@repo/shared` workspace package with `zod`. |
| `tsconfig.json` | TypeScript configuration for strict type-checking. |
| `src/index.ts` | Exports shared Zod schemas & inferred TS types (`UserRole`, `RegisterInput`, `LoginInput`, `CourseInput`, `LessonInput`). |

### Public Mobile App (`frontend/mobile/`)
- `app/` — Expo Router file-based screens (tabs, auth, course details, video player).
- `components/` — Reusable NativeWind UI components.
- `services/` — API client, React Query hooks, and `expo-secure-store` token helpers.

### Admin Portal (`frontend/admin/`)
- `src/app/` — Next.js App Router pages (Login, Dashboard, Courses, Lessons, Users).
- `src/components/` — Reusable UI components.
- `src/lib/` — API client and auth helpers.

### Backend (`backend/`)
- `src/routes/` — Hono route handlers (`auth`, `courses`, `lessons`, `enrollments`, `admin`).
- `src/models/` — Mongoose schemas (`User`, `Course`, `Lesson`, `Enrollment`).
- `src/middleware/` — JWT verification and role-based access (`STUDENT` vs `ADMIN`).
- `src/lib/` — MongoDB connection and Cloudinary upload helpers.

