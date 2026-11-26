# Admin & Seller Portal — E-Learning Platform

A pure **Vite + React + Tailwind CSS** web application for instructors and platform administrators to manage courses, upload lessons, and view revenue analytics.

## Tech Stack
- **Framework**: React 18 (SPA)
- **Bundler & Dev Server**: Vite (Node.js)
- **Styling**: Tailwind CSS + PostCSS
- **Routing**: React Router DOM (v7)
- **Form Handling**: React Hook Form + Zod
- **Media Upload**: Axios with real-time `onUploadProgress` + HTML5 video preview
- **Icons**: Lucide React

## Folder Structure
```
frontend/admin/
├── index.html                   # HTML entry point
├── src/
│   ├── main.tsx                 # React DOM mount
│   ├── App.tsx                  # Client routing shell
│   ├── index.css                # Tailwind directives
│   ├── components/              # Modular UI components (own folder per component)
│   │   ├── Sidebar/             # Left navigation menu
│   │   ├── Navbar/              # Top search & user status bar
│   │   ├── VideoUploader/       # Drag-and-drop video zone with live progress
│   │   ├── VideoPreview/        # HTML5 browser video player
│   │   └── CourseForm/          # Course details validation form
│   ├── pages/                   # Web pages
│   │   ├── Dashboard.tsx        # Revenue, students, and course analytics
│   │   ├── Courses.tsx          # Course inventory table
│   │   ├── CreateCourse.tsx     # 2-step course creator wizard
│   │   ├── UploadVideoPage.tsx  # Video uploader demonstration
│   │   └── Login.tsx            # Instructor / Admin login
│   ├── hooks/                   # Custom hooks (useVideoUpload, useAuth)
│   └── services/                # Axios API client pointing to Express backend
├── .env                         # VITE_API_URL=http://localhost:3001 (tracked for team collaboration)
├── vite.config.ts               # Vite configuration (port 3000)
├── tailwind.config.js           # Tailwind theme configuration
├── tsconfig.json
└── package.json
```

## Running the Web Dashboard

From `frontend/admin`:
```bash
npm install
npm run dev
```

The portal runs at `http://localhost:3000`.
