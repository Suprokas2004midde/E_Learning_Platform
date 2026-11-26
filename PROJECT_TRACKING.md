# Project Tracking & Codebase Reference

This document tracks every folder, file, and feature in the **E-Learning Platform** monorepo so all collaborators can easily understand how the project is structured and written.

---

## Progress Checklist

- [x] **Step 1**: Root monorepo setup with npm workspaces (`.gitignore`, `.npmrc`, `package.json`, `AGENTS.md`, `README.md`)
- [x] **Step 2**: Shared types & Zod schemas (`packages/shared` — User, Course, Lesson, Enrollment)
- [x] **Step 3**: Student Mobile App (`frontend/mobile` — Expo SDK 58 + Expo Router + NativeWind + Vodafone-inspired Design System)
- [x] **Step 4**: Single Backend (`backend/` — Node.js + Express + MongoDB Mongoose + 3-Tier Layered MVC)
- [x] **Step 5**: Admin & Seller Portal (`frontend/admin` — React + Vite + Tailwind CSS + Video Uploader)

---

## How Collaborators Can Run the Project

1. **Install dependencies** (from the root `E_Learning_Platform/`):
   ```bash
   npm install
   ```

2. **Start the Backend** (from `backend/`):
   ```bash
   cd backend
   npm run dev
   ```
   Server runs at `http://localhost:3001`. Health check: `http://localhost:3001/api/health`.

3. **Start the Admin & Instructor Web Portal** (from `frontend/admin/`):
   ```bash
   cd frontend/admin
   npm run dev
   ```
   Portal runs at `http://localhost:3000`.

4. **Start the Student Mobile App** (from `frontend/mobile/`):
   ```bash
   cd frontend/mobile
   npm run dev
   ```
   - **On Phone**: Scan the QR code with **Expo Go**.
   - **In Browser (Web)**: Press `w` in the terminal (or run `npm run web`), and it opens automatically at `http://localhost:8081`!

> **Note**: `.npmrc` sets `legacy-peer-deps=true` globally so all installs resolve cleanly across the monorepo.

---

## File-by-File Reference

### Root (`/`)
| File | Purpose |
| :--- | :--- |
| `.gitignore` | Ignores `node_modules/`, build outputs, and logs. **Intentionally keeps `.env` tracked** for team collaboration. |
| `.npmrc` | Configures `legacy-peer-deps=true` for clean peer resolution across dependencies. |
| `package.json` | Root configuration defining npm workspaces (`frontend/*`, `backend`, `packages/*`) and convenience dev scripts. |
| `AGENTS.md` | Rules for AI assistants (no auto-commit/push, branch discipline, keep `.env` tracked). |
| `README.md` | Project overview, tech stack, and setup instructions. |
| `PROJECT_TRACKING.md` | This file — collaborator reference for every file and feature. |
| `DESIGN_SYSTEM_VODAFONE.md` | Vodafone-inspired design system specification reference (typography, color palettes, spacing, UI component guidelines). |

### Shared Package (`packages/shared/`)
| File | Purpose |
| :--- | :--- |
| `package.json` | Defines `@repo/shared` workspace package with `zod`. |
| `tsconfig.json` | TypeScript configuration for strict type-checking. |
| `src/index.ts` | Exports shared Zod schemas & inferred TS types (`UserRole`: `STUDENT` \| `INSTRUCTOR` \| `ADMIN`, `RegisterInput`, `LoginInput`, `CourseInput`, `LessonInput`, `EnrollmentInput`). |

### Public Mobile App (`frontend/mobile/`)
| File / Folder | Purpose |
| :--- | :--- |
| `package.json`, `tsconfig.json`, `app.json` | Expo SDK 58, Expo Router, NativeWind, react-native-reanimated (4.8.0), react-native-worklets, TanStack Query, and Android package config. |
| `.env` | Environment variable template (`EXPO_PUBLIC_API_URL=http://localhost:3001`). Tracked for team collaboration. |
| `tailwind.config.js`, `global.css`, `babel.config.js`, `metro.config.js` | NativeWind (Tailwind CSS for React Native) setup with `darkMode: "class"` for Web compatibility and Reanimated Babel plugin. |
| `app/_layout.tsx` | Root layout with `SafeAreaProvider`, `QueryClientProvider`, and `Stack`. |
| `app/(tabs)/_layout.tsx` | Bottom tab navigator with refined height, item alignment, and label padding to prevent text truncation across devices. |
| `app/(tabs)/index.tsx` | Home screen featuring a Vodafone editorial dark hero banner, pill categories, and course feed. |
| `app/(tabs)/courses.tsx` | Explore/search courses screen with Vodafone pill search bar and curriculum inventory. |
| `app/(tabs)/learning.tsx` | "My Learning" dashboard with live progress meters, resume training cards, and active module badges. |
| `app/(tabs)/profile.tsx` | Student profile dashboard with status chips, certificate tracking, and account management list. |
| `components/ResponsiveContainer/ResponsiveContainer.tsx` | Responsive shell enforcing mobile viewports (`max-w-[480px]`), centering on tablets/web, and managing safe areas. |
| `components/Header/Header.tsx` | Reusable top header with Vodafone typography, uppercase red eyebrows, and notification action. |
| `components/CategoryPill/CategoryPill.tsx` | Reusable filter pill with Vodafone active scarlet red background and crisp borders. |
| `components/CourseCard/CourseCard.tsx` | Clean Vodafone-styled course card with pricing, duration, ratings, and arrow action icon. |
| `hooks/useCourses.ts` | Course fetching (React Query) & category filtering state logic with offline fallback. |
| `services/api.ts` | API fetch helper with `expo-secure-store` JWT support pointing to `EXPO_PUBLIC_API_URL`. |

### Backend (`backend/`)
| File / Folder | Purpose |
| :--- | :--- |
| `server.js` | Express application entry point with CORS, JSON body parser, and route mounting. |
| `config/db.js` | Database connection handler with Mongoose. |
| `schema/courseModel.js` | Mongoose schema and model definition (Data Structure layer). |
| `repository/courseRepository.js` | Data Access layer (Direct Mongoose queries: find, create, update). |
| `services/courseService.js` | Business Logic layer (Handles course validation & data operations). |
| `controllers/courseController.js` | Controller layer (Extracts request params/body, calls services, formats HTTP response). |
| `routes/courseRoute.js` | API route definitions (`/api/course`) linking middleware, validators, and controllers. |
| `middleware/authMiddleware.js` | JWT verification and user extraction middleware. |
| `validators/courseValidator.js` | Request body validation middleware. |
| `util/responseHandler.js` | Standardized response helper utility. |
| `README.md` | MVC architecture breakdown, folder structure, and dev instructions. |
| `.env` | Environment variable template (`PORT`, `MONGODB_URI`, `JWT_SECRET`, `CLOUDINARY_*`). Tracked for team collaboration. |
| `package.json` | Configured with ES Modules (`"type": "module"`), Express, Mongoose, and dev scripts. |

### Admin Portal (`frontend/admin/`)
| File / Folder | Purpose |
| :--- | :--- |
| `index.html` | HTML5 entry point for the React SPA. |
| `vite.config.ts` | Vite configuration configured for port 3000 and `@/` path alias. |
| `tailwind.config.js` | Tailwind CSS configuration with custom brand palette. |
| `src/main.tsx` | React DOM mount entry point. |
| `src/App.tsx` | Main web layout and routing shell with React Router DOM. |
| `src/index.css` | Global styles & Tailwind base directives. |
| `src/components/Sidebar/Sidebar.tsx` | Left navigation sidebar with active route highlighting. |
| `src/components/Navbar/Navbar.tsx` | Top search bar, notifications, and instructor profile chip. |
| `src/components/VideoUploader/VideoUploader.tsx` | Drag-and-drop video upload zone with live Axios upload percentage progress and local preview. |
| `src/components/VideoPreview/VideoPreview.tsx` | In-browser HTML5 video player component. |
| `src/components/CourseForm/CourseForm.tsx` | React Hook Form with Zod schema validation for course metadata. |
| `src/pages/Dashboard.tsx` | Seller analytics overview (revenue, enrolled students, active courses). |
| `src/pages/Courses.tsx` | Course inventory table with status tags and management actions. |
| `src/pages/CreateCourse.tsx` | Two-step wizard for creating courses and uploading lesson videos. |
| `src/pages/UploadVideoPage.tsx` | Dedicated video upload test page. |
| `src/pages/Login.tsx` | Instructor / Admin login form. |
| `src/hooks/useVideoUpload.ts` | Custom hook for tracking video upload percentages and handling errors. |
| `src/hooks/useAuth.ts` | Authentication state and local storage token management. |
| `src/services/api.ts` | Axios instance preconfigured with backend URL and Authorization header interceptor. |
| `src/services/courseService.ts` | API service for fetching courses, creating courses, and getting analytics. |
| `README.md` | Tech stack, folder structure, and dev instructions. |
| `.env` | Environment variable template (`VITE_API_URL=http://localhost:3001`). Tracked for team collaboration. |
| `package.json` | Configured with React, Vite, Tailwind CSS, Lucide icons, React Hook Form, and Axios. |
