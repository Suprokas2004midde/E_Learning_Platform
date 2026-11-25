# Project Tracking & Codebase Reference

This document tracks every folder, file, and feature in the **E-Learning Platform** monorepo so all collaborators can easily understand how the project is structured and written.

---

## Progress Checklist

- [x] **Step 1**: Root monorepo setup (`.gitignore`, `.npmrc`, `pnpm-workspace.yaml`, `package.json`, `turbo.json`, `AGENTS.md`, `README.md`)
- [x] **Step 2**: Shared types & Zod schemas (`packages/shared`)
- [x] **Step 3**: Public Mobile App layout & modular components (`frontend/mobile` — Expo SDK 58 + Expo Router + NativeWind)
- [x] **Step 3.5**: Placeholder scaffolds for `backend/` and `frontend/admin/` with `.env` templates and READMEs
- [ ] **Step 4**: Single Backend (`backend/` — Hono + MongoDB + Cloudinary + JWT)
- [ ] **Step 5**: Admin Portal (`frontend/admin` — Next.js + Tailwind + Vercel)

---

## How Collaborators Can Run the Project

1. **Install dependencies** (from the root `E_Learning_Platform/`):
   ```bash
   npm install
   ```
2. **Start the Mobile App** (from `frontend/mobile/`):
   ```bash
   npx expo start -c
   ```
   Scan the QR code with **Expo Go** on Android (or press `a` for Android emulator / `w` for web).

> **Note**: `.npmrc` sets `legacy-peer-deps=true` globally so all installs resolve cleanly across the monorepo.

---

## File-by-File Reference

### Root (`/`)
| File | Purpose |
| :--- | :--- |
| `.gitignore` | Ignores `node_modules/`, build outputs (`.next/`, `.expo/`, `dist/`), and logs. **Intentionally keeps `.env` tracked** for team collaboration. |
| `.npmrc` | Configures `node-linker=hoisted` so Expo Metro and NativeWind resolve all `pnpm` dependencies cleanly. |
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
| File / Folder | Purpose |
| :--- | :--- |
| `package.json`, `tsconfig.json`, `app.json` | Expo SDK 52+, Expo Router, NativeWind, TanStack Query, and Android package config. |
| `tailwind.config.js`, `global.css`, `babel.config.js`, `metro.config.js` | NativeWind (Tailwind CSS for React Native) setup. |
| `app/_layout.tsx` | Root layout with `SafeAreaProvider`, `QueryClientProvider`, and `Stack`. |
| `app/(tabs)/_layout.tsx` | Bottom tab navigator (`Home`, `Courses`, `My Learning`, `Profile`). |
| `app/(tabs)/index.tsx` | Home/Discover screen with category filter pills and featured courses. |
| `app/(tabs)/courses.tsx`, `learning.tsx`, `profile.tsx` | Placeholder screens for Courses, My Learning, and Profile tabs. |
| `components/Header/Header.tsx` | Reusable top header component (own folder). |
| `components/CategoryPill/CategoryPill.tsx` | Reusable category filter pill component (own folder). |
| `components/CourseCard/CourseCard.tsx` | Reusable course card component (own folder). |
| `hooks/useCourses.ts` | Separated course filtering & state logic. |
| `services/api.ts` | Separated API fetch helper with `expo-secure-store` JWT support. |

### Backend (`backend/`)
| File / Folder | Purpose |
| :--- | :--- |
| `README.md` | Stack overview, folder structure, and `.env` variable reference. |
| `.env` | Environment variable template (`PORT`, `MONGODB_URI`, `JWT_SECRET`, `CLOUDINARY_*`). Tracked for team collaboration. |
| `package.json` | Placeholder package — full scaffold coming in Step 4. |
| `src/index.ts` | Entry point placeholder. |
| `src/routes/` | Will contain Hono route handlers (`auth`, `courses`, `lessons`, `enrollments`, `admin`). |
| `src/models/` | Will contain Mongoose schemas (`User`, `Course`, `Lesson`, `Enrollment`). |
| `src/middleware/` | Will contain JWT verification and role-based access (`STUDENT` vs `ADMIN`). |
| `src/lib/` | Will contain MongoDB connection and Cloudinary upload helpers. |

### Admin Portal (`frontend/admin/`)
| File / Folder | Purpose |
| :--- | :--- |
| `README.md` | Stack overview, folder structure, and `.env` variable reference. |
| `.env` | Environment variable template (`NEXT_PUBLIC_API_URL`). Tracked for team collaboration. |
| `package.json` | Placeholder package — full scaffold coming in Step 5. |
| `src/app/page.tsx` | Entry point placeholder. |
| `src/app/` | Will contain Next.js App Router pages (Login, Dashboard, Courses, Lessons, Users). |
| `src/components/` | Will contain reusable UI components (each in own folder). |
| `src/lib/` | Will contain API client and auth helpers. |

