# Admin Portal — E-Learning Platform

This is the **Next.js** admin portal for instructors and platform admins.

## Stack
- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Hosting**: Vercel
- **API**: Connects to the single backend (`backend/`)

## Folder Structure
```
admin/
├── src/
│   ├── app/          # Next.js App Router pages (Login, Dashboard, Courses, Users)
│   ├── components/   # Reusable UI components (each in own folder)
│   └── lib/          # API client & auth helpers
├── .env              # Environment variables (tracked for team collaboration)
└── package.json
```

## Environment Variables (`.env`)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Setup (coming soon)
> Admin portal scaffold is in progress. Run `npm run dev` from this folder once set up.
