# Backend — E-Learning Platform API

This is the single **Node.js + Hono** backend that serves both the mobile app and admin portal.

## Stack
- **Framework**: Hono (TypeScript)
- **Database**: MongoDB + Mongoose
- **Media**: Cloudinary
- **Auth**: JWT + bcryptjs
- **Roles**: `STUDENT` (mobile app) | `ADMIN` (admin portal)

## Folder Structure
```
backend/
├── src/
│   ├── routes/       # Auth, Courses, Lessons, Enrollments, Admin routes
│   ├── models/       # Mongoose schemas (User, Course, Lesson, Enrollment)
│   ├── middleware/   # JWT auth & role-based access control
│   └── lib/          # MongoDB connection & Cloudinary helpers
├── .env              # Environment variables (tracked for team collaboration)
└── package.json
```

## Environment Variables (`.env`)
```env
PORT=3001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Setup (coming soon)
> Backend scaffold is in progress. Run `npm run dev` from this folder once set up.

